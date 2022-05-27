import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PersonaService } from 'src/app/services/api-rest/persona.service';
import { Persona } from 'src/app/services/interface/Persona';

@Component({
  selector: 'app-banner-modal',
  templateUrl: './banner-modal.component.html',
  styleUrls: ['./banner-modal.component.css']
})
export class BannerModalComponent implements OnInit {
@Input() url!: String;
 
  persona!:Persona;
  formulario!:FormGroup

  constructor(public activeModal: NgbActiveModal, private personaService:PersonaService, private fb: FormBuilder) { 
    this.formulario = this.fb.group({
    coverurl: [''],
  })

}
cerrarModal()
{
  this.activeModal.close();
}

editarForm(){
  this.formulario.setValue
  (
     {
    coverurl: this.url 
    }
);
}
  ngOnInit(): void 
  {
    this.getbyId(1)
    this.editarForm() 
  }
  
  getbyId(id: number) 
  {
this.personaService.getById(id).subscribe (
   data => { this.persona = data;
  })
  }
  
  guardarForm()
  {
    this.persona.coverurl = this.formulario.value.coverurl
this.personaService.update(this.persona.idpersona,this.persona).subscribe 
(
data => {this.activeModal.close()}
)
}
 
}