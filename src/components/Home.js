import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BannerImg from '../images/Rectangle3.png';
import BannerImgTwo from '../images/Group11.png';
import Landlords from '../images/land.png';
import Tenuts from '../images/tenuts.png';
import TenutsTwo from '../images/Group.png';
import { Fade, Zoom } from 'react-reveal';

const Home = () => {
  return (
    <Container>
      <Content>
        <Boxes>
          <div className="texts">
            <Fade>
              <span>Report with Rentproof</span>
            </Fade>
            <Fade>
              <h1>
                Report With RentProof Bridging the Gap Between Landlords and
                Tenants
              </h1>
            </Fade>
            <Fade>
              <p>
                RentProof adds rental payments to credit reports on behalf of
                Credit Bureaus mutually benefitting both Tenants and Landlords.
              </p>
            </Fade>
            <Fade>
              <div className="appoinment">
                <a
                  href="https://calendly.com/freelancermuhammad1/30min"
                  target="_blank"
                >
                  Request Appointment
                </a>
              </div>
            </Fade>
          </div>
          <Fade bottom>
            <div className="twoButtons">
              <Link to="landlords">
                <img src={Landlords} alt="Landlords" /> For landlord
                <i className="fa-solid fa-arrow-right"></i>
              </Link>
              <Link to="tenant">
                <img src={Tenuts} alt="tenant" /> For tenant
              </Link>
            </div>
          </Fade>

          <Fade bottom>
            <div className="scrollDown">
              <a href="#goDown">
                <i className="fa-solid fa-arrow-down"></i> Scroll down
              </a>
            </div>
          </Fade>
        </Boxes>
        <BannerImgparent>
          <Zoom>
            <img src={BannerImg} id="imageOne" alt="BannerImg" />
            <img src={BannerImgTwo} id="imageTwo" alt="BannerImg" />
          </Zoom>
          <div className="twoButtonsSecondary">
            <Link to="landlords">
              <img src={Landlords} alt="Landlords" /> For landlord
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
            <Link to="tenaut">
              <img src={TenutsTwo} alt="Tenuts" /> For tenant
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </BannerImgparent>
        <Bannerafter>
          <Fade>
            <div className="one"></div>
            <div className="twoParent">
              <div className="two"></div>
              <div className="three"></div>
            </div>
          </Fade>
        </Bannerafter>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1200px) {
    grid-gap: 30px;
  }
  @media (max-width: 992px) {
    padding: 80px 20px;
    grid-template-columns: 1fr;
  }
`;
const Boxes = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding-top: 77px;
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
    font-size: 1.3vw;
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
  .twoButtons {
    padding-top: 100px;
    display: flex;
    a {
      color: #ec2028;
      font-weight: 700;
      padding-right: 20px;
      text-decoration: none;
      border-right: 1px solid #87818154;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        padding-right: 5px;
      }
      i {
        padding-left: 11px;
      }
    }
    a:nth-child(2) {
      border: none;
      color: #6a6a6b;
      padding-left: 20px;
    }
  }

  .scrollDown {
    padding-top: 35px;
    a {
      color: #6a6a6b;
      text-decoration: none;
      i {
        padding: 17px 20px;
        border: 1px solid #6a6a6b;
        border-radius: 50%;
        margin-right: 8px;
      }
    }
  }
  @media (max-width: 1200px) {
    p {
      font-size: 2vw !important;
    }
  }
  @media (max-width: 992px) {
    h1 {
      font-size: 5vw !important;
    }
    .twoButtons,
    .scrollDown {
      display: none;
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
  .twoButtonsSecondary {
    padding-top: 100px;
    display: none;
    width: 80%;
    a {
      color: #ec2028;
      font-weight: 700;
      padding-right: 20px;
      text-decoration: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      display: block;
      margin-bottom: 30px;
      padding: 20px;
      border: 1px solid red;
      border-radius: 8px;
      position: relative;
      img {
        padding-right: 5px;
      }
      i {
        padding-left: 11px;
        position: absolute;
        right: 20px;
        top: 38%;
      }
    }
  }
  #imageOne {
    max-width: 100%;
  }
  #imageTwo {
    width: 100%;
    display: none;
  }
  @media (max-width: 992px) {
    flex-direction: column;
    .twoButtonsSecondary {
      display: block;
      flex-direction: column;
    }
    #imageOne {
      display: none;
    }
    #imageTwo {
      padding-top: 150px;
      display: block;
    }
  }
`;
const Bannerafter = styled.div`
  width: 33%;
  height: 100vh;
  top: 0;
  right: 0;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr;
  z-index: -10;
  .one {
    background: #ec2028;
  }

  .twoParent {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .two {
      background: #dfdfdf;
    }
    .three {
      background: #2a2a2c;
    }
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

export default Home;
