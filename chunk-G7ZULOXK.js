import{a as S}from"./chunk-Q3AP34F6.js";import{$a as _,Ja as m,Oa as t,Pa as n,Q as h,Qa as g,Ra as s,Xa as i,Ya as o,Za as f,_a as k,ab as v,sa as a,ta as u,wb as x}from"./chunk-FHSTQVUJ.js";var C=(()=>{let r=class r{constructor(l){this.http=l,this.menu=!1,this.menuFlag=!1,this.linkPt=["Habilidades","Projetos","Experi\xEAncia","Certifica\xE7\xF5es","Forma\xE7\xE3o"],this.linkEs=["Habilidades","Proyectos","Experiencia","Certificaciones","Formaci\xF3n"],this.linkEn=["Skills","Projects","Experience","Certifications","Education"],this.linkShow=[],this.flag="",this.lenguage="",this.styleDrop={display:"none"},this.stylemenu={display:"none"},this.menuDrop=!1}ngOnInit(){this.lenguage=navigator.language.slice(0,2),this.lenguage=="pt"&&(this.linkShow=this.linkPt,this.flag="assets/images/flag/1.png"),this.lenguage=="es"&&(this.linkShow=this.linkEs,this.flag="assets/images/flag/2.png"),this.lenguage=="en"&&(this.linkShow=this.linkEn,this.flag="assets/images/flag/3.png")}closeMenu(){this.menuDrop&&(this.styleDrop={display:"none"},this.menuDrop=!1),this.menu?(this.stylemenu={display:"none"},this.menu=!1):(this.stylemenu={display:"block"},this.menu=!0)}closeMenuFlag(){this.menuFlag=!1}showMenu(){this.menu&&(this.stylemenu={display:"none"},this.menu=!1),this.menuDrop?(this.styleDrop={display:"none"},this.menuDrop=!1):(this.styleDrop={display:"block"},this.menuDrop=!0)}modificar(l){this.styleDrop={display:"none"},this.menuDrop=!1,this.lenguage=l,l=="pt"&&(this.linkShow=this.linkPt,this.flag="assets/images/flag/1.png"),l=="es"&&(this.linkShow=this.linkEs,this.flag="assets/images/flag/2.png"),l=="en"&&(this.linkShow=this.linkEn,this.flag="assets/images/flag/3.png"),this.http.set_urlcv(`assets/info/${l}.json`)}};r.\u0275fac=function(d){return new(d||r)(u(S))},r.\u0275cmp=h({type:r,selectors:[["app-nav"]],standalone:!0,features:[k],decls:41,vars:17,consts:[[1,"container"],[1,"nav-bar"],[1,"d-none","d-md-block"],[1,"aling-link"],["href","#skill",1,"nav-link"],["href","#projetos",1,"nav-link"],["href","#exp",1,"nav-link"],["href","#cert",1,"nav-link"],["href","#formacion",1,"nav-link"],[1,"dropdown"],[1,"dropbtn",3,"click"],[1,"fa-solid","fa-language"],[1,"dropdown-content"],[3,"click"],[1,"d-sm-none"],["aria-hidden","true",1,"fa","fa-bars"],[1,"dropdown-content","posMenu",3,"click"]],template:function(d,e){d&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),i(5),n(),t(6,"a",5),i(7),n(),t(8,"a",6),i(9),n(),t(10,"a",7),i(11),n(),t(12,"a",8),i(13),n()()(),t(14,"div",9)(15,"button",10),s("click",function(){return e.showMenu()}),g(16,"i",11),i(17),_(18,"uppercase"),n(),t(19,"div",12)(20,"a",13),s("click",function(){return e.modificar("pt")}),i(21," Portugu\xEAs-PT "),n(),t(22,"a",13),s("click",function(){return e.modificar("es")}),i(23," Espa\xF1ol-ES "),n(),t(24,"a",13),s("click",function(){return e.modificar("en")}),i(25," English-EN "),n()()(),t(26,"div",14)(27,"div",9)(28,"button",10),s("click",function(){return e.closeMenu()}),g(29,"i",15),n(),t(30,"div",16),s("click",function(){return e.closeMenu()}),t(31,"a",4),i(32),n(),t(33,"a",5),i(34),n(),t(35,"a",6),i(36),n(),t(37,"a",7),i(38),n(),t(39,"a",8),i(40),n()()()()()()),d&2&&(a(5),o(e.linkShow[0]),a(2),o(e.linkShow[1]),a(2),o(e.linkShow[2]),a(2),o(e.linkShow[3]),a(2),o(e.linkShow[4]),a(4),f("-",v(18,15,e.lenguage),""),a(2),m(e.styleDrop),a(11),m(e.stylemenu),a(2),o(e.linkShow[0]),a(2),o(e.linkShow[1]),a(2),o(e.linkShow[2]),a(2),o(e.linkShow[3]),a(2),o(e.linkShow[4]))},dependencies:[x],styles:[".nav-bar[_ngcontent-%COMP%]{padding:2rem;display:flex;justify-content:end}.aling-link[_ngcontent-%COMP%]{display:flex;gap:40px;font-size:medium}.aling-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{border-bottom:solid 2px darkslateblue}.flag-style[_ngcontent-%COMP%]{gap:10px;flex-direction:column;background:#313237;width:fit-content;padding:5px;position:absolute;right:10%;top:47px}.flag-style[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:28px}.img-flag[_ngcontent-%COMP%]{margin-left:10px;width:32px;cursor:pointer}.dropbtn[_ngcontent-%COMP%]{background-color:transparent;color:#fff;font-size:16px;border:none;cursor:pointer;margin-left:10px}.dropdown[_ngcontent-%COMP%]{position:relative;display:inline-block}.dropdown-content[_ngcontent-%COMP%]{display:none;position:absolute;background-color:#313237;width:max-content;box-shadow:0 8px 16px #0003;z-index:1}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:1rem;cursor:pointer;text-decoration:none;display:block}.dropdown-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#483d8b}.posMenu[_ngcontent-%COMP%]{right:10%}@media (max-width:450px){.nav-bar[_ngcontent-%COMP%]{padding:1rem;padding-top:5px;padding-bottom:0}.aling-link[_ngcontent-%COMP%]{gap:10px;flex-direction:column;background:#313237;width:fit-content;padding:1rem;position:absolute;right:10%;top:47px}.flag-style[_ngcontent-%COMP%]{right:21%;top:40px}.img-flag[_ngcontent-%COMP%]{height:32px;margin-top:18px}}"]});let c=r;return c})();export{C as NavComponent};