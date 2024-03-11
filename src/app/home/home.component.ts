import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Aos from 'aos';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
email = 'juliomr21.correo@gmail.com';
constructor() { }

// @HostListener('scroll', ['$event'])
// onScroll(event: any) {
//   // Aquí puedes manejar el evento de desplazamiento
//   console.log('Se ha desplazado el contenido',window.scrollY);
// }
ngOnInit(){
  Aos.init()
}
scroll_home(){

  console.log ('ssss')
}
}
