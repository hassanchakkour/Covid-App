import React, { useEffect, useState } from 'react';
import Logout from '../Logout/Logout';
import NewUserMain from '../NewUserMain/NewUserMain';



const Usermain = () => {


  return (
    <div>
      <h1 className='text-center underline font-semibold text-4xl'>COVID Application</h1>
      <div className='text-left'>
      <Logout />
      </div>
       <NewUserMain />
       
    </div>
  )
}

export default Usermain