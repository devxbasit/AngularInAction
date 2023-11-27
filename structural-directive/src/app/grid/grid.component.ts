import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent {
  employees = [
    {
      name: 'Basit',
      salary: 10,
    },
    {
      name: 'Wasit',
      salary: 20,
    },
    {
      name: 'Jhon',
      salary: 100,
    },
  ];

  selectedEmployee: any = {};
  isInlineEditingEnabled = false;

  selectEmployeeToEdit(index: number) {
    this.isInlineEditingEnabled = false;
    this.selectedEmployee = this.employees[index];
  }

  enableInlineEditing() {
    this.isInlineEditingEnabled = true;
  }

  updateSelectedEmployee(event: any) {
    const key = event.target.name;
    const value = event.target.value;

    this.selectedEmployee[key] = value;
  }
}
