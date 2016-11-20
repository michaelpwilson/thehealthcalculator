import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { BurnedCaloriesComponent } from './burnedCalories.component';
import { ResultsComponent } from './results.component';

@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot([
      {
        // path: 'burned-calories',
        path: '',
        component: BurnedCaloriesComponent
      }
    ])
  ],
  declarations: [ AppComponent, BurnedCaloriesComponent, ResultsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
