import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'


export default class News extends Component {
  static defaultProps = {
    category: 'general',
    pageSize: 6
  }
  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number
  }

  constructor(propes) {
    super(propes);
    this.state = {
      articals: [],
      page: 1
    };
    document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`;
  }

  
  async updateNews (){
    let url =
    `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=8798ec431f974a43821e547ef542db3b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articals: parsedData.articles });
  }
  
  async componentDidMount() {
    this.updateNews();
  }
  
  handleNextClick = async() =>{
    this.setState({
      page:this.state.page+1
    })
    this.updateNews();

  }

  handlePreviousClick = async() =>{
      this.setState({
      page:this.state.page-1
    })
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <div className="row">
          {this.state.articals.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  imageUrl={element.urlToImage}
                  description={element.description}
                  title={element.title}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div class="d-flex justify-content-between">
          <button  disabled={this.state.page<=1} type="button" class="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
          <button type="button" class="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
      </div>
    );
  }
}
