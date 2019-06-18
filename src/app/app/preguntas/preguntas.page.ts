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
      pregunta: '¿El paciente puede tomar o beber liquidos?',
      respuestas: [{number: 0, string: 'Si'}, {number: 1, string: 'No'}],
      patologia: ['Enfermedad Grave'],
      pos: 8
    },
    {
      pregunta: '¿El paciente vomita lo que come?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Enfermedad Grave'],
      pos: 9
    },
    {
      pregunta: '¿El paciente ha convulsionado?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Enfermedad Grave'],
      pos: 10
    },
    {
      pregunta: '¿El paciente se ve mal?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Enfermedad Grave'],
      pos: 11
    },
    {
      pregunta: '¿El paciente presenta fontanela abmbada?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Enfermedad Grave'],
      pos: 12
    },
    {
      pregunta: '¿El paciente se queja?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Enfermedad Grave'],
      pos: 13
    },
    {
      pregunta: '¿El paciente tiene estidor o sibilancias?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Enfermedad Grave'],
      pos: 14
    },
    {
      pregunta: '¿El paciente tiene distensión abdominal?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Enfermedad Grave'],
      pos: 15
    },
    {
      pregunta: '¿El paciente ha orinado menos de 4 veces en las ultimas 24 horas?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Enfermedad Grave'],
      pos: 16
    },
    {
      pregunta: '¿El paciente tiene VIH?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Enfermedad Grave'],
      pos: 17
    },
    {
      pregunta: '¿El paciente tiene alguna secresión conjuntivial purulenta?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Conjuntivitis'],
      pos: 18
    },
    {
      pregunta: '¿El paciente tiene secresión purulenta en ombligo?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Onfalitis'],
      pos: 19
    },
    {
      pregunta: '¿El paciente presenta pustulas en la piel?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Impetigo'],
      pos: 20
    },
    {
      pregunta: '¿El paciente tiene placa blanquecina en la boca?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Candidiasis oral'],
      pos: 21
    },
    {
      pregunta: '¿El paciente tiene secresión conjuntivial con edema?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Conjuntivitis grave'],
      pos: 22
    },
    {
      pregunta: '¿El paciente tiene signos de enfermedad grave?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Conjuntivitis grave'],
      pos: 23
    },
    {
      pregunta: '¿El paciente tiene secresión + eritema en ombligo?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Onfalitis Grave'],
      pos: 24
    },
    {
      pregunta: '¿El paciente tiene ddemasiadas pustulas en la piel?',
      respuestas: [{number: 1, string: 'Si'}, {number: 0, string: 'No'}],
      patologia: ['Impetigo Grave'],
      pos: 25
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
