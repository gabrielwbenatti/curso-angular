import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Gabriel';
  age: number = 10;
  job = 'Developer';
  hobbies = ['correr', 'jogar', 'estudar'];
  car = {
    name: 'onix',
    year: 2020,
  };

  constructor() {}

  ngOnInit(): void {}
}
