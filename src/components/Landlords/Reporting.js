import React from 'react';
import styled from 'styled-components';
import Developimg from '../../images/image12.png';
import { Fade, Zoom } from 'react-reveal';

const Reporting = () => {
  return (
    <Container>
      <Content>
        <BannerImgparent>
          <Zoom>
            <img src={Developimg} alt="BannerImg" />
          </Zoom>
        </BannerImgparent>
        <Boxes>
          <div className="texts">
            <Fade>
              <h1>Rent Reporting</h1>
            </Fade>
            <Fade>
              <p>
                RentProof will report your tenant’s monthly rental history to
                Equifax, which will reflect as a new tradeline on your tenant’s
                credit report. RentProof enables landlords to maximize their net
                operating income and greater secure rental income all while
                strengthening the relationships with tenants by allowing them to
                build credit with their rent.
              </p>
            </Fade>

            <Fade>
              <div className="button">
                <a href="#">Learn about us</a>
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
`;
const Content = styled.div`
  width: 1600px;
  height: 100%;
  margin: 0 auto;
  padding: 130px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media (max-width: 992px) {
    padding-top: 0px;
    grid-template-columns: 1fr;
  }
`;
const Boxes = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  .button {
    a {
      color: #ec2028;
      text-decoration: none;
      font-weight: 600;
      padding: 20px 35px;
      border-radius: 8px;
      border: 2px solid #ec2028;
    }
  }

  h1 {
    color: #2a2a2c;
    font-size: 3vw;
    line-height: 1.5;
    margin: 8px 0px;
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
    grid-template-columns: 1fr;
  }
`;

export default Reporting;
