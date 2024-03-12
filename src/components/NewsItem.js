import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, description, newsurl, imageurl, time, author, source } = this.props;

    return (
      <>
        <div>
          <div className="card" style={{ width: '18rem' }}>

            <div style={{ display: 'flex', justifyContent: 'end', position: 'absolute', right: '0' }}>
              <span className="badge rounded-pill bg-danger"  >
                {source}
                <span className="visually-hidden">unread messages</span>
              </span>
            </div>

            <img style={{ height: '20vh' }} src={imageurl ? imageurl : "https://media.istockphoto.com/id/1300930548/video/breaking-news-template-for-tv-broadcast-news-show-program-with-3d-breaking-news-text-and.jpg?s=640x640&k=20&c=V9q9-UaoDqmhg7mKbOL4QMGAjWKJy0DBf1Mp61i7JkQ="} className="card-img-top" alt="..." />
            <div className="card-body" style={{ height: '30vh' }}>
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-body-secondary">Last updated {new Date(time).toGMTString()}</small></p>
              <p className="card-text"><small className="text-body-secondary">Published by {author} </small></p>

            </div>

            <div>
            <a style={{margin: '10px', backgroundColor:'#3c3c3c'}} href={newsurl} target='_blank' className="btn btn-dark">View</a>
            </div>

          </div>
        </div>
      </>
    )
  }
}

export default NewsItem