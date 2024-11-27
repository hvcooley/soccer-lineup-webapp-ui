import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  data = new MatTableDataSource([{ value: 10 }, { value: 20 }, { value: 30 }]);
  // Define the columns to display
  displayedColumns: string[] = ['row', 'value', 'actions'];
  
  // Define the dataSource with initial data
  dataSource = new MatTableDataSource([
    { value: 10 },
    { value: 20 },
    { value: 30 },
  ]);
  
  increment(item: { value: number }) {
    item.value++;
    this.data._updateChangeSubscription(); // Refresh the dataSource
  }

  decrement(item: { value: number }) {
    item.value--;
    this.data._updateChangeSubscription(); // Refresh the dataSource
  }

}
