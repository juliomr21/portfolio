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
linkPt = ['Habilidades','Projetos','Experiência','Certificações','Formação']
linkEs = ['Habilidades','Proyectos','Experiencia','Certificaciones','Formación']
linkEn = ['Skills','Projects','Experience','Certifications','Education']
linkShow:string[] = [];
ngOnInit(){
  if(navigator.language.slice(0,2) == 'es')
    this.linkShow = this.linkEs;
    if(navigator.language.slice(0,2) == 'en')
    this.linkShow = this.linkEn;
    if(navigator.language.slice(0,2) == 'pt')
    this.linkShow = this.linkPt;
}
closeMenu(){
  this.menu = false
}

}
