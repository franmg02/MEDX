import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Patologia } from './patologia';
import { AppComponent } from 'src/app/app.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-patologias',
  templateUrl: './patologias.page.html',
  styleUrls: ['./patologias.page.scss'],
})

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class PatologiasPage implements OnInit {

  constructor(private http: HttpClient) {
    this.llegada = '';
   }
   patologia: Patologia[] = [
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

   llegada: string;

  ngOnInit() {
  }

  convIntToString(): string {
    var cadena: string;
    const result = JSON.parse(localStorage.getItem('resultado')) as number[];
    console.log(result);
    cadena = '[ ';
// tslint:disable-next-line: prefer-for-of
    for ( var i = 0; i < result.length; i++) {
      cadena = cadena.concat(result[i].toString());
      if (i < result.length - 1){
        cadena = cadena.concat(',');
      }
    }
    cadena = cadena + ' ]';
    return cadena;
  }

  predecir() {
    let arreglo = this.convIntToString();
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );

    return this.http.post('http://25.13.173.10/webserver/script.php', arreglo, {responseType: 'text'})
    .subscribe(data => {
      this.llegada = data;
     }, error => {
      console.log(error);
    });

}
}
