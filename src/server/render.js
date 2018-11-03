import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet'
import flushChunks from 'webpack-flush-chunks'
import Routes from '../shared/routes'
import { flushChunkNames } from 'react-universal-component/server';

export default ({ clientStats }) => (req, res) => {
  const lang = 'en'
  const context = {}
	const app = renderToString(
		<StaticRouter location={req.url} context={context}>
			<Routes context={context} lang={lang} />
		</StaticRouter>,
	);

  const helmet = Helmet.renderStatic()

  const { js, styles, cssHash } = flushChunks(clientStats, {
		chunkNames: flushChunkNames(),
  });
  
  const status = context.status || 200

  if (context.status === 400) {
    console.error('Error 404: ', req.originalUrl);
  }

  if (context.url) {
    const redirectStatus = context.status || 302
    res.redirect(redirectStatus, context.url)
    return
  }

  res.setHeader('Cache-Control', 'public, max-age=2628000')

  res
    .status(status)
    .send(
      `<!DOCTYPE html>
        <html lang=${lang}>
          <head>
            ${styles}
            ${helmet.title}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
          </head>
          <body>
            <div id="react-root">
              ${app}
            </div>
            ${js}
            ${cssHash}
          </body>
        </html>`
    )
}