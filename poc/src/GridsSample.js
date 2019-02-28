import React from 'react';
import GridWithRows from './GridWithRows'
import GridStretched from './GridStretched'
import GridWithFloat from './GridWithFloat'

import GridBasic from './GridBasic'

const GridsSample = () => {
    return (
        <div>
            <GridBasic/>
            <GridWithRows/>
            <GridStretched/>
            <GridWithFloat/>
        </div>
    );
};

export default GridsSample;