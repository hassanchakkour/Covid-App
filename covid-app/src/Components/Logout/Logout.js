import React from 'react';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import {useNavigate} from 'react-router-dom'



function Logout() {

    let navigate = useNavigate();

    const onLogout = () => {
        navigate('/')
    }
    return (
        <button 
          onClick={onLogout}
          className="flex top-0 px-2 py-2 text-sm font-medium text-white bg-red-600 border border-transparent rounded-lg hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
        >
          <RiLogoutBoxRLine className="mr-2" />
          Logout
        </button>
      );
    }

export default Logout;