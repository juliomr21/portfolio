import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
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
  constructor(private http: HttpService) { }
  ngOnInit() {

    if (navigator.language.slice(0, 2) == 'pt') {
      this.linkShow = this.linkPt;
      this.flag = "assets/images/flag/1.png"
    }
    if (navigator.language.slice(0, 2) == 'es') {
      this.linkShow = this.linkEs;
      this.flag = "assets/images/flag/2.png"
    }
    if (navigator.language.slice(0, 2) == 'en') {
      this.linkShow = this.linkEn;
      this.flag = "assets/images/flag/3.png"
    }

  }
  closeMenu() {
    this.menu = false
  }
  closeMenuFlag() {
    this.menuFlag = false
  }
 
  modificar(cv: string) {

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
