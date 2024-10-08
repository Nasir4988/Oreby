import React, { useState } from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
import Flex from "./Flex"
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";



const Header = () => {
  let [show, setShow] = useState(false)
  return (
    <header className='py-6'>
      <Container>
         <Flex className="justify-between items-center">
              <div className='w-1/4 cursor-pointer'>
                  <img src={logo} alt="" />
               </div>
            <div className='w-3/4 bg-white'>
               <ul className={`lg:flex lg:static absolute right-0 duration-300 ease-in-out top-0 justify-center gap-x-[30px] ${show ? 'right-0 top-[50px] w-full' : 'right-[-100px] top-[50px]'}`}>
                  <li className='font-sans font-bold text-[16px] text-[#262626] cursor-pointer duration-300     ease-in-out hover:text-blue-400 text-center py-2'>Home</li>
                  <li className='font-sans font-bold text-[16px] text-[#262626] cursor-pointer duration-300 ease-in-out hover:text-blue-400 text-center py-2'>Shop</li>
                  <li className='font-sans font-bold text-[16px] text-[#262626] cursor-pointer duration-300 ease-in-out hover:text-blue-400 text-center py-2'>About</li>
                  <li className='font-sans font-bold text-[16px] text-[#0c0606] cursor-pointer duration-300  ease-in-out hover:text-blue-400 text-center py-2'>Contact</li>
                  <li className='font-sans font-bold text-[16px] text-[#262626] cursor-pointer duration-300 ease-in-out hover:text-blue-400 text-center py-2'>Journal</li>
              </ul>
            </div>
              <div className='lg:hidden' onClick={()=>setShow(!show)}>
                  {show ? <RxCross2/> : <TiThMenu/>}
              </div>
         </Flex>
       </Container>
    </header>
 
  )
}

export default Header
