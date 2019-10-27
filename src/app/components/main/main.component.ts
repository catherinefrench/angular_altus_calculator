import { Component, OnInit } from '@angular/core';
import { Property } from '../../property';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	showOccupancy: boolean = false;
	showTenantAreaPercent: boolean = false;
	progressBar: 0;

	property: Property = {
		name: '',
		rentableArea: null,
		tenantName: '',
		tenantArea: null,
		tenantAreaPercent: 50
	} 

	progressStyles = [];

  constructor() { }

  ngOnInit() {
  }

  fireEvent(e){
  	console.log(e);
  }
  fireEventTenantArea(e){
  	// console.log(e.target.value);
	if (!this.showOccupancy) {
		this.showOccupancy = true;
	}

  }
  fireEventRentableArea(e){ 
 	console.log(e.target.value);
  	this.property.rentableArea = e.target.value;
 	console.log(this.property.rentableArea);

  	// this.property.tenantAreaPercent = 10 / 100;

  	this.property.tenantAreaPercent = this.property.tenantArea *100 / this.property.rentableArea;
  	// console.log(this.property.tenantAreaPercent);  

  	// showsTenantAreaPercent if there has been a keypress in tenantArea

  	if (!this.showTenantAreaPercent) {
  		this.showTenantAreaPercent = true;
  	} 

 	console.log("NEW");
 	console.log(this.property.rentableArea);
 	console.log(this.property.tenantAreaPercent);

 	this.progressStyles = this.property.tenantAreaPercent;
 	console.log(this.progressStyles);
 	
  }

  onSubmit(e) {
  	console.log("Form submitted!");
  	console.log(e.type);
  	e.preventDefault(); 
  }
  
// get diagnostic() { return JSON.stringify(this.model); }
}
