import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  imports: [NgTemplateOutlet, CommonModule],
  templateUrl: './template-ref.component.html',
  styleUrl: './template-ref.component.css',
  standalone: true
})
export class TemplateRefComponent {
  a: number = 10;
  b: number = 20;
  calc(){
    return this.a + this.b;
  }

  showData = {
    name: 'Alex',
    age: 29,
    location: 'USA'
  }

  eomployees=[
    {name: 'Alex', age: 29, location: 'USA'},
    {name: 'John', age: 30, location: 'UK'},
    {name: 'Ravi', age: 25, location: 'India'},
    {name: 'Raj', age: 35, location: 'India'},
    {name: 'Rahul', age: 40, location: 'India'},
  ]

}
