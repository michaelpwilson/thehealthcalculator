import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { AppComponent }  from './app.component';
import { BurnedCaloriesComponent } from './burnedCalories.component';

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
  declarations: [ AppComponent, BurnedCaloriesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
