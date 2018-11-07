import React from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import flushChunks from 'webpack-flush-chunks'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { flushChunkNames } from 'react-universal-component/server'

import routes from '../shared/route'
import configureStore from '../shared/store'

export default ({ clientStats }) => (req, res) => {
  const lang = 'en'
  const context = {}
  const branch = matchRoutes(routes, req.url)
  const store = configureStore(true)
  const promises = branch.map(({route}) => {
    let fetchData = route.component.fetchData;
    return fetchData instanceof Function ? fetchData(store) : Promise.resolve(null)
  })
  return Promise.all(promises).then(data => {
    const app = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Provider>
    )

    const helmet = Helmet.renderStatic()

    const { js, styles, cssHash } = flushChunks(clientStats, {
      chunkNames: flushChunkNames(),
    })

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
        `<!doctype html><html lang=${lang}><head>${styles}${helmet.title}${helmet.meta.toString()}${helmet.link.toString()}</head><body><div id="react-root">${app}</div><script>window.__INITIAL_STATE__=${JSON.stringify(store.getState())}</script>${js}${cssHash}</body></html>`
      )
  })
}
