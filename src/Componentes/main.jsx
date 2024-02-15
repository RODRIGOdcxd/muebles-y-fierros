import imgPortada from '../Img/Sillas_para_Restaurate_Modelo2_-_Restaurante.jpeg'
//import gifHistoria from '../Img/muebles.gif'
import muebleRestaurante from '../Img/Juego_para_Restaurante__Modelo6-_Restaurante.png'
import { Button } from '@mui/material'
import '../Estilos/main.css'
import '../Javascript/main'

export default function Main(){
    return(
        <main>
          <div className='div-portada'>
            <img src={imgPortada} className='img-portada' alt='imagen portada' />
            <div className='div-texto-portada'>
              <span className='span-texto-portada'>SUMÉRGETE<br></br>EN TUS NUEVOS SENTIMIENTOS DE<br></br> MUEBLES</span>
              <div className='div-botones-portada'>
                <Button variant='contained' sx={{fontSize: '2.5vh'}}>FACEBOOK</Button>
                <Button variant='contained' sx={{fontSize: '2.5vh'}}>CONTACTO</Button>
              </div>
            </div>
          </div>
          <div className='div-historia'>
            <span className='span-titulo'>BIOGRAFIA DE EMPRESA</span>
            <span className='span-biografia'>José, apasionado del diseño y la funcionalidad, fundó Fierros y Madera con la visión de crear muebles innovadores para restaurantes y espacios urbanos. Su compromiso con la calidad y la estética lo llevó a colaborar con arquitectos y diseñadores, expandiendo el alcance de la empresa a nivel Nacional. Hoy, su legado perdura en los espacios públicos y establecimientos gastronómicos que han adoptado los muebles de Fierros y Madera como parte integral de su identidad y estilo.</span>
          </div>
          <div className='div-separador'>
            <section className='div-restaurante sep' id='div-restaurante'>
              <div className='div-texto-img'>
                <span className='span-restaurante'>RESTAURANTE</span>
                <img className='img-mueble-restaurante' src={muebleRestaurante} alt='mueble restaurante' />
              </div>
            </section>
            <section className='div-urbano sep'></section>
          </div>
        </main>
    )
}
