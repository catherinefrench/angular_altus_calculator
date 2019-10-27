import { Component, OnInit } from '@angular/core';
import { Property } from '../../property';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

	showOccupancy: boolean = false;

	model =  new Property('23 Cannon Place', 'Ashridge Fine Foods',
                       305000,
                       63500);
  constructor() { }

  ngOnInit() {
  }

  fireEvent(e){
  	console.log(e);
  }
 

// get diagnostic() { return JSON.stringify(this.model); }
}
