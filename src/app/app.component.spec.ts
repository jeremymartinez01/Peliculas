import { ComponentFixture,TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'peliculas'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('peliculas');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('peliculas app is running!');
  });

     //Valide la existencia de un elemento <nav> en la plantilla html del elemento

     it('nav element', ()=> {
      const headerElement: HTMLElement = fixture.nativeElement;
      const nav = headerElement.querySelector('nav')!;
      expect(nav).toBeTruthy();
    })

  //Valide la NO existencia de un elemento <p> en la plantilla html del elemento

  it('No p element', ()=> {
      const headerElement: HTMLElement = fixture.nativeElement;
      const nav = headerElement.querySelector('app-contact')!;
      expect(nav).toBeFalsy();
  })
});
