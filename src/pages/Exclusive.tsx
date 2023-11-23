import React, { useState } from 'react';

interface Props {
    // Define your component props here
}

const Exclusive: React.FC<Props> = (props) => {
    return (
        <div className='mt-20'>
            <p className='text-5xl text-center text-red-600 font-Roboto font-bold'>EXCLUSIVE</p>
        </div>
    );
};

export default Exclusive;