import React from 'react';
import _ from 'lodash'
import {Grid,Label} from 'semantic-ui-react'

const GridBasic = () => {
    const columns = _.times(16, i => (
        <Grid.Column key={i}>
          <Label>{i+1}</Label>
        </Grid.Column>
      ))

    return (
        <div>
            <h2>Basic Grid</h2>
            <p>Grid has 16 coulmns by default</p>
            <Grid>
                {columns}
            </Grid>
           
        </div>
    );
};

export default GridBasic;