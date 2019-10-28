import { Component, OnInit } from '@angular/core';
import { Property } from '../../property';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
 
	tenantAreaPercent: null;
	showTenantAreaPercent: boolean = true; 
	showOccupancy: boolean = true;
 	rentableArea = 3;
	property: Property = {
		name: '',
		rentableArea: null,
		tenantName: '',
		tenantArea: null
	};  

  constructor() { }

  ngOnInit() {
  
  } 

  calculateTenantAreaPercent = () => { 
  	this.tenantAreaPercent = this.property.tenantArea / this.property.rentableArea;
  }
 
  fireEventTenantArea = (e) => {f
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
