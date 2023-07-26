import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { DataproviderService } from './dataprovider.service';

import {Moviedata} from '../interfaces/moviedata';
/*
describe('DataproviderService', () => {
  let service: DataproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});*/
describe('DataproviderService', () => {

  //Cree un objeto del tipo del servicio
  let service: DataproviderService;
  
  beforeEach(() => {
    TestBed.configureTestingModule({

      //Registre el módulo de petición http
      imports: [ HttpClientModule ],

      //Registre el servicio como proveedor de datos
      providers: [ DataproviderService ]
    });


    //Instancie el servicio
    service = TestBed.inject(DataproviderService);
  });
  // La función done se encarga de esperar por completar el requerimiento
  it('GetResponse should return value from observable', (done: DoneFn) => {
    //Invoque el método con la petición asincrónica
    service.getResponse().subscribe(data => {
      
      // Valide que la respuesta sea mayor que 0
      expect((data as Moviedata[]).length).toBeGreaterThan(0)
      
      // Que espere hasta que llegue la respuesta 
      done();
    });
  });


});
