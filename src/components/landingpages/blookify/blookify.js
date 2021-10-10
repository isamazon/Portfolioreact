import React from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { Button } from '@material-ui/core';
// CSS
import './blookify.css';
// imgs
import Blookify from '../../../assets/blookify.PNG';
import Ahes from '../../../assets/ahes.PNG';
import Humble from '../../../assets/humble.PNG';
import PortfolioPic from '../../../assets/portfolio.PNG';
// Components
import Blookifyimg from '../../../assets/blookifyimg.png';
// Icons
import { FaGithub, FaLinkedin, FaRegFileAlt, FaGlobe } from 'react-icons/fa';
import { SiIndeed } from 'react-icons/si';

// Sound
import Sound1 from '../../../assets/clicksfx.mp3';
class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      show2: false,
      show3: false,
      show4: false,
      intitalP: 'Click above for project info :)',
      intialPclass: 'text-content-container',
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleHover2 = this.handleHover2.bind(this);
    this.handleHover3 = this.handleHover3.bind(this);
    this.handleHover4 = this.handleHover4.bind(this);
    //   Paragraph
    this.handleClick = this.handleClick.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
  }
  // Audio
  playAudio = () => {
    new Audio(Sound1).play();
  };
  handleHover() {
    this.setState({ show: !this.state.show });
  }
  handleHover2() {
    this.setState({ show2: !this.state.show2 });
  }
  handleHover3() {
    this.setState({ show3: !this.state.show3 });
  }
  handleHover4() {
    this.setState({ show4: !this.state.show4 });
  }
  //
  handleClick() {
    this.playAudio();
    this.setState({ intitalP: 'Blookify is a fullstack MERN app' });
  }
  handleClick2() {
    this.playAudio();
    this.setState({
      intitalP:
        'Blookify is a fullstack application using the MERN stack utilizing the GOOGLE books api.',
      intialPclass: 'text-content-container',
    });
  }
  handleClick3() {
    this.playAudio();
    this.setState({
      intitalP:
        'Blookify is a fullstack application using the MERN stack utilizing the GOOGLE books api. And giving the user the ability to send books they have already read or are reading currently to their very own library',
      intialPclass: 'text-content-container',
    });
  }
  handleClick4() {
    this.playAudio();
    this.setState({
      intitalP:
        'Blookify is a full stack MERN application also using googleOauth and also has user authenification using JWT middleware.And giving the user the ability to send books they have already read or are reading currently to their very own library. This project is showcasing my skills in the MERN stack by showing efficiency in the backend creating endpoints and functionality and connecting all of that to the front end using redux for state management and showcasing the ability of using react hooks like useState, useEffect and useRef.',
      intialPclass: 'text-content-container-long',
    });
  }
  handleClick5() {
    this.playAudio();
    this.setState({
      intitalP:
        'Blookify is a fullstack application using the MERN tech stack, blookify utilizes the GOOGLE books api utilizing over seven millions books for the users disposal giving them the option to send whatever book theyre currently reading or whatver books theyve already read to their own personal libraries! Utilizing the API built using Nodejs/Express for the backend and MongoDB as the database! This application was a passion project for me not only because im a big book reader but it also really taught me how the backend works and how to creat databases to store important data!',
      intialPclass: 'text-content-container-long',
    });
  }
  render() {
    //   REACT SLIDER SETTINGS
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };

    return (
      <div className="blookify-page-cont">
        <Col xl={4} className="info-container">
          <div className={this.state.intialPclass}>
            <Fade bottom cascade>
              <h1 className="blookify-h1-1">Blookify</h1>
            </Fade>
            <Fade bottom cascade>
              <div className="button-container">
                <a
                  href="https://github.com/isamazon/Blookify"
                  className="link-container"
                >
                  <Button className="link-button">
                    <FaGithub className="icon" size="40" /> Source Code
                  </Button>
                </a>
                <a href="https://blookify.com/" className="link-container">
                  <Button className="link-button">
                    <FaGlobe className="icon" size="40" /> Live site
                  </Button>
                </a>
              </div>
            </Fade>
            <Fade bottom cascade>
              <div className="adjust-container">
                <p>Adjust info length:</p>
                <div className="button-cnt">
                  <label
                    htmlFor="button"
                    className="radio"
                    onClick={this.handleClick}
                  >
                    <input type="radio" name="button" className="button" />
                    <div className="radio__radio"></div>
                  </label>
                  <label
                    htmlFor="button"
                    className="radio"
                    onClick={this.handleClick2}
                  >
                    <input type="radio" name="button" className="button" />
                    <div className="radio__radio"></div>
                  </label>
                  <label
                    htmlFor="button"
                    className="radio"
                    onClick={this.handleClick3}
                  >
                    <input type="radio" name="button" className="button" />
                    <div className="radio__radio"></div>
                  </label>
                  <label
                    htmlFor="button"
                    className="radio"
                    onClick={this.handleClick4}
                  >
                    <input type="radio" name="button" className="button" />
                    <div className="radio__radio"></div>
                  </label>
                  <label
                    htmlFor="button"
                    className="radio"
                    onClick={this.handleClick5}
                  >
                    <input type="radio" name="button" className="button" />
                    <div className="radio__radio"></div>
                  </label>
                </div>
                <div className="button-text">
                  <p className="shortest">Shortest</p>
                  <p className="longest">Longest</p>
                </div>
              </div>
            </Fade>
            <Fade bottom>
              <p className="blookify-p">{this.state.intitalP}</p>
            </Fade>
            <Fade bottom cascade>
              <div className="important-links">
                <a
                  href="https://github.com/isamazon"
                  onMouseEnter={this.handleHover}
                  onMouseLeave={this.handleHover}
                  className="link"
                >
                  <FaGithub size="45" className="icon" />
                  <Zoom opposite when={this.state.show}>
                    <p className="icon-text">Github</p>
                  </Zoom>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/isaiah-mazon-1786b8206/"
                  onMouseEnter={this.handleHover2}
                  onMouseLeave={this.handleHover2}
                  className="link"
                >
                  <FaLinkedin size="45" className="icon" />
                  <Zoom opposite when={this.state.show2}>
                    <p className="icon-text">LinkedIn</p>
                  </Zoom>
                </a>
                {/* Indeed */}
                <a
                  href="https://my.indeed.com/resume?hl=en&co=US&from=gnav-homepage&_ga=2.1294257.1439842392.1633753792-1298732303.1633753792"
                  onMouseEnter={this.handleHover3}
                  onMouseLeave={this.handleHover3}
                  className="link"
                >
                  <SiIndeed size="45" className="icon" />
                  <Zoom opposite when={this.state.show3}>
                    <p className="icon-text">Indeed</p>
                  </Zoom>
                </a>
                <a
                  href="https://github.com/isamazon"
                  onMouseEnter={this.handleHover4}
                  onMouseLeave={this.handleHover4}
                  className="link"
                >
                  <FaRegFileAlt size="45" className="icon" />
                  <Zoom opposite when={this.state.show4}>
                    <p className="icon-text">Resume</p>
                  </Zoom>
                </a>
              </div>
            </Fade>
          </div>
        </Col>
        <Col xl={8} className="right-col">
          <img src={Blookifyimg} alt="" className="blookify-img" />
          <div className="blookify-gradient-box"></div>
          {/* SLider */}
          <Slider {...settings} className="project-container">
            <div className="img-container">
              <img
                src={Ahes}
                onClick={this.props.ahestoggle}
                alt=""
                className="project-imgs"
              />
            </div>
            <div className="img-container">
              <img
                src={PortfolioPic}
                onClick={this.props.portfoliotoggle}
                alt=""
                className="project-imgs"
              />
            </div>
            <div className="img-container">
              <img
                src={Humble}
                onClick={this.props.humbletoggle}
                alt=""
                className="project-imgs"
              />
            </div>
            <div className="img-container">
              <img
                src={Blookify}
                onClick={this.props.blookifytoggle}
                alt=""
                className="project-imgs"
              />
            </div>
          </Slider>
        </Col>
      </div>
    );
  }
}

export default Portfolio;
