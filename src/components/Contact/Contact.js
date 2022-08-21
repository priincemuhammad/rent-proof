import React from 'react';
import styled from 'styled-components';
import FullMap from '../../images/map.png';
import { Fade, Zoom } from 'react-reveal';

const Contact = () => {
  return (
    <Container>
      <Content>
        <Fade bottom>
          <Boxes>
            <Fade bottom>
              <form>
                <div className="heading">
                  <Fade bottom>
                    <h1>Lets Talk</h1>
                  </Fade>
                  <Fade bottom>
                    <p>Our Friendly team would love to hear from you!</p>
                  </Fade>
                </div>
                <div className="inputTwo">
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
                </div>
                <Fade bottom>
                  <div className="inputOne">
                    <span>Email :</span>
                    <input type="text" />
                  </div>
                </Fade>
                <Fade bottom>
                  <div className="inputOne">
                    <span>Message :</span>
                    <textarea></textarea>
                  </div>
                </Fade>

                <Zoom>
                  <div className="submitButton">
                    <button>Send Message</button>
                  </div>
                </Zoom>
              </form>
            </Fade>
          </Boxes>
        </Fade>
        <Boxes>
          <Zoom>
            {/* <img src={FullMap} alt="Map" /> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18876518.277288534!2d-113.72293687010361!3d54.72259764325595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b0d03d337cc6ad9%3A0x9968b72aa2438fa5!2sCanada!5e0!3m2!1sen!2sbd!4v1661054194663!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Zoom>
        </Boxes>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  background: #f9f9f9;
`;
const Content = styled.div`
  width: 1600px;
  height: 100%;
  margin: 0 auto;
  padding: 155px 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  @media (max-width: 1070px) {
    grid-template-columns: 1fr !important;
  }
`;
const Boxes = styled.div`
  background: #fff;
  padding: 50px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  img,
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    width: 100%;
    height: 100%;
    @media (max-width: 1070px) {
      object-fit: initial;
      position: initial;
    }
  }
  form {
    span {
      margin-bottom: 14px;
    }
    .heading {
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
      }
    }
    .inputTwo {
      display: grid;
      margin-bottom: 20px;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      div {
        display: flex;
        flex-direction: column;
      }
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
    .inputOne {
      display: flex;
      margin-bottom: 20px;
      flex-direction: column;
    }
    input,
    textarea {
      border: 1px solid #dfdfdf;
      padding: 14px;
      outline: none;
      border-radius: 8px;
    }
    textarea {
      height: 100px;
    }
    .submitButton {
      margin-top: 20px;
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
      }
    }
  }

  @media (max-width: 1200px) {
    p {
      font-size: 2vw !important;
      line-height: 1.5;
    }
  }
  @media (max-width: 992px) {
    .heading {
      h1 {
        font-size: 5vw !important;
      }
    }
  }

  @media (max-width: 768px) {
    .heading {
      h1 {
        font-size: 7vw !important;
      }
      p {
        font-size: 2.5vw !important;
      }
    }
  }
  @media (max-width: 570px) {
    .heading {
      p {
        font-size: 3vw !important;
      }
    }
  }
`;

export default Contact;
