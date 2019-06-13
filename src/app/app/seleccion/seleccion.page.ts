import { Component, OnInit } from '@angular/core';
import { PreguntasPage } from '../preguntas/preguntas.page';
import { Preguntas } from '../preguntas/preguntas';
import { AnswerQuestionPage } from '../answer-question/answer-question.page';


@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.page.html',
  styleUrls: ['./seleccion.page.scss'],
})
export class SeleccionPage implements OnInit {


  constructor() {

  }

public questBank: Preguntas[];
newQuest: Preguntas[] = PreguntasPage.getQuestion();
newQuestion: Preguntas[] = PreguntasPage.getQuestion();

  public createQuestions( preg: string[] ): Preguntas[] {
  const preguntaAux = this.newQuest;
  var bancoPreguntas: Preguntas[];
  bancoPreguntas = [];

  for (var i = 0; i < preguntaAux.length; i++) {
      for (var j = 0; j < preguntaAux[i].patologia.length; j++) {
        for (var k = 0; k < preg.length; k++) {
          if ( preguntaAux[i].patologia[j] === preg[k]) {
            bancoPreguntas.push(preguntaAux[i]);
                    }
        }
      }
    }
  this.questBank = bancoPreguntas;
  PreguntasPage.setNewQuest(bancoPreguntas);
  PreguntasPage.fillZeros();
  localStorage.setItem( 'newQuestion' , JSON.stringify(bancoPreguntas));
  return bancoPreguntas;
    }

  public getQuest(): Preguntas[] {
    return this.questBank;
  }

  ngOnInit() {
  }

  buscar( event ) {
        console.log(event);
  }
}

