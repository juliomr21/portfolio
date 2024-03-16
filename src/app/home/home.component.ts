// import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Aos from 'aos';
import { HttpService } from '../http.service';
import { HttpClientModule } from '@angular/common/http';
import { url } from 'inspector';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email = 'juliomr21.correo@gmail.com';
  portfolio: Portfolio | null = null;
  download = false;
  firstLoad = true
  urlP = `assets/info/${navigator.language.slice(0, 2)}.json`;
  constructor(private http: HttpService) {

  }
  ngOnInit() {
    
    this.cargarCv();
    this.http.get_urlcv().subscribe(urlJson => {
      this.urlP = urlJson;
      this.cargarCv();
    });
    Aos.init();


  }
  cargarCv() {

    this.http.get_info(this.urlP).subscribe(resp => {
      this.portfolio = resp;
      this.download = true;
    });
  }
  modificar() {
    this.http.urlCv = `assets/info/pt.json`
    this.http.get_info(`assets/info/pt.json`).subscribe(resp => {
      console.log(resp)
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

interface skills {
  image: string;
  titulo: string
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
