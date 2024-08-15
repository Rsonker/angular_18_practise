import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './compCommunication/comps/comp1/comp1.component';
import { Comp2Component } from './compCommunication/comps/comp2/comp2.component';
import { Comp3Component } from './compCommunication/comps/comp3/comp3.component';
import { Comp4Component } from './compCommunication/comps/comp4/comp4.component';
import { Comp5Component } from './compCommunication/comps/comp5/comp5.component';
import { DataBindingComponent } from "./component/practise/data-binding/data-binding.component";
import { StructuralDirectiveComponent } from "./component/practise/structural-directive/structural-directive.component";
import { AttributeDirectiveComponent } from "./component/practise/attribute-directive/component/practise/attribute-directive.component";
import { NavComponent } from "./component/common/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Comp1Component, Comp2Component, Comp3Component, Comp4Component, Comp5Component, DataBindingComponent, StructuralDirectiveComponent, AttributeDirectiveComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pracise';
}
