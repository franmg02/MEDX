import { Component, OnInit } from '@angular/core';
import { PreguntasPage } from '../preguntas/preguntas.page';
import { Preguntas } from '../preguntas/preguntas';
import {Router} from '@angular/router';

@Component({
  selector: 'app-answer-question',
  templateUrl: './answer-question.page.html',
  styleUrls: ['./answer-question.page.scss'],
})
export class AnswerQuestionPage implements OnInit {

  constructor(private router: Router) {
    this.i = 0;
    console.log(this.result);
  }
  i: number;

  quest = JSON.parse(localStorage.getItem('newQuestion')) as Preguntas[];
  result = JSON.parse(localStorage.getItem('resultado')) as number[];


  fillResult(pos: number, value: number){
    this.result[pos] = value;
    console.log(this.result);
    localStorage.setItem( 'resultado' , JSON.stringify(this.result));
  }

  siguentePregunta() {
    if (this.i < this.quest.length - 1) {
    this.i++;
  } else {
    console.log(this.i);
    this.router.navigate(['seleccion']);
  }
  }
  ngOnInit() {
  }
}
