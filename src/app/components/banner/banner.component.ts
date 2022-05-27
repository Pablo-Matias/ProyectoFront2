import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BannerModalComponent } from '../modales/banner-modal/banner-modal.component';
import { Persona } from 'src/app/services/interface/Persona';
import { PersonaService } from 'src/app/services/api-rest/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() url!: String;
  login!: boolean;
  persona!:Persona;
  constructor (
    private loginService: LoginService,
    private modalService: NgbModal,
    private personaService: PersonaService
  ) 
   { }
 
  ngOnInit(): void {
    this.loginService.LogState().subscribe((login) => (this.login = login)); 
    this.actualizarBanner(1);
  }

abrirModal( )
{ 
  console.log()
  const modalRef = this.modalService.open( BannerModalComponent , { centered: true }   );
  modalRef.componentInstance.url = this.url;  
  modalRef.result.then((data) => {
    console.log("pasa por aca?")
    this.ngOnInit();

  })
}
actualizarBanner (id:number) {	
  this.personaService.getById(id).subscribe
  (
    data => { this.persona = data; }
 )
  }
}