import React from 'react';

// import data
import {NavLink} from 'react-router-dom'
import {BsCart4} from 'react-icons/bs'
// import { CartState } from '../context/Context';
import { navigation } from '../../navigation';

const NavMobile = () => {
//   const {state:{cart}} = CartState();

  return (
    <nav className='bg-white shadow-2xl w-full h-full'>
      <ul className='text-center h-full flex flex-col items-center justify-center gap-y-6'>
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <a className='text-xl font-medium capitalize' href={`#${item.href}`}>
                {item.name}
              </a>
            </li>
          );
        })}
        <li className='flex flex-row'>
              <BsCart4  className='capitalize text-2xl mr-4'/>
              {/* <NavLink to='/cart' className='rounded-full bg-green-500 text-base text-center w-6 h-6 text-white'>{cart.length}</NavLink> */}
              </li>
      </ul>
    </nav>
  );
};

export default NavMobile;