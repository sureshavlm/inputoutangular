import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'employee-details',
	templateUrl: './employee.details.html'
})

export class EmployeeDetailsComponent {

	newsalary:any;
	
	@Output()
	public updateSalary = new EventEmitter();

	@Input()
	employee: any;

	update() {
		this.updateSalary.emit(this.newsalary); 
		//emits an event to all event handlers
	}
	
}