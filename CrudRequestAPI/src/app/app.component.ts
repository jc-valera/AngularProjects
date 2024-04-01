import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

import { Employee } from './Interfaces/employee';
import { EmployeeService } from './Services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  // }

  displayedColumns: string[] = ['Id',
    'Name',
    'FirstSurname',
    'SecondSurname',
    'Area',
    'BirthDate',
    'Salary'];

  constructor(
    private employeeService: EmployeeService
  ) {

  }

  dataSource = new MatTableDataSource<Employee>();


  ngOnInit(): void {
    this.showEmployee();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // applyFilter(event:Event){
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  showEmployee() {
    this.employeeService.getList().subscribe({
      next: (dataResponse) => {
        console.log(dataResponse)
        this.dataSource.data = dataResponse;
      }, error: (e) => { }
    })
  }

}