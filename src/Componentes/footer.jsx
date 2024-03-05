import facebook from '../Img/bxl-facebook.svg'
import youtube from '../Img/bxl-youtube.svg'
import instagram from '../Img/bxl-instagram.svg'
import twitter from '../Img/bxl-twitter.svg'
import '../Estilos/footer.css'

export default function Footer(){
    return(
        <footer>
            <div className='lineaFooter'>
                <hr />
            </div>
            <div className='contenidoFooter'>
                <div>
                    <a href='#'><img src={facebook} alt='facebook' className='icono' /></a>
                    <a href='#'><img src={youtube} alt='youtube' className='icono' /></a>
                    <a href='#'><img src={instagram} alt='instagram' className='icono' /></a>
                    <a href='#'><img src={twitter} alt='twitter' className='icono' /></a>
                </div>
                <div className='copy'>© Copyright MP 2024</div>
            </div>
        </footer>
    )
}