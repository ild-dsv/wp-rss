import React from 'react'

const RepositoryItem = ({
  name,
  html_url,
  description,
  stargazers_count,
}) => {
  return (
    <div className="respository-item">
      <span className="respository-item__name">{name}</span>
      <span className="respository-item__link">{html_url}</span>
      <span className="respository-item__star">{stargazers_count}</span>
      <p className="respository-item__desc">{description}</p>
    </div>
  )
}

export default RepositoryItem
