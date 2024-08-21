import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownDirective } from '../../../directive/common/dropdown.directive';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, DropdownDirective],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
