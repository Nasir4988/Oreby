import React, { useState } from 'react'
import Container from './Container'
import Flex from './Flex'
import { HiMiniBars2 } from "react-icons/hi2";
import { FaSearchPlus } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { IoIosCart } from "react-icons/io";

const Navbar = () => {
  let [isCateNav, setisCateNav] = useState(false);
  return (
    <section className='bg-[#979797] py-[25px]'>
        <Container>
            <Flex className="items-center">
                <div className="w-1/4 relative">
                  <div className="flex items-center gap-x-2">
                     <HiMiniBars2/>
                     <h3>Shop by Category</h3>                
                  </div>
                    <div className="bg-[#262626] w-[300px] absolute top-[61px] left-0">
                      <ul>
                        <li>Accesories</li>
                        <li>Furniture</li>
                        <li>Electronics</li>
                        <li>Clothes</li>
                        <li>Bags</li>
                        <li>Home Appliances</li>
                      </ul>
                    </div>
                </div>
                <div className="w-2/4">
                  <div className="relative">
                      <input type="search" className='py-3 pl-3 w-full rounded-sm cursor-pointer outline-none' placeholder='search...' />
                      <FaSearchPlus className='absolute top-[50%] translate-y-[-50%] right-[30px] cursor-pointer'/>
                   </div>
                  </div>
                <div className="w-1/4">
                  <div className="flex justify-end gap-x-6">
                    <div className="flex">
                       <FaUserAlt/>
                       <TiArrowSortedDown/>
                    </div>
                    <div className="">
                        <IoIosCart/>
                    </div>
                  </div>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Navbar
