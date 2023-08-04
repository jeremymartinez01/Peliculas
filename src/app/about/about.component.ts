import { Component } from '@angular/core';
 //Importación de la interfaz
import { Moviedata } from '../interfaces/moviedata';

 //Importación del servicio
import { DataproviderService } from '../providers/dataprovider.service';
// Obtenemos el botón desde el DOM

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  //Atributo con el tipo de dato de la interfaz
  cantidad:number =8;
  db_brought=false;
  public data : Moviedata[] = [];
  public data2 : Moviedata[] = [];

	  

  //Inyección de dependencia del servicio
  constructor(private dataProvider: DataproviderService) { }

  //Ejecución de la petición y suscripción de la respuesta
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.bringDB();
      this.data2 = (response as Moviedata[]);
      this.data = (response as Moviedata[]).slice(0,8); //uso slice para traer 8 pelis, si quiero todos dejo sin slice
    })
  }
  mostrarMasPeliculas(): void {
   
      this.data =  this.data2.slice(this.cantidad,this.cantidad+8); //uso slice para traer 2 datos, si quiero todos dejo sin slice
      this.cantidad=this.cantidad+8;
    
  }
  mostrarMenosPeliculas(): void{

    if(this.cantidad==8){
      this.data=this.data2.slice(0,this.cantidad)
    }else{
      this.data=this.data2.slice(this.cantidad-16,this.cantidad-8);
      this.cantidad=this.cantidad-8;
    }
    
  }
  bringDB(){
    this.db_brought=true;
  }
}
