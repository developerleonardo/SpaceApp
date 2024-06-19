import { createContext, useEffect, useState } from "react";
import React from 'react'

const GlobalContext = createContext();


export const GlobalContextProvider = ({ children }) => {
    const [fotosDeGaleria, setFotosDeGaleria] = useState([]);
    const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
    const [consulta, setConsulta] = useState("");

    useEffect(() => {
        const getData = async () => {
            const respuesta = await fetch("http://localhost:3000/fotos");
            const data = await respuesta.json();
            setFotosDeGaleria([...data]);
        }
        setTimeout(() => getData(), 3000);

    }, [])

    const alAlternarFavorito = (foto) => {

        if (foto.id === fotoSeleccionada?.id) {
            setFotoSeleccionada({
                ...fotoSeleccionada,
                favorita: !foto.favorita
            })
        }

        setFotosDeGaleria(fotosDeGaleria.map(fotoDeGaleria => {
            return {
                ...fotoDeGaleria,
                favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
            }
        }))
    }

    return (
        <GlobalContext.Provider value={{
            consulta,
            setConsulta,
            fotosDeGaleria,
            fotoSeleccionada,
            setFotoSeleccionada,
            alAlternarFavorito
        }}>
            {children}
        </GlobalContext.Provider>
    )
};

export { GlobalContext }