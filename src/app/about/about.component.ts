import { Component } from '@angular/core';
 //Importación de la interfaz
import { Moviedata } from '../interfaces/moviedata';

 //Importación del servicio
import { DataproviderService } from '../providers/dataprovider.service';
// Obtenemos el botón desde el DOM
const myButton = document.getElementById("DBbutton");

// Verificamos que el botón exista antes de continuar
if (myButton) {
    // Agregamos el evento click al botón
    myButton.addEventListener("click", handleClick);

    // Definimos la función para manejar el evento click
    function handleClick() {
        console.log("¡Has hecho clic en el botón!");
        // Aquí puedes agregar cualquier otra lógica que desees ejecutar cuando se haga clic en el botón.
    }
} else {
    console.error("El botón con el id 'myButton' no fue encontrado en el DOM.");
}
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  //Atributo con el tipo de dato de la interfaz
  db_brought=false;
  public data : Moviedata[] = [];
	  

  //Inyección de dependencia del servicio
  constructor(private dataProvider: DataproviderService) { }

  //Ejecución de la petición y suscripción de la respuesta
  ngOnInit() {
    this.dataProvider.getResponse().subscribe((response) => { 
      this.bringDB();
      this.data = (response as Moviedata[]).slice(0,2); //uso slice para traer 2 datos, si quiero todos dejo sin slice
    })
  }

  bringDB(){
    this.db_brought=true;
  }
}
