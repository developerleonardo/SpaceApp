import styled from "styled-components";
import { GlobalStyle } from "./components/GlobalStyles";
import { Cabecera } from "./components/Cabecera";
import { BarraLateral } from "./components/BarraLateral";

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
` 

function App() {

  return (
    <>
    <FondoGradiente>
      <GlobalStyle />
      <Cabecera />
      <BarraLateral />
    </FondoGradiente>
    </>
  )
}

export default App
