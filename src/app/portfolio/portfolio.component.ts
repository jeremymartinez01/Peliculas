import { Component } from '@angular/core';
import { Moviedata } from '../interfaces/moviedata';
import { DataproviderService } from '../providers/dataprovider.service';
import { CanvasJS } from '@canvasjs/angular-stockcharts';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  public data : Moviedata[] = [];

  constructor(private dataProvider: DataproviderService) { }

  ngOnInit(): void {
    this.dataProvider.getResponse().subscribe((response)=>{
      this.data=(response as Moviedata[]);
      this.crearGrafica1();
      this.crearGrafica2();
    });
  }
  crearGrafica1(){
    const dataPoints =this.data.slice(0,10).map((movie) => ({
      label: movie.Series_Title,
      y: parseInt(movie.Released_Year, 10),
    }));
    const chart = new CanvasJS.Chart('chartContainer', {
      animationEnabled: true,
      title: {
        text: 'Películas por Año',
      },
      data: [
        {
          type: 'column',
          dataPoints: dataPoints,
        },
      ],
    });
    
    chart.render();
  }

  crearGrafica2(){
    if(!this.data) return;
    const dataPoints =this.data.slice(0,10).map((movie) => ({
      label: movie.Series_Title,
      y: parseInt(movie.IMDB_Rating, 10),
    }));
    const chart = new CanvasJS.Chart('chart_Container', {
      animationEnabled: true,
      title: {
        text: 'Rating de Peliculas',
      },
      data: [
        {
          type: 'bar',
          dataPoints: dataPoints,
        },
      ],
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Floating Bar Chart'
          }
        }
      }
    });
  
    chart.render();
  }  
}
