import { StatusBar } from "expo-status-bar";
import styled from "styled-components";
import Title from "./src/components/Title";
import Main from "./src/components/Main/main";

export default function App() {
  return (
    <Section>
      <Title />
      <Main />
      <StatusBar />
    </Section>
  );
}

const Section = styled.View`
  flex: 1;
  padding-top: 80px;

 
  background-color: #fb3c0a;

`;
