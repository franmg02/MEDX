import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { Patologia } from './patologia';


@Component({
  selector: 'app-patologias',
  templateUrl: './patologias.page.html',
  styleUrls: ['./patologias.page.scss'],
})

export class PatologiasPage implements OnInit {

  constructor(private http: HTTP) {
    this.llegada = [];
   }
   patologia: Patologia[] =[
     {
       nombre: 'Diarrea',
       recomendaciones: 'Hidratarse'
     },
     {
      nombre: 'Diarrea con deshidratación',
      recomendaciones: 'Aún no hay recomendaciones para esta patología'
    },
    {
      nombre: 'Disenteria',
      recomendaciones: 'Aún no hay recomendaciones para esta patología'
    },
    {
      nombre: 'Enfermedad Grave',
      recomendaciones: 'Aún no hay recomendaciones para esta patología'
    },
    {
      nombre: 'Conjuntivitis',
      recomendaciones: 'Aún no hay recomendaciones para esta patología'
    },
    {
      nombre: 'Onfalitis',
      recomendaciones: 'Aún no hay recomendaciones para esta patología'
    },
    {
      nombre: 'Impetigo',
      recomendaciones: 'Aún no hay recomendaciones para esta patología'
    },
    {
      nombre: 'Candidiasis Oral',
      recomendaciones: 'Aún no hay recomendaciones para esta patología'
    },
    {
      nombre: 'Conjuntivitis',
      recomendaciones: 'Aún no hay recomendaciones para esta patología'
    },
    {
      nombre: 'Onfalitis grave',
      recomendaciones: 'Aún no hay recomendaciones para esta patología'
    },
    {
      nombre: 'Impetigo Grave',
      recomendaciones: 'Aún no hay recomendaciones para esta patología'
    },
   ];
   llegada: number[];
  ngOnInit(){
  }

  predecir() {
    const result = JSON.parse(localStorage.getItem('resultado')) as number[];
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );

    return this.http.post('http://25.13.173.10/webserver/script.php', result, {headers})
    .then(data => {
      console.log(data[ 'salida' ]);
      this.llegada = data[ 'salida' ];
     }, error => {
      console.log(error);
    });
}
}