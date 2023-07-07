import React, { useState } from 'react'
import { ILinks } from '../interfaces'
import { IonIcon } from '@ionic/react';
import { menu } from 'ionicons/icons';
import { logIn } from 'ionicons/icons';

const Nav = ():JSX.Element => {
    const links: ILinks[] =[
        {name:'Store',link:'/store'},
        {name:'Community',link:'/community'},
        {name:'About',link:'/about'},
        {name:'Support',link:'/support'},
    ]
    const [burger, setBurger] = useState<boolean>(false)
  return (
    <div className='md:text-center text-white flex justify-between py-8 px-28 w-full fixed top-0 left-0'>
       <div className='text-4xl font-qore'>
        <IonIcon icon={menu}></IonIcon>
        <span>GAMEOVER</span>
       </div>
        <ul className='md:flex md:items-center text-2xl justify-between md:pb-0 pb-12  '>
           {links.map((link)=>(
            <li className='md:ml-10 md:my-0 my-7'> 
                <a href={link.link}>{link.name}</a>
            </li>
           ))}
        </ul>
        <button className='lg'>Login</button>
        <IonIcon className='hidden lg:visible' icon={menu}></IonIcon>
    </div>
  )
}

export default Nav