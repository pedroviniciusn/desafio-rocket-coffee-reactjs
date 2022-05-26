import rocketCoffeImg from '../../assets/rocket-coffee.png'
import arrow from '../../assets/arrow.svg'

import './Main.css'

function Main(text) {

  text = '<Great Code/>'

  return (
   <main>
    <div className='title'>
      <h1>O café que fará seu código decolar para o próximo nível.</h1>
    </div> 

    <button className='button-mobile'>
      pegar meu café 
      <img src={arrow} alt='arrow' className='arrow' />
    </button>

     <div className='great-coffee'>
      <h2>Great Coffee</h2>
      <span>{text}</span>
     </div>
      <img src={rocketCoffeImg} alt="rocket coffe" className='rocket-coffee' />
   </main>
  )
}

export default Main