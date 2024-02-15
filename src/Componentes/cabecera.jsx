import logo from '../Img/LOGOMP.png'
import vectorLogo from '../Img/vector-logo.svg'
import vectoContacto from '../Img/vector-contacto.svg'
import '../Estilos/cabecera.css'

export default function Cabecera() {
    return(
        <>
          <header>
            <div className='logo'>
              <img src={logo} className='img-logo' alt='logo' />
              <div className='div-nombre'>
                <img className='img-vector-logo' src={vectorLogo} alt='vector logo' />
              </div>
            </div>
            <div className='menu'>
              <ul className='ul-menu'>
                <li>Restaurante</li>
                <li>Terrazas</li>
                <li>Jardín</li>
                <li>Condominios</li>
                <li>Casa de Campo</li>
                <li>Estatuas</li>
              </ul>
              <img className='img-contacto' src={vectoContacto} alt='vector contacto'></img>
            </div>
          </header>
        </>
    ) 
}