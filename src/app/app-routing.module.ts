import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'preguntas', loadChildren: './app/preguntas/preguntas.module#PreguntasPageModule' },
  { path: 'seleccion', loadChildren: './app/seleccion/seleccion.module#SeleccionPageModule' },
  { path: 'answer-question', loadChildren: './app/answer-question/answer-question.module#AnswerQuestionPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
