import React from 'react';
import ModalBasic from './ModalBasic'
import ModalControlled from './ModalControlled'

const ModalsSample = () => {
    return (
        <div>
            <p>Modal is build over Popup which is nice code reuse (check via React Dev Tools)</p>
            <h2>Basic Modal</h2>
            <ModalBasic/>  
            <h2>Controlled Modal</h2>  
            <ModalControlled/>        
        </div>
    );
};

export default ModalsSample;