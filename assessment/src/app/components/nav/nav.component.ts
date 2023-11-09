import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  constructor() { }

  get isScrolled() {
    return window.scrollY > 50;
  }

  /* setShadow() {
    this.nav.classList.toggle('shadow', this.isScrolled);
  }
 */
}
