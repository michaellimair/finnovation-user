import React from 'react';
import { Card } from '@material-ui/core';
import './styles.css';
import axios from 'axios';


export class HomeNews extends React.Component {
  state = {
    news: []
  }

  componentDidMount() {
    axios.get('https://lzl.red/api/news')
      .then(res => {
        const news = res.data;
        this.setState({ news });
      })
  }

  render() {
    return (
      <div id="home-news" className="dash-column">
        <Card className="dash-column-card">
          <div id="news-container">
            {/* { this.state.news.map(news_ => news_.content)} */}
            { this.state.news.map(news_ => (
              <div className="news-item">
                <div className="news-item-title">{news_.title}:</div>
                <div className="news-item-content">{news_.content}</div>
              </div>
            ))}
            {/* <ul>
              { this.state.news.map(news_ => <li><strong>{news_.title}:</strong>{news_.content}</li>)}
            </ul> */}
          </div>
        </Card>
      </div>
    )
  }
}

export default HomeNews;