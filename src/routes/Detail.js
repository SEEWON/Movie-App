import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const {location, history } = this.props;

    if (location.state === undefined) {
      history.push('/');
    }
  }

  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="mvlink">
        <span><a href="https://movie.naver.com/">{location.state.title}</a></span>
        <span><p>링크 이동 : 네이버 영화(검색은 직접^^)</p></span>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;