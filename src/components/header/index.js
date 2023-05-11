import './header.css';
import { FaBars } from 'react-icons/fa';

function Header() {

    return (
        <header
            className='header'
            data-aos="fade-down"
            data-aos-duration="1300"
        >
            <img src={require('../../assets/logo.png')} className='logo' />

            <nav className='navegacao'>
                < FaBars className='menu' />
                <ul>
                    <li>
                        <a href='#'>Funcionalidades</a>
                    </li>
                    <li>
                        <a href='#'>App</a>
                    </li>
                    <li>
                        <a href='#'>Planos</a>
                    </li>
                    <li>
                        <a href='#'>Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;