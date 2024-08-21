import { CommonModule, UpperCasePipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [CommonModule, NaPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstName: string = "Angular";
  titleCase: string = "this is a demo session.";
  currentTime: Observable<Date> = new Observable<Date>;

  constructor(){
    this.currentTime = interval(1000).pipe(map(()=>new Date()));
  }

  currentDate: Date = new Date();

  student:any ={
    name: "Rohit",
    city: "Delhi",
    empId: 27,
    state: ''
  }
  

}
