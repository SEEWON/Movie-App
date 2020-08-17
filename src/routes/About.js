import React from 'react';
import './About.css';

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
      This page is made by SEEWON, beginner web-app developer in 2020-08-17.
      </span>
      <span><p>
      Refer to the book "클론코딩 영화 평점 웹서비스"
      </p></span>
      <span><p>
      📬Mail me📬 : andyaaa78@Gmail dot com
      </p></span>
      <span>
      📗Github URL📗 : <a href="https://github.com/SEEWON">https://github.com/SEEWON</a>
      </span>
    </div>
  );
}

export default About;