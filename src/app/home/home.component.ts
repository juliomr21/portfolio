import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Aos from 'aos';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
email = 'juliomr21.correo@gmail.com';
portfolio:Portfolio | null = null;
download = false
constructor(private http: HttpClient) {

 }
ngOnInit(){
  Aos.init();
  this.http.get<Portfolio>('assets/info/pt.json').subscribe(resp => {
   this.portfolio = resp;
   this.download = true;
  });

}

}
interface Proyecto {
  tema: string;
  type: string;
  empresa: string;
  dir_site: string;
  dir_code: string;
  description: string;
  image: string;
}

interface ExperienciaLaboral {
  centro: string;
  cargo: string;
  descripcion: string;
}

interface Certificado {
  image: string;
  empresa: string;
  titulo: string;
  link: string;
  type: 'link' | 'pdf';
}

interface CursoComplementario {
  titulo: string;
  centro: string;
}

interface skills{
  image:string;
  titulo:string
}

interface Portfolio {
  personal: {
      saludo: string;
      titulo: string;
      descripcion: string;
      cv: string;
      image: string;
  };
  skill: {
      section: string;
      skills: skills[];
  };
  proyectos: {
      section: string;
      project: Proyecto[];
  };
  experiencia: {
      section: string;
      experiencia: ExperienciaLaboral[];
  };
  cetificacion: {
      section: string;
      certificados: Certificado[];
  };
  formacion_principal: {
      section: string;
      titulo: string;
      centro: string;
  };
  formacion_complementaria: {
      section: string;
      cursos: CursoComplementario[];
  };
}
