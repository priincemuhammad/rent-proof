import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import Facebook from '@mui/icons-material/FacebookOutlined';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { Fade, Zoom } from 'react-reveal';

const Footer = () => {
  const myWindow = useLocation();

  return (
    <Container
      className={
        myWindow.pathname === '/contact'
          ? 'bgWhite'
          : '' || myWindow.pathname === '/login'
          ? 'hideElements'
          : '' || myWindow.pathname === '/signup'
          ? 'hideElements'
          : ''
      }
    >
      <Content>
        <div className="footerTop">
          <Link to="/">
            <Zoom>
              <img src={Logo} alt="Logo" />
            </Zoom>
          </Link>
          <div className="discribeTwo">
            <Fade>
              <p>
                Bridging the gap between <br /> Tenants and Landlords
              </p>
            </Fade>
          </div>
          <div className="social">
            <Zoom>
              <a href="#">
                <Facebook />
              </a>
            </Zoom>
            <Zoom>
              <a href="#">
                <Twitter />
              </a>
            </Zoom>
            <Zoom>
              <a href="#">
                <LinkedIn />
              </a>
            </Zoom>
          </div>
        </div>
        <div className="footerMiddle">
          <div id="discriptions">
            <Fade>
              <p>
                Bridging the gap between <br /> Tenants and Landlords
              </p>
            </Fade>
          </div>
          <Fade bottom>
            <div>
              <ul>
                <li>
                  <h5>Rentproof</h5>
                </li>
                <li>
                  <a href="#">Tenants</a>
                </li>
                <li>
                  <a href="#">Landlords</a>
                </li>
                <li>
                  <a href="#">Academy</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
              </ul>
            </div>
          </Fade>
          <Fade bottom>
            <div>
              <ul>
                <li>
                  <h5>Company</h5>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>
          </Fade>
          <Fade bottom>
            <div>
              <ul>
                <li>
                  <h5>Legal</h5>
                </li>
                <li>
                  <a href="#">Term of use</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
          </Fade>
        </div>
        <div className="copyright">
          <div className="social bottomIcons">
            <Zoom>
              <a href="#">
                <Facebook />
              </a>
            </Zoom>
            <Zoom>
              <a href="#">
                <Twitter />
              </a>
            </Zoom>
            <Zoom>
              <a href="#">
                <LinkedIn />
              </a>
            </Zoom>
          </div>
          <Fade>
            <p>© 2022 RentProof. All Rights Reserved</p>
          </Fade>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.footer`
  display: flex;
  background: #020202;
  padding: 90px 20px;
  padding-bottom: 0px;
`;
const Content = styled.div`
  width: 1600px;
  height: 100%;
  margin: 0 auto;
  padding: 50px;
  .footerTop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #2c2c2c;
    padding-bottom: 35px;
    img {
      width: 200px;
    }
    a {
      color: #fff;
      padding-left: 20px;
    }
    .discribeTwo {
      display: none;
      p {
        color: #888888;
        font-size: 26px;
        line-height: 1.5;
        margin: 0;
      }
    }
  }
  .footerMiddle {
    padding: 30px 0px;
    padding-bottom: 90px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    ul {
      margin: 0;
      li {
        padding: 14px 0px;
        &:nth-child(1) {
          padding-top: 0px;
        }
        h5 {
          color: #dfdfdf;
          font-size: 20px;
          margin: 0;
        }
        a {
          text-decoration: none;
          color: #fff;
          padding: 20px 0px;
        }
      }
    }

    p {
      color: #888888;
      font-size: 26px;
      line-height: 1.5;
      margin: 0;
    }
  }
  .copyright {
    .bottomIcons {
      padding-bottom: 20px;
      a {
        color: #fff;
        margin: 10px;
      }
      display: none;
    }
    p {
      color: #888888;
      font-size: 26px;
      line-height: 1.5;
      margin: 0;
    }
  }
  @media (max-width: 992px) {
    .copyright {
      text-align: center;
      .bottomIcons {
        display: block;
      }
      p {
        font-size: 20px;
      }
    }
    .footerTop {
      justify-content: center;
      text-align: center;
      flex-direction: column;
      border-bottom: none;
      .discribeTwo {
        padding-top: 20px;
        display: block;
      }
      .social {
        display: none !important;
      }
    }

    .footerMiddle {
      grid-template-columns: 1fr 1fr 1fr;
      /* grid-row-gap: 55px; */
      #discriptions {
        display: none !important;
      }
    }
  }
  @media (max-width: 768px) {
    .footerMiddle {
      grid-template-columns: 1fr 1fr;
      grid-row-gap: 55px;
    }
  }
`;

export default Footer;
