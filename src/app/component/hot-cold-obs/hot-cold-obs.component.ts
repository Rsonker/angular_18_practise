import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-hot-cold-obs',
  standalone: true,
  imports: [],
  templateUrl: './hot-cold-obs.component.html',
  styleUrl: './hot-cold-obs.component.css'
})
export class HotColdObsComponent {

  cold: Observable<any> = new Observable((observer)=>{
    observer.next(Math.floor(Math.random() * 100));
  });
  hot = new Subject();

  
  ngOnInit() {
    this.cold.subscribe((data) => {
      console.log('Cold Observable: ', data);
    });
    this.cold.subscribe((data) => {
      console.log('Cold Observable: ', data);
    });
    
    this.hot.subscribe((data) => {
      console.log('Hot Observable: ', data);
    });
    this.hot.subscribe((data) => {
      console.log('Hot Observable: ', data);
    });
    this.hot.next(Math.floor(Math.random() * 100));
  }

}
