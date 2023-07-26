import { Injectable } from '@angular/core';
 //Importación del HttpClient
 import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataproviderService {
  private URL: string = 'https://netflixpeliculas-3e6ec-default-rtdb.firebaseio.com/collection.json';
  constructor(private http:HttpClient) { 
    
  }
  //Metodo con la peticion HTTP
  getResponse(){
    return this.http.get(this.URL);
  }
}
