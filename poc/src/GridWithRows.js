import React from 'react';
import _ from 'lodash'
import {Grid,Label} from 'semantic-ui-react'

const GridWithRows = () => {
    const columns = _.times(4, i => (
        <Grid.Column key={i}>
          <Label>{i+1}</Label>
        </Grid.Column>
      ))

    return (
        <div>
            <h2>Grid with row</h2>
            <Grid columns='equal'>
                <Grid.Row>
                {columns}
                </Grid.Row>
                <Grid.Row>
                {columns}
                </Grid.Row>
            </Grid>
            
        </div>
    );
};

export default GridWithRows;