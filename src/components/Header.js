import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../images/logo.png';
import CloseIcon from '@mui/icons-material/Close';
import { Fade, Zoom } from 'react-reveal';
import ArrowUp from '@mui/icons-material/KeyboardArrowUp';

export const useScrollHandler = () => {
  const [scroll, setScroll] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const scrollCheck = window.scrollY > 20;
      setScroll(scrollCheck);
    };

    document.addEventListener('scroll', onScroll);
    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [scroll, setScroll]);

  return scroll;
};

const Header = () => {
  const [showMenu, setMenue] = useState(false);
  const scroll = useScrollHandler();
  const myWindow = useLocation();

  return (
    <>
      {/* goUp */}
      <Goup href="#" className={scroll ? 'goButtonshow' : ''}>
        <ArrowUp />
      </Goup>
      {/* mobile menu sidebar  */}
      <MobileMenu
        className={showMenu ? 'mobileMenus menuOpene' : 'mobileMenus menuClose'}
      >
        <li className="close">
          <CloseIcon
            onClick={() => {
              setMenue(!showMenu);
            }}
          />
        </li>
        <li className={myWindow.pathname === '/' ? 'active' : ''}>
          <Link
            to="/"
            onClick={() => {
              setMenue(!showMenu);
            }}
          >
            Home
          </Link>
        </li>
        <li className={myWindow.pathname === '/landlords' ? 'active' : ''}>
          <Link
            to="landlords"
            onClick={() => {
              setMenue(!showMenu);
            }}
          >
            Landlords
          </Link>
        </li>
        <li className={myWindow.pathname === '/tenant' ? 'active' : ''}>
          <Link
            to="tenant"
            onClick={() => {
              setMenue(!showMenu);
            }}
          >
            Tenant
          </Link>
        </li>
        <li className={myWindow.pathname === '/about' ? 'active' : ''}>
          <Link
            to="about"
            onClick={() => {
              setMenue(!showMenu);
            }}
          >
            About
          </Link>
        </li>
        <li className={myWindow.pathname === '/contact' ? 'active' : ''}>
          <Link
            to="contact"
            onClick={() => {
              setMenue(!showMenu);
            }}
          >
            Contact Us
          </Link>
        </li>

        <li className="sidebarLogo">
          <li id="loginButn">
            <Zoom>
              <Link to="login" className={'firstLink'}>
                Login
              </Link>
            </Zoom>
          </li>
          <li id="signupButn">
            <Zoom>
              <div>
                <Link to="signup">Sign up</Link>
              </div>
            </Zoom>
          </li>
          {/* <Link
            to="/"
            className={myWindow.pathname === '/' ? 'active' : ''}
            onClick={() => {
              setMenue(!showMenu);
            }}
          >
            <img src={Logo} alt="Logo" />
          </Link> */}
        </li>
      </MobileMenu>
      {/* top fixed header  */}
      <Topbarfixed className={scroll ? 'showHeader' : ''}>
        <FixedHeader>
          <div className="logo">
            <Zoom>
              <Link to="/">
                <img src={Logo} alt="logo" />
              </Link>
            </Zoom>

            <div className="menu">
              <ul className="desktopMenu">
                <li className={myWindow.pathname === '/' ? 'active' : ''}>
                  <Link to="/">Home</Link>
                </li>
                <li
                  className={myWindow.pathname === '/landlords' ? 'active' : ''}
                >
                  <Link to="landlords">Landlords</Link>
                </li>
                <li className={myWindow.pathname === '/tenant' ? 'active' : ''}>
                  <Link to="tenant">Tenant</Link>
                </li>
                <li className={myWindow.pathname === '/about' ? 'active' : ''}>
                  <Link to="about">About</Link>
                </li>
                <li
                  className={myWindow.pathname === '/contact' ? 'active' : ''}
                >
                  <Link to="contact">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="account">
            <Zoom>
              <div>
                <Link to="login" className={'firstLink'}>
                  Login
                </Link>
              </div>
            </Zoom>
            <Zoom>
              <div>
                <Link to="signup">Sign up</Link>
              </div>
            </Zoom>
          </div>

          <div id="mobilemenuOpener">
            <div className={'bergur'}>
              <div
                className="burger_menu"
                onClick={() => {
                  setMenue(!showMenu);
                }}
              >
                <span className="text" data-text="menu"></span>
                <div className="dot_icon">
                  <span className="dot one"></span>
                  <span className="dot two"></span>
                  <span className="dot three"></span>
                  <span className="dot four"></span>
                  <span className="dot five"></span>
                  <span className="dot six"></span>
                  <span className="dot seven"></span>
                  <span className="dot eight"></span>
                  <span className="dot nine"></span>
                </div>
              </div>
            </div>
          </div>
        </FixedHeader>
      </Topbarfixed>
      <Overly
        className={showMenu ? 'overlyBlock' : 'overlyNone'}
        onClick={() => {
          setMenue(!showMenu);
        }}
      />
      <Fade top id="fixedHeader">
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
            <div className="logo">
              <Zoom>
                <Link to="/">
                  <img src={Logo} alt="logo" />
                </Link>
              </Zoom>

              <div className="menu">
                <ul className="desktopMenu">
                  <li className={myWindow.pathname === '/' ? 'active' : ''}>
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={
                      myWindow.pathname === '/landlords' ? 'active' : ''
                    }
                  >
                    <Link to="landlords">Landlords</Link>
                  </li>
                  <li
                    className={myWindow.pathname === '/tenant' ? 'active' : ''}
                  >
                    <Link to="tenant">Tenant</Link>
                  </li>
                  <li
                    className={myWindow.pathname === '/about' ? 'active' : ''}
                  >
                    <Link to="about">About</Link>
                  </li>
                  <li
                    className={myWindow.pathname === '/contact' ? 'active' : ''}
                  >
                    <Link to="contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="account">
              <Zoom>
                <div>
                  <Link
                    to="login"
                    className={
                      myWindow.pathname === '/' ? 'activceButtons' : 'firstLink'
                    }
                  >
                    Login
                  </Link>
                </div>
              </Zoom>
              <Zoom>
                <div>
                  <Link to="signup">Sign up</Link>
                </div>
              </Zoom>
            </div>

            <div id="mobilemenuOpener">
              <div
                id="forDesktop"
                className={
                  myWindow.pathname === '/' ? 'bergur burgerWhite' : 'bergur'
                }
              >
                <div
                  className="burger_menu"
                  onClick={() => {
                    setMenue(!showMenu);
                  }}
                >
                  <span className="text" data-text="menu"></span>
                  <div className="dot_icon">
                    <span className="dot one"></span>
                    <span className="dot two"></span>
                    <span className="dot three"></span>
                    <span className="dot four"></span>
                    <span className="dot five"></span>
                    <span className="dot six"></span>
                    <span className="dot seven"></span>
                    <span className="dot eight"></span>
                    <span className="dot nine"></span>
                  </div>
                </div>
              </div>

              <div className={'bergur'} id="forMobile">
                <div
                  className="burger_menu"
                  onClick={() => {
                    setMenue(!showMenu);
                  }}
                >
                  <span className="text" data-text="menu"></span>
                  <div className="dot_icon">
                    <span className="dot one"></span>
                    <span className="dot two"></span>
                    <span className="dot three"></span>
                    <span className="dot four"></span>
                    <span className="dot five"></span>
                    <span className="dot six"></span>
                    <span className="dot seven"></span>
                    <span className="dot eight"></span>
                    <span className="dot nine"></span>
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </Container>
      </Fade>
    </>
  );
};

// header top
const Goup = styled.a`
  height: 35px;
  width: 35px;
  background: #ec2028;
  color: #fff;
  border-radius: 50px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  display: grid;
  place-items: center;
  transform: translateY(-100px);
  opacity: 0;
  transition: 0.5s;
  z-index: 999;
`;

const Container = styled.header`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`;
const Overly = styled.div`
  width: 100%;
  height: 100%;
  position: fixed !important;
  top: 0;
  bottom: 0;
  background: #dedddd73;
  z-index: 99;
`;
const Topbarfixed = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  transition: 0.5s;
  z-index: 99;
  background: #fff;
  transform: translateY(-100%);
`;
const FixedHeader = styled.div`
  width: 1600px;
  margin: 0 auto;
  padding: 20px; 
  display: flex; 
  justify-content: space-between;
  align-items: center;  
  .account {
    display: flex;
    a {
      padding: 10px 35px;
      background: #2a2a2c;
      margin-left: 25px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      color: #fff;
      border: 3px solid #2a2a2c;
      transition: 0.4s;
      &:hover {
        background: transparent;
        color: #2a2a2c;
        border: 3px solid #2a2a2c;
      }
    }
    .activceButtons{
      border: 2px solid #fff;
      color: #fff;
      background: transparent;
      &:hover {
        background: #fff;
        color: #2a2a2c;
        border: 2px solid transparent;
      }
    }
    .firstLink {
      background: transparent;
      color: #2a2a2c;
      border: 2px solid #2a2a2c;
      &:hover {
        background: #2a2a2c;
        color: #fff;
        border: 2px solid transparent;
      }
    }
    @media (max-width: 1292px) {
      display: none;
    }
  }
  .logo {
    display: flex;
    justify-content: start;
    align-items: center;
    img {
      width: 222px;
    }
    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 88px;
      .close {
        display: none;
        cursor: pointer;
        svg {
          font-size: 30px;
        }
      }
      ul.desktopMenu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        list-style: none;
        .active {
          position: relative;
          a {
            color: #2a2a2c;
            &:before {
              content: '';
              width: 22px;
              height: 3px;
              background: #ec2028;
              position: absolute;
              bottom: -5px;
              border-radius: 8px;
              left: 0;
            }
          }
        }
      }
      li {
        margin-right: 61px;
        font-weight: 600;
        position: relative;
        a {
          color: #6a6a6b;
          transition: 0.4s;
          text-decoration: none;
          &:before {
            content: '';
            width: 0%;
            height: 3px;
            background: #ec2028;
            position: absolute;
            bottom: -5px;
            border-radius: 8px;
            left: 0;
            transition: 0.4s;
          }
          &:hover {
            color: #2a2a2c;
            &:before {
              width: 22px;
            }
          }
        }
      }
    }
  }

  #mobilemenuOpener {
    display: none;
    .burgerWhite{ 
      .dot_icon{
        .dot { 
            background: #fff !important; 
          }
      }
      .text{
        &:before{
          color: #fff !important;
        }
        &:after{
          color: #fff !important;

        }
      }  
    }
    .bergur {
      .burger_menu {
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 1.3px;
        color: #fff;
        overflow: hidden;
        display: flex;
        align-items: center;
        cursor: pointer;
        .text {
          text-transform: uppercase;
          position: relative;
          transition: all 0.6s linear, color 0.1s;
          height: 16px;
          overflow: hidden;
          display: inline-block;
          line-height: 16px;
          padding-right: 15px;
          &:before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            transform: translateY(-100%);
            left: 0;
            text-transform: uppercase;
            transition: all 0.4s linear;
            color: #333;
          }
          &:after {
            content: attr(data-text);
            position: relative;
            top: 0;
            left: 0;
            text-transform: uppercase;
            color: #333;
            transition: all 0.4s linear;
          }
        }
        .dot_icon {
          display: flex;
          flex-wrap: wrap;
          width: 24px;
          height: 24px;
          margin: -2px;
          .dot {
            width: 4px;
            height: 4px;
            background: #333;
            margin: 2px;
            transition: all 0.4s linear;
          }
        }
        &:hover {
          .text:after {
            top: 20px;
          }
          .text:before {
            transform: translateY(0);
          }
          .dot:nth-child(odd) {
            transform: translate(8px, 8px);
          }
          .five {
            opacity: 0;
          }
        }
      }
    } 
  }  
  @media (max-width: 1292px) {
    .desktopMenu {
      display: none !important;
    }
    #mobilemenuOpener {
      display: block !important;
    }
  } 
  @media (max-width: 768px) {
    .logo {
      img {
        width: 150px;
      }
    }
    .social {
      a {
        svg {
          font-size: 18px;
        }
      }
    }
    .bergur {
      svg {
        font-size: 25px !important;
      }import { Link } from 'react-router-dom';

    }
  }
`;
const Content = styled.div`
  width: 1600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;  
  .account {
    display: flex;
    a {
      padding: 10px 35px;
      background: #2a2a2c;
      margin-left: 25px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      color: #fff;
      border: 3px solid #2a2a2c;
      transition: 0.4s;
      &:hover {
        background: transparent;
        color: #2a2a2c;
        border: 3px solid #2a2a2c;
      }
    }
    .activceButtons{
      border: 2px solid #fff;
      color: #fff;
      background: transparent;
      &:hover {
        background: #fff;
        color: #2a2a2c;
        border: 2px solid transparent;
      }
    }
    .firstLink {
      background: transparent;
      color: #2a2a2c;
      border: 2px solid #2a2a2c;
      &:hover {
        background: #2a2a2c;
        color: #fff;
        border: 2px solid transparent;
      }
    }
    @media (max-width: 1292px) {
      display: none;
    }
  }
  .logo {
    display: flex;
    justify-content: start;
    align-items: center;
    img {
      width: 222px;
    }
    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-left: 88px;
      .close {
        display: none;
        cursor: pointer;
        svg {
          font-size: 30px;
        }
      }
      ul.desktopMenu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        list-style: none;
        .active {
          position: relative;
          a {
            color: #2a2a2c;
            &:before {
              content: '';
              width: 22px;
              height: 3px;
              background: #ec2028;
              position: absolute;
              bottom: -5px;
              border-radius: 8px;
              left: 0;
            }
          }
        }
      }
      li {
        margin-right: 61px;
        font-weight: 600;
        position: relative;
        a {
          color: #6a6a6b;
          transition: 0.4s;
          text-decoration: none;
          &:before {
            content: '';
            width: 0%;
            height: 3px;
            background: #ec2028;
            position: absolute;
            bottom: -5px;
            border-radius: 8px;
            left: 0;
            transition: 0.4s;
          }
          &:hover {
            color: #2a2a2c;
            &:before {
              width: 22px;
            }
          }
        }
      }
    }
  }

  #mobilemenuOpener {
    display: none;
    #forMobile{
      display: none;
      @media (max-width: 991px){
      display: block;
      }
    }
    #forDesktop{ 
      @media (max-width: 991px){
      display: none;
      }
    }
    .burgerWhite{ 
      .dot_icon{
        .dot { 
            background: #fff !important; 
          }
      }
      .text{
        &:before{
          color: #fff !important;
        }
        &:after{
          color: #fff !important;

        }
      }  
    }
    .bergur {
      .burger_menu {
        font-size: 13px;
        font-weight: 500;
        letter-spacing: 1.3px;
        color: #fff;
        overflow: hidden;
        display: flex;
        align-items: center;
        cursor: pointer;
        .text {
          text-transform: uppercase;
          position: relative;
          transition: all 0.6s linear, color 0.1s;
          height: 16px;
          overflow: hidden;
          display: inline-block;
          line-height: 16px;
          padding-right: 15px;
          &:before {
            content: attr(data-text);
            position: absolute;
            top: 0;
            transform: translateY(-100%);
            left: 0;
            text-transform: uppercase;
            transition: all 0.4s linear;
            color: #333;
          }
          &:after {
            content: attr(data-text);
            position: relative;
            top: 0;
            left: 0;
            text-transform: uppercase;
            color: #333;
            transition: all 0.4s linear;
          }
        }
        .dot_icon {
          display: flex;
          flex-wrap: wrap;
          width: 24px;
          height: 24px;
          margin: -2px;
          .dot {
            width: 4px;
            height: 4px;
            background: #333;
            margin: 2px;
            transition: all 0.4s linear;
          }
        }
        &:hover {
          .text:after {
            top: 20px;
          }
          .text:before {
            transform: translateY(0);
          }
          .dot:nth-child(odd) {
            transform: translate(8px, 8px);
          }
          .five {
            opacity: 0;
          }
        }
      }
    } 
  }  
  @media (max-width: 1292px) {
    .desktopMenu {
      display: none !important;
    }
    #mobilemenuOpener {
      display: block !important;
    }
  } 
  @media (max-width: 768px) {
    .logo {
      img {
        width: 150px;
      }
    }
    .social {
      a {
        svg {
          font-size: 18px;
        }
      }
    }
    .bergur {
      svg {
        font-size: 25px !important;
      }import { Link } from 'react-router-dom';

    }
  }
`;
const MobileMenu = styled.div`
  width: 250px;
  height: 100vh;
  position: fixed !important;
  left: 0;
  z-index: 9999999999999999999 !important;
  flex-direction: column;
  justify-content: flex-start !important;
  background: #fff;
  top: 0;
  margin: 0px !important;
  padding: 20px !important;
  transition: transform 0.2s ease-in;
  #loginButn {
    margin-bottom: 12px;
    a {
      padding: 10px 35px;
      background: #ec2028;
      margin: 0;
      text-align: center;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 700;
      color: #fff !important;
      border: 3px solid #ec2028;
      transition: 0.4s;
      &::before {
        display: none !important;
      }
    }
  }
  #signupButn {
    a {
      padding: 10px 35px;
      background: #2a2a2c;
      margin: 0;
      text-align: center;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 700;
      color: #fff !important;
      border: 3px solid #2a2a2c;
      transition: 0.4s;
      &::before {
        display: none !important;
      }
    }
  }

  .close {
    display: block;
    text-align: right;
    cursor: pointer;
    color: #6a6a6b;
  }
  li {
    width: 100%;
    list-style: none;
    position: relative;
    margin-bottom: 45px;
    a {
      color: #6a6a6b !important;
      display: block;
      margin: 20px;
      border-bottom: 1px solid #ffffff40;
      text-decoration: none;
      &:before {
        content: '';
        width: 0%;
        height: 3px;
        background: #ec2028;
        position: absolute;
        bottom: -5px;
        border-radius: 8px;
        left: 20px;
        transition: 0.4s;
      }
      &:hover {
        color: #2a2a2c;
        &:before {
          width: 22px;
        }
      }
    }
  }
  .sidebarLogo {
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;
    img {
      max-width: 100%;
    }
  }
  .active {
    position: relative;
    a {
      color: #2a2a2c;
      &:before {
        content: '';
        width: 22px;
        height: 3px;
        background: #ec2028;
        position: absolute;
        bottom: -5px;
        border-radius: 8px;
        left: 20px;
      }
    }
  }
`;

export default Header;
