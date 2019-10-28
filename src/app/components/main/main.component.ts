import { Component, OnInit } from '@angular/core';
import { Property } from '../../property';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
	showTenantAreaPercent: boolean = true; 
	showOccupancy: boolean = false;
 	rentableArea = 3;
	property: Property;
	// style = {
	// 	color: red;
	// }

  constructor() { }

  ngOnInit() {

 	this.property = {
		name: '',
		rentableArea: null,
		tenantName: '',
		tenantArea: null,
		tenantAreaPercent: null
	}; 

	this.calculateTenantAreaPercent();

  } 
	calculateTenantAreaPercent() {
		console.log(this.property);
		// let tenantArea = ;
		// let rentableArea = ;
		this.property.tenantAreaPercent = this.property.tenantArea * 10 / this.property.rentableArea;
		console.log(this.property.tenantAreaPercent);
	} 
  
  fireEventTenantArea(e){
  	// console.log(e.target.value);
	if (!this.showOccupancy) {
		this.showOccupancy = true;
	} 
	this.calculateTenantAreaPercent();
	e.stopPropagation();
  }

  fireEventRentableArea(e){    

  	if (!this.showTenantAreaPercent) {
  		this.showTenantAreaPercent = true;
  	} 
 	this.calculateTenantAreaPercent();
 	e.stopPropagation();
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
