import React from 'react';
import styled from 'styled-components';
import Img1 from '../../images/contactInfo/ep_chat-dot-square.png';
import Img2 from '../../images/contactInfo/fluent_call-28-regular.png';
import Img3 from '../../images/contactInfo/fluent_location-28-regular.png';
import { Fade, Zoom } from 'react-reveal';

const ContactInfo = () => {
  return (
    <Container>
      <Content>
        <div className="heading">
          <Fade bottom>
            <h1>We’d Love to Hear from You</h1>
          </Fade>
          <Fade bottom>
            <p>Chat to our friendly team.</p>
          </Fade>
        </div>
        <AllBoxes>
          <SingleBoxe>
            <Zoom>
              <img src={Img1} alt="Img" />
            </Zoom>
            <Fade>
              <h5>Chat to us</h5>
            </Fade>
            <Fade>
              <p>Speak to our friendly team.</p>
            </Fade>
            <Fade>
              <a href="mailto:contact@rentproof.co">contact@rentproof.co</a>
            </Fade>
          </SingleBoxe>
          <SingleBoxe>
            <Zoom>
              <img src={Img2} alt="Img" />
            </Zoom>
            <Fade>
              <h5>Call Us</h5>
            </Fade>
            <Fade>
              <p>Mon-Fri from 8am to 5pm.</p>
            </Fade>
            <Fade>
              <a href="tel:(416) 646-6765">(416) 646-6765</a>
            </Fade>
          </SingleBoxe>
          <SingleBoxe>
            <Zoom>
              <img src={Img3} alt="Img" />
            </Zoom>
            <Fade>
              <h5>Visit Us</h5>
            </Fade>
            <Fade>
              <p>Visit our head office</p>
            </Fade>
            <Fade>
              <a href="#">
                401 Bay Street, Suite 1600 Toronto, Ontario M5H 2Y4, Canada
              </a>
            </Fade>
          </SingleBoxe>
        </AllBoxes>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;
const Content = styled.div`
  width: 1600px;
  height: 100%;
  margin: 0 auto;
  padding: 100px 20px;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  .button {
    padding: 50px;
    a {
      background: #ec2028;
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      padding: 20px 35px;
      border-radius: 8px;
    }
  }
  .heading {
    width: 50%;
    text-align: center;
    h1 {
      color: #2a2a2c;
      font-size: 3vw;
      line-height: 1.5;
      margin: 8px 0px;
      margin-top: 14px;
    }
    p {
      color: #888888;
      font-size: 26px;
      line-height: 1.5;
      margin: 0;
    }
  }
  @media (max-width: 992px) {
    padding-top: 0px;
    .heading {
      width: 90%;
    }
    h1 {
      font-size: 5vw !important;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 7vw !important;
    }
  }
`;
const AllBoxes = styled.div`
  padding: 80px 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const SingleBoxe = styled.div`
  padding: 30px;
  transition: 0.5s;
  h5 {
    font-size: 24px;
  }
  p {
    font-size: 20px;
  }
  a {
    color: #ec2028;
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
  }
  &:nth-child(1) {
    border-bottom: 1px solid #dfdfdf;
  }
  &:nth-child(3) {
    border-bottom: 1px solid #dfdfdf;
  }
  &:nth-child(4) {
    border-right: 1px solid #dfdfdf;
  }
  &:nth-child(5) {
    border-right: 1px solid #dfdfdf;
  }
  &:nth-child(2) {
    box-shadow: -2px 2px 5px -1px rgba(0, 0, 0, 0.82);
    box-shadow: -2px 2px 5px -1px rgba(150, 144, 144, 0.82);
    border-radius: 8px;
  }
  &:hover {
    border-radius: 0px;
    border-right: none;
    box-shadow: -2px 2px 5px -1px rgba(150, 144, 144, 0.82);
  }

  @media (max-width: 992px) {
    border-right: none !important;
    border-bottom: 1px solid #dfdfdf;
  }
`;
export default ContactInfo;
