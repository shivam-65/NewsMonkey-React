import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {

    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{width: "20rem"}}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{
    left: '73%', zIndex:'1'
}}>
    {source}
  </span>
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p class="card-text"><small class="text-body-secondary">By {author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-dark">Read more</a>
            </div>
            </div>
      </div>
    )
  }
}
