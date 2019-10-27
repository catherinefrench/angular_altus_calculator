import { Component, OnInit } from '@angular/core';
import { Property } from '../../property';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
let myProperty =  new Property('23 Cannon Place', 'Ashridge Fine Foods',
                       305000,
                       63500);
console.log('My property is' + myProperty.name); // "My hero is called SkyDog"
