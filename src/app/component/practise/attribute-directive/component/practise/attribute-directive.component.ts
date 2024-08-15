import { CommonModule, NgClass, NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [NgStyle, NgClass, FormsModule, NgFor, RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor: string = "bg-primary";
  isDiv2Active: boolean = false;
  num1:string = "";
  num2:string = "";
  isActiveCheckBox: boolean = true;
  customStyle: any={
    'color': 'white',
    'width':'200px',
    'height':'200px',
    'background-color':'red',
    'border-radius':'50%',
    'text-align':'center'

  }

  studentList:any[] = [
    {studId: 1, totalMarks: 23, gender: 'male', name: "Abraham", city:"Delhi", isActive: false},
    {studId: 2, totalMarks: 44, gender: 'female', name: "Balbir", city:"Nagpur", isActive: true},
    {studId:3,  totalMarks: 45, gender: 'male', name: "Charanjeet", city:"Punjab", isActive: true},
    {studId: 4, totalMarks: 98, gender: 'female', name: "Durga", city:"Mumbai", isActive: false},
    {studId: 5, totalMarks: 67, gender: 'male', name: "Ellana", city:"Kerela", isActive: true},
  ]


  addRedClass(){
    this.div1BgColor = "bg-danger";
  }
  addBlueClass(){
    this.div1BgColor = "bg-primary";
  }

  div2Toggle(){
    this.isDiv2Active = !this.isDiv2Active;
  }
  

}
