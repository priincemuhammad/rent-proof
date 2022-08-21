import React from 'react';
import styled from 'styled-components';
import offerBg from '../../images/Section.png';
import apartment from '../../images/apartment-svgrepo-com.png';
import idCard from '../../images/id-card-svgrepo-com.png';
import { Fade, Zoom } from 'react-reveal';

const OfferTwo = () => {
  return (
    <Container>
      <Content>
        <Heading>
          <Fade bottom>
            <h1>Amet minim mollit non deserunt</h1>
          </Fade>
        </Heading>
        <Boxes>
          <div className="singleBox">
            <Zoom>
              <img src={apartment} alt="apartment" />
            </Zoom>
            <Fade>
              <h2>Leveling The Playing Field</h2>
            </Fade>
            <Fade>
              <p>
                Traditionally, credit score models focus on evaluating debt
                accounts to determine your creditability. Landlords would only
                report tenants to credit bureaus for late or non-payment of rent
                which would damage the tenant’s credit history.
              </p>
            </Fade>

            <Fade>
              <p>
                At RentProof we believe that if missed payments can damage your
                credit score, then it is only right that on-time payments can
                benefit your credit score. Get credit for your rent.
              </p>
            </Fade>

            <Fade>
              <div className="buttons">
                <a href="#">Learn more</a>
              </div>
            </Fade>
          </div>
          <div className="singleBox">
            <Zoom>
              <img src={idCard} alt="apartment" />
            </Zoom>
            <Fade>
              <h2>A New Tradeline</h2>
            </Fade>
            <Fade>
              <p>
                By adding rental payments to your credit report with RentProof,
                a new tradeline will be established on your credit report with
                Equifax. This tradeline will reflect your tenant’s history
                allowing them to build and maintain their credit by simply
                paying their rent.
              </p>
            </Fade>
            <Fade>
              <div className="buttons">
                <a href="#">Learn more</a>
              </div>
            </Fade>
          </div>
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
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  .singleBox {
    background: #fff;
    padding: 41px;
    border-top: 10px solid #ec2028;
    border-radius: 8px;
    h2 {
      font-size: 33px;
      color: #2a2a2c;
    }
    p {
      color: #2a2a2c;
      font-size: 1.3vw;
      margin-bottom: 50px;
      line-height: 1.5;
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

  @media (max-width: 1200px) {
    p {
      font-size: 2vw !important;
    }
  }
  @media (max-width: 1140px) {
    grid-template-columns: 1fr !important;
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
export default OfferTwo;
