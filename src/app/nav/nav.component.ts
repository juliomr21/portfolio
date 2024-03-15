import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
menu = false;
closeMenu(){
  this.menu = false
}
msg(){
  console.log('jdjdjd')
}
}
