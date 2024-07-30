import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  min-width: 480px;
  max-width: 600px;
  min-height: 300px;

  transform: translate(-50%, -50%);
  background-color: beige;
  border: 1px solid gray;
  border-radius: 4px;
`;
