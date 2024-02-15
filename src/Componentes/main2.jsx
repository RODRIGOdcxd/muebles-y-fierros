import sillasCocina from '../Img/sillascocina.jpg'
import juegoTerraza from '../Img/Terraza.png'
import { Button } from '@mui/material'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded'
import '../Estilos/main2.css'
//import '../Javascript/main2'

export default function Main(){
    return(
        <main>
            <div className='divPortada'>
                <img className='imgPortadaSilla silla' src={sillasCocina} alt='sillas de cocina' />
                <img className='imgPortadaTerraza terraza' src={juegoTerraza} alt='juego de terrazas' />
                <div className='divTextoPortada'>
                    <div className='divContenedorSpan'>
                        <span>SUMÉRGETE EN TUS</span>
                        <span>NUEVOS</span>
                        <span>SENTIMIENTOS DE</span>
                        <span>MUEBLES</span>
                        <Button variant='contained' sx={{bgcolor: '#0CB7F2', margin: '1rem 0'}}>
                            <div className='divButtonContacto' style={{display: 'flex', flexDirection: 'column'}}>
                                <span>CONTACTO</span>
                                <span>937-259-847</span>
                            </div>
                        </Button>
                    </div>
                </div>
                <div className='buttonDerecha'>
                    <ArrowCircleRightRoundedIcon id='botonDerecha' color='primary' fontSize='large'></ArrowCircleRightRoundedIcon>
                </div>
            </div>
        </main>
    )
}