import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  standalone: true
})
export class DropdownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { 
  }

  

  private isOpen = false;

  @HostListener('click') toggleOpen(){
    this.isOpen = !this.isOpen;
    const dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');
    if(this.isOpen){
      this.renderer.addClass(dropdownMenu, "show");
    }else
    this.renderer.removeClass(dropdownMenu, "show");
  }
  
  @HostListener('document:click', ['$event']) closeDropdown(event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
        this.isOpen = false;
        const dropdownMenu = this.el.nativeElement.querySelector('.dropdown-menu');
        this.renderer.removeClass(dropdownMenu, 'show');
      }
    }

}
