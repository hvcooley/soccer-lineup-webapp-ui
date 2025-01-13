import { Component } from '@angular/core';
import { AgGridAngular } from '@ag-grid-community/angular'; // Angular Data Grid Component
import type { ColDef } from '@ag-grid-community/core'; // Column Definition Type Interface
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

@Component({
  selector: 'app-test-ag-grid',
  templateUrl: './test-ag-grid.component.html',
  styleUrl: './test-ag-grid.component.css'
})
export class TestAgGridComponent {

  // Row Data: The data to be displayed.
  rowData = [
    { make: "Tesla", model: "Model Y", price: 64950, electric: true },
    { make: "Ford", model: "F-Series", price: 33850, electric: false },
    { make: "Toyota", model: "Corolla", price: 29600, electric: false },
  ];

  // Column Definitions: Defines the columns to be displayed.
  colDefs: ColDef[] = [
      { field: "make" },
      { field: "model" },
      { field: "price" },
      { field: "electric" }
  ];

}
