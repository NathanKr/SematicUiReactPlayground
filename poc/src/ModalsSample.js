import React from 'react';
import ModalBasic from './ModalBasic'
import ModalControlled from './ModalControlled'
import ModalYesNo from './ModalYesNo'

const ModalsSample = () => {
    return (
        <div>
            <p>Modal is build over Popup which is nice code reuse (check via React Dev Tools)</p>
            <h2>Basic Modal</h2>
            <ModalBasic/>  
            <h2>Controlled Modal</h2>  
            <ModalControlled/>    
            <h2>Yes No Modal</h2>  
            <p>this modal is controlled</p>
            <ModalYesNo/>
        </div>
    );
};

export default ModalsSample;