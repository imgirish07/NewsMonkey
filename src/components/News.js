import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }

  async UpdateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3ab1599a79304f4286d47c5525e56ddb&page=${this.state.page}&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  async componentDidMount() {
    this.UpdateNews();
  }

  handlePreviouspage = async () => {
    this.setState({
      page: this.state.page - 1,
    })
    this.UpdateNews();
  }

  handleNextpage = async () => {
    this.setState({
      page: this.state.page + 1,
    })
    this.UpdateNews();
  }

  render() {
    return (
      <div className='container'>
        <h1 className='text-center' style={{ marginTop: '70px' }} ><strong>NewsMonkey- Top {this.capitalizeFirstLetter(this.props.category)} Headlines</strong></h1>
        <div className='text-center' >
          {this.state.loading && <Spinner />}
        </div>
        <div className="row">
          {
            (!this.state.loading) && this.state.articles.map((element) => {
              return <><div className="col md-3 mx-3 my-3" key={element.url}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 75) : ""} newsurl={element.url} imageurl={element.urlToImage} time={element.publishedAt} author={element.author ? element.author : "Unknown"} source={element.source.name} />
              </div></>
            })
          }
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark " onClick={this.handlePreviouspage} >&larr; Previous</button>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-dark " onClick={this.handleNextpage} >Next &rarr;</button>

          </div>
        </div>
      </div>
    )
  }
}

export default News