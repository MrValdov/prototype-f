import React from 'react';
import styled, { css } from 'styled-components';
import logo from './logo.svg';
import { rotate } from './styles/keyframes';

const AppWrapper = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledLink = styled.a`
  color: #61dafb;
`;

const StyledLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  @media (prefers-reduced-motion: no-preference) {
    animation: ${rotate} infinite 20s linear;
  }
`;

const Container = styled.div`
  text-align: center;
`;

const Button = styled.button<{ $primary?: boolean }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.$primary &&
    css`
      background: #bf4f74;
      color: white;
    `}
`;

function App() {
  return (
    <AppWrapper>
      <StyledHeader>
        <StyledLogo src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <StyledLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </StyledLink>
      </StyledHeader>
      <Container>
        <Button>Normal Button</Button>
        <Button $primary>Primary Button</Button>
      </Container>
    </AppWrapper>
  );
}

export default App;
