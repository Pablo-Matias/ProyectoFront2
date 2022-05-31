import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { EducacionService } from 'src/app/services/api-rest/educacion.service';
import { LoginService } from 'src/app/services/api-rest/login.service';
import { Educacion } from 'src/app/services/interface/Educacion';
import { EducacionModalComponent } from '../modales/educacion-modal/educacion-modal.component';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit { 

  login:any;
  //inyecta el servicio de modal
  constructor(private modalService: NgbModal, private educacionService:EducacionService, private loginService:LoginService) {}
  
  educacion!: Educacion [] ;
  eduNueva:boolean = true;
  
  getById(id: number) {
    this.educacionService.getById(id).subscribe (
			data => { this.educacion = data; }
		);
  }

  getAll() {
    this.educacionService.getAll().subscribe (
			data => { 
        this.educacion = data;
      }
		);
    
  }
  delete(id: number) {
    this.educacionService.delete(id).subscribe (
			data => { this.educacion = data; }
		);
  }

  save(educacion:any) {
    this.educacionService.save(educacion).subscribe (
			data => { this.educacion = data; }
		);
  }

  update(id: number, educacion: any) {
    this.educacionService.update(id,educacion).subscribe (
			data => { this.educacion = data; }
		);
  }


  ngOnInit(): void {
     
    this.getAll();
    this.loginService.LogState().subscribe((login) => (this.login = login));
  }
 
  abrirModal(id:any){
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });        
    modalRef.componentInstance.id = id;    

    modalRef.result.then((data) => {
      this.ngOnInit();
    })
      }

  crearEducacionModal(){
    const modalRef = this.modalService.open(EducacionModalComponent,  { centered: true });        
    modalRef.componentInstance.eduNueva = this.eduNueva;  

    modalRef.result.then((data) => {
      this.ngOnInit();
    })
    
  }

  borrarEducacion(id:any){
    this.educacionService.delete(id).subscribe (
      data => { this.ngOnInit() }
    );
  }
 
}