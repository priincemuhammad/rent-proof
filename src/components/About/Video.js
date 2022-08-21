import React from 'react';
import styled from 'styled-components';
import Developimg from '../../images/videoImg.png';
import PlayCircle from '@mui/icons-material/PlayCircle';
import { Fade, Zoom } from 'react-reveal';

const Video = () => {
  return (
    <Container>
      <Content>
        <h1>Amet minim mollit non deserunt</h1>
        <div className="video">
          <img src={Developimg} alt="video" />
          <a href="#" id="playVdo">
            <Zoom>
              <PlayCircle />
            </Zoom>
          </a>
        </div>
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
  padding: 150px 20px;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
  h1 {
    color: #2a2a2c;
    font-size: 3vw;
    line-height: 1.5;
    margin: 0px;
    margin-bottom: 55px;
    text-align: center;
  }
  .video {
    width: 100%;
    position: relative;
    #playVdo {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      svg {
        color: #fff;
        font-size: 88px;
      }
    }
    img {
      width: 100%;
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
  }
`;
export default Video;
