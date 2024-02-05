
import React from 'react';
import spin from '../../../public/Hourglass.gif'
import Image from 'next/image';
function Spinner() {
  return (
    <div className='text-center'>
      <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:"#a5f1e6" ,height:'25vw'}}>
        <Image src={spin} alt='loading'/>
      </div>
    </div>
  );
}

export default Spinner;
