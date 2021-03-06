import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell
} from "@material-ui/core";
import MyTRow from '../Table/row.js';

const tbBody = {
  backgroundColor: '#588FDB',
  marginTop: '20'
}

class ExerciseTable extends React.Component {
  buildTableRows() {
    const {
      Activitydata,
      handleRemove,
      startEditing,
      editIdx,
      stopEditing,
      handleChange,
      header
    } = this.props;

    let tableRows = [];
    for (let i=0; i<Activitydata.length; i++) {
      let tableRow = (
        <MyTRow
          row={Activitydata[i]}
          header={header}
          handleChange={handleChange}
          handleRemove={handleRemove}
          startEditing={startEditing}
          editIdx={editIdx}
          stopEditing={stopEditing}
          id={i}
          key={i}
        />
      );
      tableRows.push(tableRow);
    }
    return tableRows;
  }

  render() {
    const {
      header
    } = this.props;

    return (
      <Table style={tbBody}>
        <TableHead>
          <TableRow>
            {header.map((x, i) => (
              <TableCell key={`thc-${i}`} style={{color: 'black', fontSize:'18', padding:'5'}}>{x.name}</TableCell>
            ))}
            <TableCell />
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {this.buildTableRows()}
        </TableBody>
      </Table>
    );
  }
}

export default ExerciseTable;