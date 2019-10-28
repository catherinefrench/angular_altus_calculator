import { Component, OnInit } from '@angular/core';
import { Property } from '../../property';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

	tenantAreaPercent: number = null;
	showTenantAreaPercent: boolean = true; 
	showOccupancy: boolean = true; 
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
 
  fireEventTenantArea = (e) => { 
	this.calculateTenantAreaPercent(); 
  }

  fireEventRentableArea = (e) => {     
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
