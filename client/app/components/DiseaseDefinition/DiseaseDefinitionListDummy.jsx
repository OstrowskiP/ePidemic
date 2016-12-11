import React, { Component } from 'react';
import {
  Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn
} from 'material-ui/Table';

class DiseaseDefinitionListDummy extends Component {
  render() {
    return (
      <div className="users-table-container">
        <Table
          multiSelectable={ false }
          onRowSelection={ this.props.onRowSelection }>
          <TableHeader displaySelectAll={ false }>
            <TableRow>
              <TableHeaderColumn style={{ width: 10 }}>Lp.</TableHeaderColumn>
              <TableHeaderColumn>Jednostka chrobowa</TableHeaderColumn>
              <TableHeaderColumn>Kolor</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            deselectOnClickaway={ false }>
            {
              this.props.diseaseDefinitions.map((row, index) => (
                <TableRow key={ index } selected={ row.selected }>
                  <TableRowColumn style={{ width: 10 }}>{ index + 1 }</TableRowColumn>
                  <TableRowColumn>{ row.name }</TableRowColumn>
                  <TableRowColumn>{ row.color }</TableRowColumn>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default DiseaseDefinitionListDummy;
