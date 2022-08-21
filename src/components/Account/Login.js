import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import styled from 'styled-components';
import Loginimg from '../../images/Loginimg.png';
import Google from '../../images/flat-color-icons_google.png';
import { Fade, Zoom } from 'react-reveal';

const Login = () => {
  const [signUp, setSignup] = useState(true);

  return (
    <Container>
      <Content>
        <Boxes id="imageBox">
          <Zoom>
            <img src={Loginimg} alt="Map" className="loginimg" />
          </Zoom>
          <div className="texts">
            <Fade bottom>
              <h1>
                Report With RentProof Bridging the Gap Between Landlords and
                Tenants
              </h1>
            </Fade>

            <Fade bottom>
              <p className="someText">
                RentProof adds rental payments to credit reports on behalf of
                Credit Bureaus mutually benefitting both Tenants and Landlords.
              </p>
            </Fade>
          </div>
        </Boxes>
        <Boxes>
          <Link to="/" className="myLogo">
            <Zoom>
              <img
                src={Logo}
                alt="Logo"
                className={signUp ? 'logoPaddingOne' : 'logoPaddingTwo'}
              />
            </Zoom>
          </Link>
          <form>
            <div className="heading">
              <Fade bottom>
                <h1>{signUp ? <>Welcome Back</> : <>Create an account</>}</h1>
              </Fade>
              <Fade bottom>
                <p>Please enter your detail</p>
              </Fade>
            </div>
            <div className="inputTwo">
              {signUp ? (
                <Fade bottom>
                  <div>
                    <span>First name :</span>
                    <input type="text" />
                  </div>
                </Fade>
              ) : (
                <>
                  <Fade bottom>
                    <div>
                      <span>First name :</span>
                      <input type="text" />
                    </div>
                  </Fade>

                  <Fade bottom>
                    <div>
                      <span>Last name :</span>
                      <input type="text" />
                    </div>
                  </Fade>

                  <Fade bottom>
                    <div>
                      <span>E-mail :</span>
                      <input type="text" />
                    </div>
                  </Fade>
                </>
              )}
              <Fade bottom>
                <div>
                  <span>Password :</span>
                  <input type="text" />
                </div>
              </Fade>
            </div>
            <div className="submitButton">
              <Fade bottom>
                <button>{signUp ? <>Sign in</> : <>Sign up</>}</button>
              </Fade>
              <Fade bottom>
                <button>
                  <img src={Google} alt="Google" />
                  {signUp ? (
                    <>Sign in with Google </>
                  ) : (
                    <>Sign up with Google</>
                  )}
                </button>
              </Fade>
            </div>
            <Fade bottom>
              <div className="bottomText">
                <p>
                  Don’t have an account?
                  <a href="#" onClick={() => setSignup(!signUp)}>
                    {signUp ? <> Sign up</> : <> Sign in</>}
                  </a>
                </p>
              </div>
            </Fade>
          </form>
        </Boxes>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;
const Content = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  #imageBox {
    padding: 0px;
    .texts {
      position: absolute;
      bottom: 0px;
      width: 100%;
      h1 {
        color: #fff;
        font-size: 2.5vw;
        line-height: 1.5;
        margin: 8px 0px;
        padding: 30px;
      }
      .someText {
        color: #fff;
        font-size: 20px;
        margin-bottom: 50px;
        padding: 0px 30px;
      }
    }
    .loginimg {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 992px) {
    padding-top: 0px;
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column-reverse;
  }
`;
const Boxes = styled.div`
  background: #fff;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  .logoPaddingOne {
    padding-bottom: 80px;
  }
  .logoPaddingTwo {
    padding-bottom: 40px;
  }
  .myLogo {
    img {
      width: 200px;
    }
  }
  form {
    .bottomText {
      text-align: center;
      margin-top: 35px;
      display: block;
      p {
        font-size: 26px;
      }
      a {
        font-size: 26px;
        text-decoration: none;
        color: #ec2028;
      }
    }
    span {
      margin-bottom: 14px;
    }
    .heading {
      h1 {
        color: #2a2a2c;
        font-size: 3vw;
        margin: 0px;
      }
      p {
        color: #2a2a2c;
        font-size: 26px;
        margin-bottom: 50px;
      }
    }
    .inputTwo {
      display: grid;
      margin-bottom: 20px;
      grid-template-columns: 1fr;
      grid-gap: 20px;
      div {
        display: flex;
        flex-direction: column;
      }
    }
    input {
      border: 1px solid #dfdfdf;
      padding: 14px;
      outline: none;
      border-radius: 8px;
    }
    .submitButton {
      margin-top: 20px;
      img {
        width: 20px;
        position: initial;
      }
      button {
        width: 100%;
        border-radius: 8px;
        padding: 14px;
        border: none;
        outline: none;
        background: #ec2028;
        color: #fff;
        font-weight: 700;
        cursor: pointer;
        margin-bottom: 20px;
        &:nth-child(2) {
          background: transparent;
          border: 1px solid #dfdfdf;
          color: #2a2a2c;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  @media (max-width: 1200px) {
    p {
      font-size: 2vw !important;
      line-height: 1.5;
    }
    .bottomText p,
    a {
      font-size: 2vw !important;
    }
  }
  @media (max-width: 992px) {
    .texts {
      h1 {
        font-size: 5vw !important;
      }
    }
    .heading {
      h1 {
        font-size: 5vw !important;
      }
    }
  }

  @media (max-width: 768px) {
    .someText {
      font-size: 2.5vw !important;
    }
    .heading {
      h1 {
        font-size: 7vw !important;
      }
      p {
        font-size: 2.5vw !important;
      }
    }
    .bottomText p,
    a {
      font-size: 2.5vw !important;
    }
  }
  @media (max-width: 570px) {
    .someText {
      font-size: 3vw !important;
    }
    .heading {
      p {
        font-size: 3vw !important;
      }
    }
    .bottomText p,
    a {
      font-size: 3vw !important;
    }
  }
`;

export default Login;
