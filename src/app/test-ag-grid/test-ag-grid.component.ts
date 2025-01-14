import { Component } from '@angular/core';
import { AgGridAngular } from '@ag-grid-community/angular'; // Angular Data Grid Component
import type { ColDef } from '@ag-grid-community/core'; // Column Definition Type Interface
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

@Component({
  selector: 'app-test-ag-grid',
  templateUrl: './test-ag-grid.component.html',
  styleUrls: ['./test-ag-grid.component.css']
})
export class TestAgGridComponent {

  // Row Data: The soccer stat data to be displayed.
  rowData = [
    { Name: "Harrison Cooley", Position: "CF", Goals: 2, Assists: 0 },
    { Name: "Leo Cooley", Position: "CB", Goals: 0, Assists: 2 },
    { Name: "Andrew Carolan", Position: "CB", Goals: 0, Assists: 0 },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
    { field: "Name", headerName: "Player", editable: false }, // Not editable
    { field: "Position", headerName: "Position", editable: false }, // Not editable
    {
      field: "Goals",
      headerName: "Goals",
      editable: true,
      cellEditor: 'agNumberCellEditor', // Enable Number Cell Editor
      cellEditorParams: {
        useFormatter: true,             // Format the value while editing
        step: 1,                   // Increment step when using arrows
        showStepperButtons: true
      },
      valueParser: (params) => parseInt(params.newValue, 10) || 0, // Ensure valid integer
    },
    {
      field: "Assists",
      headerName: "Assists",
      editable: true,
      cellEditor: 'agNumberCellEditor', // Enable Number Cell Editor
      cellEditorParams: {
        useFormatter: true,
        increment: 1,
        showStepperButtons: true
      },
      valueParser: (params) => parseInt(params.newValue, 10) || 0,
    }
  ];

  // Default column properties
  defaultColDef: ColDef = {
    resizable: true,
    sortable: true,
    filter: true,
  };
}
