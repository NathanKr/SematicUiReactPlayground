import React from "react";
import {  Table, Pagination } from "semantic-ui-react";
import _ from "lodash";

const TableWithPagination = () => {
  const tableBodyRows = _.times(10, i => (
    <Table.Row key={i}>
      {_.times(3, j => (
        <Table.Cell key={j}>
          Cell {i},{j}
        </Table.Cell>
      ))}
    </Table.Row>
  ));

 
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Header1</Table.HeaderCell>
          <Table.HeaderCell>Header2</Table.HeaderCell>
          <Table.HeaderCell>Header3</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableBodyRows}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="3">
           <Pagination floated="right" totalPages={5}/>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default TableWithPagination;
