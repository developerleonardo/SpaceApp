import { Titulo } from "../Titulo";
import { Tags } from "./Tags";
import { Populares } from "./Populares";
import { Imagen } from "./Imagen";
import styled from "styled-components";
import { useContext } from "react";
import { GlobalContext } from "../../Context/GlobalContext";
import Cargando from "../Cargando";

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`
const ImagenesContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 24px;
`


const Galeria = () => {

    //const { consulta, fotosDeGaleria, alAlternarFavorito, setFotoSeleccionada } = useContext(GlobalContext);

    const { state } = useContext(GlobalContext);

    return (
        state.fotosDeGaleria.length === 0 ?
            <Cargando></Cargando> :
            <>
                <Tags />
                <GaleriaContainer>
                    <SeccionFluida>
                        <Titulo>Navegue por la galería</Titulo>
                        <ImagenesContainer>
                            {state.fotosDeGaleria.filter(foto => {
                                return state.consulta === "" || foto.titulo.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, "").includes(state.consulta.toLocaleLowerCase().normalize("NFD").replace(/\p{Diacritic}/gu, ""))
                            })
                                .map(foto => <Imagen
                                    
                                    
                                    key={foto.id}
                                    foto={foto} />)
                            }
                        </ImagenesContainer>
                    </SeccionFluida>
                    <Populares />
                </GaleriaContainer>
            </>
    );
};

export { Galeria }