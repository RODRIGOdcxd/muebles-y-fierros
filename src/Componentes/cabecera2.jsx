import logoMP from '../Img/LOGOMP.png'
import '../Estilos/cabecera2.css'
import '../Javascript/cabecera'

export default function Cabecera(){
    return(
        <header>
            <div className='cabecera'>
                <div className='logo divheader'>
                    <img className='imgLogo' src={logoMP} alt='sillas cocina' />
                    <br />
                    <span>FIERROS Y MADERA</span>
                </div>
                <div className='menu divheader'>
                    <ul>
                        <li>PRODUCTOS</li>
                        <li>CATALOGO</li>
                        <li>CONTACTO</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}