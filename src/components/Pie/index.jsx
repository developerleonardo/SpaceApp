import { styled } from 'styled-components';
import { FaGithub, FaLinkedin  } from "react-icons/fa";

const PieEstilizado = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	margin-top: 100px;
	background-color: #04244F;
	padding: 22px;
	box-sizing: border-box;
`;

const IconoContainer = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	li {
    	display: inline-block;
    	margin-right: 20px;
        width: 32px;
        height: 32px;
	}
    svg {
        width: 100%;
        height: 100%;
        color: #ededed
    }
`;

const PieTexto = styled.p`
	font-size: 16px;
	color: white;
	margin: 0;
`;

function Pie() {
    return (
        <PieEstilizado>
            <IconoContainer>
                <li>
                    <a href="https://github.com/developerleonardo">
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/leonardo-salazar-serna/">
                        <FaLinkedin />
                    </a>
                </li>
            </IconoContainer>
            <PieTexto>Desarrollado por Leonardo.</PieTexto>
        </PieEstilizado>
    );
}

export { Pie }