import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { RouterModule }         from '@angular/router';
import { ReactiveFormsModule }  from '@angular/forms';

import { AppComponent }            from './app.component';
import { BurnedCaloriesComponent } from './burnedCalories.component';
import { ResultsComponent }        from './results.component';

const routes = [
  {
    // path: 'burned-calories',
    path: '',
    component: BurnedCaloriesComponent
  }
];

@NgModule({
  imports:      [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, BurnedCaloriesComponent, ResultsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }