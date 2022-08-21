import React from 'react';
import styled from 'styled-components';
import offerBg from '../../images/Section.png';
import apartment from '../../images/apartment-svgrepo-com.png';
import { Fade, Zoom } from 'react-reveal';

const OfferThree = () => {
  return (
    <Container>
      <Content>
        <Heading>
          <Fade>
            <h1>Amet minim mollit non deserunt</h1>
          </Fade>
        </Heading>
        <Boxes>
          <Fade bottom>
            <div className="singleBox">
              <Zoom>
                <img src={apartment} alt="apartment" />
              </Zoom>
              <Fade bottom>
                <h2>Economic Emporement</h2>
              </Fade>
              <Fade bottom>
                <p>
                  There is more than 9 million Canadians that are either credit
                  unserved or underserved. More than 9 million Canadians have no
                  credit history with the Credit Bureaus, or has insufficient
                  data in their credit report to generate a credit score and or
                  are meeting many of the same financial obligations that the
                  majority of consumers meet but are getting no credit for it.
                </p>
              </Fade>
              <Fade bottom>
                <p>
                  There is nearly 7 million Canadians that are classified as
                  sub-prime borrowers. Nearly 7 million Canadians are suffering
                  from high-interest loans.
                </p>
              </Fade>

              <Fade bottom>
                <p>
                  There is nearly 7 million Canadians that are classified as
                  sub-prime borrowers. Nearly 7 million Canadians are suffering
                  from high-interest loans.
                </p>
              </Fade>

              <Fade bottom>
                <p>
                  Our mission is to level the credit playing field while
                  building financial access and inclusion across the nation.
                </p>
              </Fade>
              <Fade bottom>
                <div className="buttons">
                  <a href="#">Learn more</a>
                </div>
              </Fade>
            </div>
          </Fade>
        </Boxes>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  background-image: url(${offerBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const Content = styled.div`
  width: 1600px;
  height: 100%;
  margin: 0 auto;
  padding: 130px 20px;
  display: grid;
  grid-template-columns: 1fr;
`;
const Heading = styled.div`
  h1 {
    color: #2a2a2c;
    font-size: 3vw;
    display: block;
    margin-top: 0px;
    margin-bottom: 80px;
    text-align: center;
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
  grid-template-columns: 1fr;
  grid-gap: 50px;
  .singleBox {
    background: #fff;
    padding: 41px;
    border-top: 10px solid #ec2028;
    border-radius: 8px;
    text-align: center;
    h2 {
      font-size: 33px;
      color: #2a2a2c;
    }
    p {
      color: #2a2a2c;
      font-size: 23px;
      margin-bottom: 50px;
    }
    .buttons {
      margin-bottom: 30px;
      a {
        color: #ec2028;
        text-decoration: none;
        font-weight: 600;
        padding: 20px 35px;
        border-radius: 8px;
        border: 2px solid #ec2028;
      }
    }
  }
  @media (max-width: 1140px) {
    grid-template-columns: 1fr !important;
  }
  @media (max-width: 992px) {
    .singleBox {
      text-align: left !important;
    }
  }
`;
export default OfferThree;
