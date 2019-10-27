import { Component, OnInit } from '@angular/core';
import { Property } from '../../property';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	showOccupancy: boolean = false;
	property: Property = {
		name: '',
		rentableArea: null,
		tenantName: '',
		tenantArea: null
	}

	model =  new Property('23 Cannon Place', 305000, 'Ashridge Fine Foods',
                       63500);
  constructor() { }

  ngOnInit() {
  }

  fireEvent(e){
  	console.log(e);
  }
  fireEvent2(e){
  	console.log(e.target.value);
	if (!this.showOccupancy) {
		this.showOccupancy = true;
	}
  }

  onSubmit(e) {
  	console.log("Form submitted!");
  	console.log(e.type);
  	e.preventDefault(); 
  }
  
// get diagnostic() { return JSON.stringify(this.model); }
}
