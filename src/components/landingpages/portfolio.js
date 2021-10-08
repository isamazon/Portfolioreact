import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
// CSS
import './landingpage.css';
// Components
import PortfolioImg from './portfolioimg';
class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      // States
      portfolioState: true,
      blookifyState: false,
      ahesState: false,
      // Header content
      header1: 'Hello,',
      header2: 'Im Isaiah Mazon',
      header3: 'Web developer',
      // Header classes
    };
  }
  setPortfolio() {
    this.setState(!this.state.portfolioState);
  }

  render() {
    let img;
    if (this.state.portfolioState) {
      img = <PortfolioImg />;
    } else {
      img = null;
    }
    return (
      <div className="landing-page-cont">
        <Col xl={4} className="info-container">
          <div className="text-content-container">
            <h1 className="portfolio-h1-1">{this.state.header1}</h1>
            <h1 className="portfolio-h1-2">{this.state.header2}</h1>
            <h1 className="portfolio-h1-3">{this.state.header3}</h1>
            <p className="portfolio-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              velit ipsum odit dicta, sequi facilis temporibus soluta, porro
              quibusdam maiores possimus ipsam fugit rem, officiis ea sit totam
              eveniet asperiores!
            </p>
          </div>
        </Col>
        <Col xl={8} className="right-col">
          {img}
          <div className="gradient-box"></div>
          <div className="project-container"></div>
        </Col>
      </div>
    );
  }
}

export default Portfolio;
