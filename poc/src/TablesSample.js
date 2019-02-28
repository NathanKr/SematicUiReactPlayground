import React from 'react';
import TableWithPagination from './TableWithPagination'
import TableSorted from './TableSorted'

const TablesSample = () => {
    return (
        <div>
            <h1>Tables</h1>
            <h2>Table with pagination</h2>
            <p>need to implement pagination click handlers</p>
            <TableWithPagination/>
            <hr/>
            <h2>Table with sorting</h2>
            <p>click on header for sorting</p>
            <TableSorted/>
            
        </div>
    );
};

export default TablesSample;