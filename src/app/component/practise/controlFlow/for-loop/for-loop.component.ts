import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-loop',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for-loop.component.html',
  styleUrl: './for-loop.component.css'
})
export class ForLoopComponent {

  dayNumber: string = "1";
  

  studentList:any[] = [
    {studId: 1, totalMarks: 23, gender: 'male', name: "Abraham", city:"Delhi", isActive: false},
    {studId: 2, totalMarks: 44, gender: 'female', name: "Balbir", city:"Nagpur", isActive: true},
    {studId:3,  totalMarks: 45, gender: 'male', name: "Charanjeet", city:"Punjab", isActive: true},
    {studId: 4, totalMarks: 98, gender: 'female', name: "Durga", city:"Mumbai", isActive: false},
    {studId: 5, totalMarks: 67, gender: 'male', name: "Ellana", city:"Kerela", isActive: true},
  ];

  cityArray: string[] = ['Ahemdabad', "Bombay", "Calcutta", "Delhi", "Etawa", "Himachal Pradesh"];

}
