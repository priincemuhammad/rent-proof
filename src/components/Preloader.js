import React from 'react';
import styled from 'styled-components';
import Loader from '../images/loader.gif';
const Preloader = () => {
  return (
    <Container>
      <img src={Loader} alt="" />
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  width: 100%;
  height: 100vh;
  position: fixed;
  display: grid;
  place-items: center;
  z-index: 99999999999999;
`;

export default Preloader;
