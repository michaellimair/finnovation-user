import React from 'react';
import { Card } from '@material-ui/core';
import './styles.css';
import axios from 'axios';


export class HomeNews extends React.Component {
  state = {
    news: []
  }

  componentDidMount() {
    axios.get('https://lzl.red/news')
      .then(res => {
        const news = res.data;
        this.setState({ news });
      })
  }

  render() {
    return (
      <div id="home-news" className="dash-column" style={{"overflow": "auto"}}>
        <Card className="dash-column-card">
          <ul>
            { this.state.news.map(news_ => <li><strong>{news_.title}:</strong>{news_.content}</li>)}
          </ul>
        </Card>
      </div>
    )
  }
}

export default HomeNews;