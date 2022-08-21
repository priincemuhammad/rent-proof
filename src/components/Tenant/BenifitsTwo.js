import React from 'react';
import styled from 'styled-components';
import Img1 from '../../images/BenifitsTwo/mdi-light_diamond.png';
import Img2 from '../../images/BenifitsTwo/fluent_clipboard-task-list-rtl-20-regular.png';
import Img3 from '../../images/BenifitsTwo/uil_money-withdrawal.png';
import Img4 from '../../images/BenifitsTwo/fluent_handshake-16-regular.png';
import Img5 from '../../images/BenifitsTwo/fluent_reward-20-regular.png';
import Img6 from '../../images/BenifitsTwo/carbon_user-admin.png';
import { Fade, Zoom } from 'react-reveal';

const BenifitsTwo = () => {
  return (
    <Container>
      <Content>
        <div className="heading">
          <Fade>
            <h1>Reap the benefits consequat sunt nostrud amet</h1>
          </Fade>
        </div>
        <AllBoxes>
          <SingleBoxe>
            <Zoom>
              <img src={Img1} alt="Img" />
            </Zoom>
            <Fade>
              <h5>Increase Cash Flow</h5>
            </Fade>
            <Fade>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.
              </p>
            </Fade>
          </SingleBoxe>
          <SingleBoxe>
            <Zoom>
              <img src={Img2} alt="Img" />
            </Zoom>
            <Fade>
              <h5>Reduce Delinquencies</h5>
            </Fade>
            <Fade>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.
              </p>
            </Fade>
          </SingleBoxe>
          <SingleBoxe>
            <Zoom>
              <img src={Img3} alt="Img" />
            </Zoom>
            <Fade>
              <h5>Support ESG Efforts</h5>
            </Fade>
            <Fade>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.
              </p>
            </Fade>
          </SingleBoxe>
          <SingleBoxe>
            <Zoom>
              <img src={Img4} alt="Img" />
            </Zoom>
            <Fade>
              <h5>Strengthen Tenant Relationships</h5>
            </Fade>
            <Fade>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.
              </p>
            </Fade>
          </SingleBoxe>
          <SingleBoxe>
            <Zoom>
              <img src={Img5} alt="Img" />
            </Zoom>
            <Fade>
              <h5>Attract And Retain Better Tenants</h5>
            </Fade>
            <Fade>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.
              </p>
            </Fade>
          </SingleBoxe>
          <SingleBoxe>
            <Zoom>
              <img src={Img6} alt="Img" />
            </Zoom>
            <Fade>
              <h5>Increase On-Time Payments</h5>
            </Fade>
            <Fade>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet.
              </p>
            </Fade>
          </SingleBoxe>
        </AllBoxes>
        <Zoom>
          <div className="button">
            <a
              href="https://calendly.com/freelancermuhammad1/30min"
              target="_blank"
            >
              Request Appointment
            </a>
          </div>
        </Zoom>
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

export default BenifitsTwo;
