import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit{
  nombreP: string;
  descripcionP: string;
  year: string
  url: string


  constructor(private proyectoS: ProyectoService, private router: Router){}

  ngOnInit(): void {
    
  }
  onCreate(): void{
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.year, this.url);
    this.proyectoS.save(proyecto).subscribe(
        data =>{
            alert("Proyecto añadido correctamente");
            this.router.navigate(['']);
        }, err =>{
            alert("fallo");
            this.router.navigate(['']);
        }
    )
}

}
