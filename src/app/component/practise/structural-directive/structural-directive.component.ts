import { NgFor, NgIf, NgSwitch } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [NgIf, NgFor, NgSwitch, FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  isDiv1Visible:boolean = true;
  isDiv2Visible:boolean = true;
  num1:string = '';
  num2:string = '';
  checked:boolean = true;
  state: string = "";
  cityArray:string [] =['Delhi', "UttraKhand", "Uttar Pradesh", "Mumbai", "Hyderabad"];

studentList:any[] = [
  {studId: 1, name: "Abraham", city:"Delhi", isActive: false},
  {studId: 2, name: "Balbir", city:"Nagpur", isActive: true},
  {studId:3, name: "Charanjeet", city:"Punjab", isActive: true},
  {studId: 4, name: "Durga", city:"Mumbai", isActive: false},
  {studId: 5, name: "Ellana", city:"Kerela", isActive: true},
]

  router:Router = inject(Router);


navigateAttribute(){
  this.router.navigateByUrl('attribute-directive');
}


  hide(){
    this.isDiv1Visible = false;
  }
  
  show(){
    this.isDiv1Visible = true;
  }

  hideShow(){
    this.isDiv2Visible = !this.isDiv2Visible;
  }

}
