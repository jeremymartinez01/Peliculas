import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
 //Importación del servicio
import { DataproviderService } from '../providers/dataprovider.service';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from '../app.component';


/*
describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent]
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('AboutComponent', () => {
  let servicio: DataproviderService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataproviderService]
    });

    servicio = TestBed.inject(DataproviderService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería obtener los datos correctamente', () => {
    const respuestaMock = { mensaje: 'Respuesta de ejemplo' };

    servicio.getResponse().subscribe(respuesta => {
      expect(respuesta).toEqual(respuestaMock);
    });

    const solicitud = httpMock.expectOne('URL_DEL_ENDPOINT');
    expect(solicitud.request.method).toBe('GET');
    solicitud.flush(respuestaMock);
  });

  it('debería manejar errores correctamente', () => {
    const mensajeError = 'Error al obtener los datos';

    servicio.getResponse().subscribe(
      () => {},
      error => {
        expect(error).toBe(mensajeError);
      }
    );

    const solicitud = httpMock.expectOne('URL_DEL_ENDPOINT');
    solicitud.error(new ErrorEvent('error', { error: mensajeError }));
  });
});*/
describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({

      //Registre el módulo de petición http
      imports: [ HttpClientModule ],

      //Registre el servicio como proveedor de datos
      providers: [ DataproviderService ]

    });

   
  });


  it('should request service user after Angular calls ngOnInit', (done: DoneFn) => {

    // Llame a ngOnInit para simular el ciclo de vida del componente
    component.ngOnInit();


    // Utilice fixture.whenStable para esperar a que se resuelva el observable del servicio
    fixture.whenStable().then(() => {
      

      // Valide que la respuesta sea mayor que 0
      expect(component.data.length).toBeGreaterThan(0)

      // Que espere hasta que llegue la respuesta
      done();

    });
  });
});