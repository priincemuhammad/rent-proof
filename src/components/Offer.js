import React from 'react';
import styled from 'styled-components';
import offerBg from '../images/Section.png';
import apartment from '../images/apartment-svgrepo-com.png';
import idCard from '../images/id-card-svgrepo-com.png';
import { Fade, Zoom } from 'react-reveal';

const Offer = () => {
  return (
    <Container>
      <Content>
        <Heading>
          <Fade>
            <h1>What do we offer?</h1>
          </Fade>
        </Heading>
        <Boxes>
          <Fade bottom>
            <div className="singleBox">
              <Zoom>
                <img src={apartment} alt="apartment" />
              </Zoom>
              <h2>For Landlords</h2>
              <p>
                RentProof provides rent reporting to Equifax. Landlords of any
                size can now increase cash flow, reduce costs, and improve
                social impact goals.
              </p>
              <div className="buttons">
                <a href="#">Learn more</a>
              </div>
            </div>
          </Fade>
          <Fade bottom>
            <div className="singleBox">
              <Zoom>
                <img src={idCard} alt="apartment" />
              </Zoom>
              <Fade bottom>
                <h2>For Tenants</h2>
              </Fade>
              <Fade bottom>
                <p>
                  Get the credit you deserve with RentProof. Tenants can now
                  reap the benefits of RentProof by building and maintaining a
                  strong credit history, without taking on debt, by simply
                  paying rent.
                </p>
              </Fade>
              <div className="buttons">
                <Fade bottom>
                  <a href="#">Learn more</a>
                </Fade>
              </div>
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
export default Offer;
