import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'inputoutput';
  currentEmployee: any;

  employees: any = [
		  { name: 'David', age: 38, gender: 'Male', skill: 'Java', salary: 100000, project: 'IBM', fulltime: true},
		   { name: 'John', age: 26, gender: 'Male', skill: '.Net', salary: 85000, project: 'Bank of America', fulltime: true},
		    { name: 'Kathy', age: 25, gender: 'Female', skill: 'Project Manager', salary: 120000, project: 'Edureka', fulltime: false}
		  ];


	onEmployeeSelected(_employee: any) {
		this.currentEmployee = _employee;
	}

	onUpdateSalary(_updatedSal: Event) {
		this.currentEmployee.salary = _updatedSal;
	}

}
