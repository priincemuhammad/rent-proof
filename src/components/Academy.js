import React from 'react';
import styled from 'styled-components';
import AcademyImg from '../images/Rectangle5.png';
import { Fade, Zoom } from 'react-reveal';

const Academy = () => {
  return (
    <Container>
      <Content>
        <Boxes>
          <div className="texts">
            <Fade bottom>
              <span>Coming soon</span>
            </Fade>
            <Fade bottom>
              <h1>RentProof Academy</h1>
            </Fade>
            <Fade bottom>
              <p>
                RentProof Academy is a free online platform that educates people
                in personal finance and credit.
              </p>
            </Fade>
            <Fade bottom>
              <p>
                RentProof Academy offers practice exercises, instructional
                videos, and a personalized learning dashboard that empower
                learners to study at their own pace outside of the classroom.
              </p>
            </Fade>
          </div>
        </Boxes>
        <BannerImgparent>
          <Zoom>
            <img src={AcademyImg} alt="BannerImg" />
          </Zoom>
        </BannerImgparent>
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
  grid-template-columns: 1fr 1fr;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
const Boxes = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  span {
    color: #ec2028;
    position: relative;
    padding-left: 99px;
    font-weight: 700;
    z-index: -11;
    &:before {
      content: '';
      width: 80px;
      height: 3px;
      background: #ec2028;
      position: absolute;
      border-radius: 8px;
      left: 0;
      top: 7px;
    }
  }

  h1 {
    color: #2a2a2c;
    font-size: 3vw;
    line-height: 1.5;
    margin: 8px 0px;
    margin-top: 14px;
  }
  p {
    color: #2a2a2c;
    font-size: 26px;
    margin-bottom: 50px;
    line-height: 1.5;
  }
  .appoinment {
    a {
      background: #ec2028;
      color: #fff;
      text-decoration: none;
      font-weight: 600;
      padding: 20px 35px;
      border-radius: 8px;
    }
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

const BannerImgparent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  img {
    width: 100%;
  }
  @media (max-width: 992px) {
    padding-top: 30px;
    grid-template-columns: 1fr;
  }
`;

export default Academy;
