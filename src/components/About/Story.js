import React from 'react';
import styled from 'styled-components';
import StotyBg from '../../images/story.png';
import { Fade } from 'react-reveal';

const Story = () => {
  return (
    <Container>
      <Content>
        <Box>
          <Fade bottom>
            <Fade bottom>
              <h1>Our Story</h1>
            </Fade>
          </Fade>
          <Fade bottom>
            <p>
              Founded in 2021 by Toka Murphy, RentProof was built to develop a
              healthier rental market and strengthen the relationship between
              landlords and tenants. By adding rental payments to the credit
              reports of tenants, RentProof allows tenants to build and maintain
              a strong credit history without incurring debt whilst maximizing
              the net operating income of landlords.
            </p>
          </Fade>

          <Fade bottom>
            <p>
              Before RentProof, the only way to incentivize on-time payments was
              the through the threat of eviction. Now, RentProof allows
              landlords to positively incentive tenants to pay rent on-time
              through by enabling tenants the ability of building and
              maintaining a strong credit history with out incurring debt.
            </p>
          </Fade>

          <Fade bottom>
            <div className="buttons">
              <a href="#">Learn more</a>
            </div>
          </Fade>
        </Box>
        <Box></Box>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  background-image: url(${StotyBg});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Content = styled.div`
  width: 1600px;
  height: 100%;
  margin: 0 auto;
  padding: 180px 20px;
  padding-top: 160px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;
const Box = styled.div`
  h1 {
    color: #fff;
    font-size: 3vw;
    line-height: 1.5;
    margin: 8px 0px;
    margin-top: 14px;
  }
  p {
    color: #fff;
    font-size: 1.3vw;
    margin-bottom: 50px;
    line-height: 1.5;
  }
  .buttons {
    margin-bottom: 30px;
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
export default Story;
