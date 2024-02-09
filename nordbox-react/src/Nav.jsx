import logo from './assets/nordbox.jpg'

export const Nav = () => {
    return (
        <nav className="nb-navbar">
            <img src={logo} alt="nbox logo" />
            <div className='nb-navbar-info'>
                <ul>
                    <li>Home</li>
                    <li>Servicios</li>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                </ul>
            </div>
        </nav>
    )
}