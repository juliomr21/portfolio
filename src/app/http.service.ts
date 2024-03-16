import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  urlCv = `assets/info/en.json`;
  urlCv$:Subject<string> = new Subject<string>();
  constructor(private http:HttpClient) { 
    
    // this.initial();
    // this.set_urlcv(`assets/info/en.json`)
    this.urlCv$.next(`assets/info/en.json`)
  }
  initial(){
    this.urlCv$.next(`assets/info/en.json`)
  }
  get_info(urlInfo:string){
    console.log(this.urlCv$.asObservable())
     return this.http.get<Portfolio>(urlInfo);
  }
  set_urlcv(urlAux:string){
    this.urlCv =  urlAux;
    this.urlCv$.next(urlAux);
  }
  get_urlcv()
  {
    this.urlCv$.next(this.urlCv)
   
    return this.urlCv$.asObservable();
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