import { useState } from "react";
import styled from "styled-components";
import { GlobalStyle } from "./components/GlobalStyles";
import { Cabecera } from "./components/Cabecera";
import { BarraLateral } from "./components/BarraLateral";
import { Banner } from "./components/Banner";
import banner from "./assets/banner.png"
import { Galeria } from "./components/Galeria";
import fotos from "./fotos.json";
import { ModalZoom } from "./components/ModalZoom";

const FondoGradiente = styled.div`
background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`
const AppContainter = styled.div`
  width: 1440px;
  max-width: 100%;
  margin: 0 auto;
`
const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`
const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {
  const [fotosDeGaleria, setFotosDeGaleria] = useState(fotos);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

  return (
    <>
      <FondoGradiente>
        <GlobalStyle />
        <AppContainter>
          <Cabecera />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner texto={"La galería más completa de fotos del espacio"} backgroundImage={banner} />
              <Galeria alSeleccionarFoto={foto => setFotoSeleccionada(foto)} fotos={fotosDeGaleria} />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainter>
        <ModalZoom foto={fotoSeleccionada} />
      </FondoGradiente>
    </>
  )
}

export default App
