import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BannerImg from '../../images/Group10.png';
import BannerImgTwo from '../../images/Group10.png';
import { Fade, Zoom } from 'react-reveal';

const Landlords = () => {
  return (
    <Container>
      <Content>
        <Boxes>
          <div className="texts">
            <Fade>
              <span>Lanlords</span>
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
        </Boxes>
        <BannerImgparent>
          <Zoom>
            <img src={BannerImg} id="imageOne" alt="BannerImg" />
            <img src={BannerImgTwo} id="imageTwo" alt="BannerImg" />
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
  padding: 180px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 1200px) {
    grid-gap: 30px;
  }
  @media (max-width: 992px) {
    padding: 80px 20px;
    padding-top: 180px;
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

export default Landlords;
