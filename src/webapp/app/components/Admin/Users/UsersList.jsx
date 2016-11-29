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
              <TableHeaderColumn tooltip="ID">ID</TableHeaderColumn>
              <TableHeaderColumn tooltip="Username">Nazwa użytkownika</TableHeaderColumn>
              <TableHeaderColumn tooltip="Role">Rola</TableHeaderColumn>
              <TableHeaderColumn tooltip="Enabled">Aktywny</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={ false }>
            {
              this.props.users.map((row, index) => (
                <TableRow key={ index } selected={ row.selected }>
                  <TableRowColumn>{ row._id }</TableRowColumn>
                  <TableRowColumn>{ row.username }</TableRowColumn>
                  <TableRowColumn>{ row.role }</TableRowColumn>
                  <TableRowColumn>{ 'true' }</TableRowColumn>
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
