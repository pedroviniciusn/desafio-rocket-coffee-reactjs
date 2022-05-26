import { useState } from 'react'

import MenuItens from './MenuItens'

import Logo from '../../assets/logo-desktop.svg'
import LogoMobile from '../../assets/logo-mobile.svg'
import MenuOpen from '../../assets/menu-buguer-open.svg'
import MenuClose from '../../assets/menu-buguer-close.svg'


import './header.css'

function Header() {

    const [ open, setOpen ] = useState(false)
     
    
    return (
        <header>
            <img src={Logo} className="logo" alt="logo rocket" />
            <img src={LogoMobile} className="logo-mobile" alt="logo rocket" />

            <nav >
                <ul id={open ? "active" : "hidden"}>
                    {MenuItens.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <a href={item.ulr}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <button>
                pegar meu café
            </button>
            
            <div className='menu' onClick={() => setOpen(!open)}>
                <img src={open ? MenuClose : MenuOpen} alt='menu-icon' />      
            </div>        

        </header>
    )
}

export default Header