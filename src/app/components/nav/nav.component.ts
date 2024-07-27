import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  nav: boolean = false;
  shadow: boolean = false;
  navBg: string = 'white';
  linkColor: string = '#1f2937';
  isImage: boolean = true;

  handleNav() {
    this.nav = !this.nav;
  }

  toggleIsImage(): boolean{
    return this.isImage = !this.isImage;
  }

  ngOnInit() {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        this.shadow = true;
      } else {
        this.shadow = false;
      }
    };
    window.addEventListener('scroll', handleShadow);
  }
}
