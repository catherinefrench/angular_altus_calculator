import { Component, OnInit } from '@angular/core';
import { Property } from '../../property';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

 

	tenantAreaPercent: 4;
	showTenantAreaPercent: boolean = true; 
	showOccupancy: boolean = true;
 	rentableArea = 3;
	property: Property = {
		name: 'Enter Name',
		rentableArea: null,
		tenantName: '',
		tenantArea: null
	}; 
	// style = {
	// 	color: red;
	// }

  constructor() { }

  ngOnInit() {

 	// this.property 

	this.calculateTenantAreaPercent();

  }
 
  testFunc = () => {
  }

  calculateTenantAreaPercent = () => {
   	console.log("Showing TAP"); 
   	 
   	console.log(this.property.tenantArea);
   	console.log(this.property.rentableArea);

  	this.tenantAreaPercent = this.property.tenantArea / this.property.rentableArea;

  	// setTimeout( function(){
  	// 	console.log(tenantAreaPercent);
  	// }, 500 );
  }
 
  fireEventTenantArea = (e) => {
  	// console.log(e.target.value);
	// if (!this.showOccupancy) {
	// 	this.showOccupancy = true;
	// } 
	this.calculateTenantAreaPercent(); 
  }

  fireEventRentableArea = (e) => {    
  	// if (!this.showTenantAreaPercent) {
  	// 	this.showTenantAreaPercent = true;
  	// } 
 	this.calculateTenantAreaPercent(); 
  }

  onSubmit(e) {
  	console.log("Form submitted!");
  	console.log(e.type);
  	e.preventDefault(); 
  }
 
  fireSubmitEvent(e){
  	console.log(e);
  }
   
}
