import { Component, TemplateRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Comp1Component } from './compCommunication/comps/comp1/comp1.component';
import { Comp2Component } from './compCommunication/comps/comp2/comp2.component';
import { Comp3Component } from './compCommunication/comps/comp3/comp3.component';
import { Comp4Component } from './compCommunication/comps/comp4/comp4.component';
import { Comp5Component } from './compCommunication/comps/comp5/comp5.component';
import { DataBindingComponent } from "./component/practise/data-binding/data-binding.component";
import { StructuralDirectiveComponent } from "./component/practise/structural-directive/structural-directive.component";
import { AttributeDirectiveComponent } from "./component/practise/attribute-directive/component/practise/attribute-directive.component";
import { NavComponent } from "./component/common/nav/nav.component";
import { TemplateRefComponent } from './component/template-ref/template-ref.component';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
//   imports: [RouterOutlet, Comp1Component, Comp2Component, Comp3Component, Comp4Component, Comp5Component, DataBindingComponent, StructuralDirectiveComponent, AttributeDirectiveComponent, NavComponent, TemplateRefComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practise';
  constructor (private router: Router, private activatedRoute:    ActivatedRoute, private titleService: Title) {
    this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
            let child = this.activatedRoute.firstChild;
            while (child) {
                if (child.firstChild) {
                    child = child.firstChild;
                } else if (child.snapshot.data &&    child.snapshot.data['title']) {
                    return child.snapshot.data['title'];
                } else {
                    return null;
                }
            }
            return null;
        })
    ).subscribe( (data: any) => {
        if (data) {
            this.titleService.setTitle(data + ' - Practise Angular');
        }
    });
}
}
