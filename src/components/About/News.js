import React from 'react';
import styled from 'styled-components';
import Newimg1 from '../../images/image34.png';
import Newimg2 from '../../images/image35.png';
import Newimg3 from '../../images/image36.png';
import { Fade, Zoom } from 'react-reveal';

const News = () => {
  return (
    <Container>
      <Content>
        <Heading>
          <Fade>
            <h1>Related News</h1>
          </Fade>
        </Heading>
        <Boxes>
          <a href="#" className="singleBox">
            <Zoom>
              <img src={Newimg1} alt="apartment" />
            </Zoom>
            <Fade>
              <p>
                Amet minim mollit non deserunt. consequat sunt nostrud amet.
              </p>
            </Fade>
            <Fade>
              <span>Tue, Oct 27 2022</span>
            </Fade>
          </a>
          <a href="#" className="singleBox">
            <Zoom>
              <img src={Newimg2} alt="apartment" />
            </Zoom>
            <Fade>
              <p>
                Amet minim mollit non deserunt. consequat sunt nostrud amet.
              </p>
            </Fade>
            <Fade>
              <span>Tue, Oct 27 2022</span>
            </Fade>
          </a>
          <a href="#" className="singleBox">
            <Zoom>
              <img src={Newimg3} alt="apartment" />
            </Zoom>
            <Fade>
              <p>
                Amet minim mollit non deserunt. consequat sunt nostrud amet.
              </p>
            </Fade>
            <Fade>
              <span>Tue, Oct 27 2022</span>
            </Fade>
          </a>
        </Boxes>
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
  padding: 130px 20px;
  padding-top: 80px;
  display: grid;
  grid-template-columns: 1fr;
  @media (max-width: 992px) {
    padding-top: 0px;
  }
`;
const Heading = styled.div`
  h1 {
    color: #2a2a2c;
    font-size: 3vw;
    display: block;
    margin-top: 0px;
    margin-bottom: 80px;
  }
  @media (max-width: 1200px) {
    p {
      font-size: 2vw !important;
      line-height: 1.5;
    }
  }
  @media (max-width: 992px) {
    h1 {
      font-size: 5vw !important;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 7vw !important;
    }
    p {
      font-size: 2.5vw !important;
    }
  }
  @media (max-width: 570px) {
    p {
      font-size: 3vw !important;
    }
  }
`;
const Boxes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  .singleBox {
    background: #fff;
    text-decoration: none;
    p {
      color: #2a2a2c;
      font-size: 26px;
      line-height: 1.2;
    }
    span {
      color: #6a6a6b;
    }
    img {
      border-radius: 8px;
      width: 100%;
    }
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr !important;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr !important;
  }
`;
export default News;
