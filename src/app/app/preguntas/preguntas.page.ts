import { Component, OnInit } from '@angular/core';
import { Preguntas } from './preguntas';
import { SeleccionPage } from '../seleccion/seleccion.page';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.page.html',
  styleUrls: ['./preguntas.page.scss'],
})
export class PreguntasPage implements OnInit {
  constructor() {

  }
  static newQuest: Preguntas[];

  static question: Preguntas[] = [
    {
      pregunta: '¿El paciente tiene diarrea?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['diarrea'],
      pos: 0
    },
    {
      pregunta: '¿El paciente se encuentra letargico?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['diarrea con deshidratación'],
      pos: 1
    },
    {
      pregunta: '¿El paciente se encuentra inconsciente?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['diarrea con deshidratación'],
      pos: 2
    },
    {
      pregunta: '¿El paciente se encuentra intranquilo?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['diarrea con deshidratación'],
      pos: 3
    },
    {
      pregunta: '¿El paciente se encuentra irritable?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['diarrea con deshidratación'],
      pos: 4
    },
    {
      pregunta: '¿El paciente tiene los ojos hundidos?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['diarrea con deshidratación'],
      pos: 5
    },
    {
      pregunta: '¿El paciente tiene pliegue cutaneo?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['diarrea con deshidratación'],
      pos: 6
    },
    {
      pregunta: '¿El paciente tiene diarrea con sangre?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['disenteria'],
      pos: 7
    },
    {
      pregunta: '¿El paciente tiene diarrea con sangre?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['disenteria'],
      pos: 8
    }
  ];

  static result: number[] = [];
  public static fillZeros() {

    for ( var i = 0; i < this.question.length; i++) {
      if (this.result.length !== this.question.length) {
        this.result.push(0);
        localStorage.setItem( 'resultado' , JSON.stringify(this.result));
      } else {
        console.log('ya está lleno');
      }
    }
    console.log(this.result);
  }


  public static setNewQuest(quest: Preguntas[]) {
    this.newQuest = quest;
    console.log(this.newQuest);
  }
  public static getNewQuest(): Preguntas[] {
    return this.newQuest;
  }

  public static getQuestion(): Preguntas[] {
    return this.question;
  }
  ngOnInit() {
  }
}
