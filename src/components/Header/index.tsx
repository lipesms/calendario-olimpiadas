import logoOlimpiadas from '../../assets/logo_olimpiadas.png'

import {ContainerHeader} from './styles'

const Header = () => {
    return (
        <ContainerHeader>
            <h2>Calendário olimpico</h2>
            <h1>PARIS 2024</h1>
            <img src={logoOlimpiadas} alt="Logo das olimpiadas" />
        </ContainerHeader>
    )
}

export default Header