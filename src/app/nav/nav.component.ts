import { Component } from '@angular/core';
import { HttpService } from '../http.service';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  menu = false;
  menuFlag = false
  linkPt = ['Habilidades', 'Projetos', 'Experiência', 'Certificações', 'Formação']
  linkEs = ['Habilidades', 'Proyectos', 'Experiencia', 'Certificaciones', 'Formación']
  linkEn = ['Skills', 'Projects', 'Experience', 'Certifications', 'Education']
  linkShow: string[] = [];
  flag = ""
  lenguage = ""
  styleDrop = {"display": "none"}
  stylemenu = {"display": "none"}
  menuDrop = false;
  constructor(private http: HttpService) { }
  ngOnInit() {
    this.lenguage = navigator.language.slice(0, 2);
    if (this.lenguage == 'pt') {
      this.linkShow = this.linkPt;
      this.flag = "assets/images/flag/1.png"
    }
    if (this.lenguage == 'es') {
      this.linkShow = this.linkEs;
      this.flag = "assets/images/flag/2.png"
    }
    if (this.lenguage == 'en') {
      this.linkShow = this.linkEn;
      this.flag = "assets/images/flag/3.png"
    }

  }
  closeMenu() {
 
    if(this.menuDrop)
    {
      this.styleDrop = {"display": "none"}
      this.menuDrop = false;

    }
    if(this.menu)
    {
      this.stylemenu = {"display": "none"}
      this.menu = false;

    }else{
      this.stylemenu = {"display": "block"}
      this.menu = true;
    }
  }
  closeMenuFlag() {
    this.menuFlag = false
  }
  showMenu(){
   if(this.menu)
   {
    this.stylemenu = {"display": "none"}
    this.menu = false;

  }
    if(this.menuDrop)
    {
      this.styleDrop = {"display": "none"}
      this.menuDrop = false;

    }else{
      this.styleDrop = {"display": "block"}
      this.menuDrop = true;
    }
     
  }
  modificar(cv: string) {
    this.styleDrop = {"display": "none"}
    this.menuDrop = false;
    this.lenguage = cv;
    if (cv == 'pt') {
      this.linkShow = this.linkPt;
      this.flag = "assets/images/flag/1.png"
    }
    if (cv == 'es') {
      this.linkShow = this.linkEs;
      this.flag = "assets/images/flag/2.png"
    }

    if (cv == 'en') {
      this.linkShow = this.linkEn;
      this.flag = "assets/images/flag/3.png"
    }



    this.http.set_urlcv(`assets/info/${cv}.json`)
  }

}
