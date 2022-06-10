import React from 'react';
import CD from './assets/CD.png';

const Label = () => {
    return (
        <div className='label'>
            <div>
                <img src={CD} alt="disque" />
            </div>
        </div>
    );
};

export default Label;