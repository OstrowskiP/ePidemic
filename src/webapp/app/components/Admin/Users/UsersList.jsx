import React, { Component } from 'react';
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
} from 'material-ui/Table';

class UsersList extends Component {
  render() {
    return (
      <div className="users-table-container">
        <Table
          multiSelectable={ false }
          onRowSelection={ this.props.onRowSelection }>
          <TableHeader displaySelectAll={ false }>
            <TableRow>
              <TableHeaderColumn style={{ width: 10 }}>Lp.</TableHeaderColumn>
              <TableHeaderColumn>Nazwa użytkownika</TableHeaderColumn>
              <TableHeaderColumn>Imię i nazwisko</TableHeaderColumn>
              <TableHeaderColumn>Rola</TableHeaderColumn>
              <TableHeaderColumn>Aktywny</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={ false }>
            {
              this.props.users.map((row, index) => (
                <TableRow key={ index } selected={ row.selected }>
                  <TableRowColumn style={{ width: 10 }}>{ index + 1 }</TableRowColumn>
                  <TableRowColumn>{ row.username }</TableRowColumn>
                  <TableRowColumn>{ row.name + " " + row.surname }</TableRowColumn>
                  <TableRowColumn>{ row.role }</TableRowColumn>
                  <TableRowColumn>{ row.active.toString() }</TableRowColumn>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default UsersList;
