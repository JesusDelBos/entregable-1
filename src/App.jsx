import { useState } from 'react'
import './App.css'
import Texto from './components/Texto'
import Phrases from './data/phrases.json'
import Autor from './components/Autor'
import fondo1 from './fondos/fondo1.jpg'
import fondo2 from './fondos/fondo2.jpg'
import fondo3 from './fondos/fondo3.jpg'
import fondo4 from './fondos/fondo4.jpg'


function App() {
  
  const [ index, setIndex ] = useState(1)

  const changePhrase = () =>{
  
    setIndex(Math.floor(Math.random()*14))
  }
  //const fondos [fondo1]
const [ indexFondo, setIndexFondo ] = useState( 0 )
const fondosVarios =[ fondo1, fondo2, fondo3, fondo4 ]
const changeFondo = ()=>{
 // setIndexFondo(Math.floor(Math.random()*4))
  if(index === (fondosVarios.length-1) ){
    setIndexFondo(0)
  }else{
    setIndexFondo(indexFondo + 1)
  }
}
  //console.log(Phrases[0])
  return (
    <div className="App" >
     <h1 className='titulo'>GALLETAS DE LA FORTUNA</h1>
     <img src={ fondosVarios[Math.floor(Math.random()*4)] } alt="" />
     <div className='cajaTexto'>
      <Texto 
      galletaSuerte={ Phrases[index]}
      />
      <br />
      
      <Autor 
      nombreAutor={Phrases[index]}
      />
      </div>
      <br />
      <div className='botonCambios'>
      <button onClick={changePhrase}>Ver Otro</button>
      </div>
    </div>
  )
}

export default App
