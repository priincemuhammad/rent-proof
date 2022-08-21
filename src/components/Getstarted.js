import React from 'react';
import styled from 'styled-components';
import GetstartedImg from '../images/Group6.png';
import Circle from '../images/Ellipse2.png';
import CircleTwo from '../images/Group 13.png';
import { Fade, Zoom } from 'react-reveal';

const Getstarted = () => {
  return (
    <Container>
      <Content>
        <Boxes>
          <Fade>
            <h1>
              Get started with <br /> rentproof today!
            </h1>
          </Fade>
          <Fade>
            <div className="buttons">
              <a href="#">Contact us</a>
            </div>
          </Fade>
        </Boxes>
        <Boxes>
          <Zoom>
            <img src={GetstartedImg} className="townHall" alt="GetstartedImg" />
          </Zoom>
          <Fade>
            <img src={Circle} className="circle" alt="Circle" />
            <img src={CircleTwo} className="circleTwo" alt="Circle" />
          </Fade>
        </Boxes>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  padding: 90px 20px;
  @media (max-width: 768px) {
    padding-top: 0px;
  }
`;
const Content = styled.div`
  width: 1600px;
  height: 100%;
  margin: 0 auto;
  padding: 50px;
  padding-bottom: 135px;
  background: #2a2a2c;
  border-radius: 8px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
const Boxes = styled.div`
  h1 {
    color: #fff;
    font-size: 3vw;
    line-height: 1.5;
    margin-bottom: 61px;
  }
  .buttons a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    padding: 20px 35px;
    border-radius: 8px;
    background: #ec2028;
  }
  img {
    position: absolute;
    bottom: 0;
    right: 7%;
    z-index: 1;
    max-width: 100%;
  }
  .circle {
    right: -250px;
    z-index: 0;
    height: 100%;
  }
  .circleTwo {
    display: none;
    right: 0;
    width: 500px;
  }

  @media (max-width: 1300px) {
    .circle {
      right: -135px !important;
    }
    .townHall {
      width: 400px;
    }
  }
  @media (max-width: 992px) {
    h1 {
      font-size: 4vw;
    }
    .circle {
      right: -345px !important;
    }
    .townHall {
      width: 300px;
    }
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 7vw;
    }
    .circleTwo {
      display: block;
    }
    .circle,
    .townHall {
      display: none;
    }
    height: 280px;
  }
`;

export default Getstarted;
