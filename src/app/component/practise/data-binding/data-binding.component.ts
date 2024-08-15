import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  courseName: string = "Angular 18";
  inputType = "radio";
  rollNum: number = 2343;
  isIndian:boolean = true;
  currentDate: Date = new Date();
  myClassName = "bg-primary";
  stateName='Goa';
  

  firstName = signal("Rohit");

  constructor(){
    
  }

  showAlert(message:string){
    alert(message);
  }
  
  
  changeCourseName(){
    this.courseName = "React JS";
  }

  updateSignal(){
    this.firstName.set('Sachin Tendulkar')
  }

}
