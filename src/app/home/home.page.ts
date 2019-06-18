import { Component } from '@angular/core';
import { PreguntasPage } from '../app/preguntas/preguntas.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    console.log(PreguntasPage.testFillZeros());
    console.log(PreguntasPage.testGetNewQuest());
    console.log(PreguntasPage.testGetQuestion());
    console.log(PreguntasPage.testSetNewQuest());
  }

}
