import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'burned-calories',
    providers: [DataService],
    template: `
<div class="layout">
  <div class="layout__left calculator-container">
    <nav>
      <h1>The Health Calculator</h1>
    </nav>
    <form (ngSubmit)="submit()" [formGroup]="burnedCaloriesGroup">
    <div class="form-container">
    <h3>Answer these six easy questions</h3>
     
    <p>Everyone has a different metabolic rate and this extremely accurate calculator tells you how many calories YOU are burning off in all types of exercise! </p>
    
      <h4>Step 1: Enter Your Gender</h4>
      
      <label>Gender</label>
      <select>
        <option>Male</option>
        <option>Female</option>
      </select>
      
      <h4>Step 2: Enter Your Weight</h4>
      
      <label>Weight</label>
      <select>
        <option>Kilograms</option>
        <option>Pounds</option>
        <option>Stones</option>
      </select>
      
      <input placeholder="300" type="number">
      
      <h4>Step 3: Enter Your Height</h4>

      <label>Height</label>
      <select>
        <option>Inches</option>
        <option>Centimeters:</option>
      </select>
      
      <input placeholder="300" type="number">
      
      <h4>Step 4: Enter Your Age</h4>
      
      <label>Age</label>
      <input type="number">
<div class="long-selects">
      <h4>Step 5: Select One Activity</h4>
      <label>At The Gym:</label>
      
      <select name="workActivities">
        <option>choose activity</option>
        <option *ngFor="let activity of gymActivity">{{activity}}</option>
      </select>

      <label>At Work</label>
      
      <select name="workActivities">
        <option>choose activity</option>
        <option *ngFor="let activity of workActivity">{{activity}}</option>
      </select>
      
      <label>Sports</label>	
      
      <select name="sportActivities">
        <option>choose activity</option>
        <option *ngFor="let activity of sportsActivity">{{activity}}</option>
      </select>

      <label>Around The House</label>
   
      <select name="activityHouse">
        <option>choose activity</option>
        <option *ngFor="let activity of houseActivity">{{activity}}</option>
      </select>
  </div>
  
      <h4>Step 6: Exercise Duration	Hours:    Min:</h4>
      <label>Hours</label>
      <select>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>19</option>
      </select>
      
       <label>Minutes</label>
      <select>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>1</option>
        <option>19</option>
      </select>
      </div>
     <div class="callout--more-questions"> 
Click here to answer more questions for precision!
      </div>
      
 <div style="display: none">
Step 7: Enter Research Model	
Step 8: METs Correction	

Calories Burned

 	Your RMR	
 	Activity:	
 	Research Model:	
 	METs	
 	corrected METs	
 	Duration:	
 	Calories Used By Exercise:	
  Whats the difference between burned ‘during’ and ‘by’?
 	Calories Used During Exercise:	
  Whats the difference between burned ‘during’ and ‘by’?
      </div>
      <div class="form__submit-holder">
      <button type="submit">See results</button>
      </div>

    </form>
    
  </div>
  <div class="layout__right">
    <results [output]="dataTest"></results>
    <div class="ads">
     <img src="http://w0.fast-meteo.com/locationmaps/Gravesend.12.gif">
    </div>
  </div>
</div>
    `
})
export class BurnedCaloriesComponent implements OnInit { 
    houseActivity: Object;
    sportsActivity: Object;
    workActivity: Object;
    gymActivity: Object;
    burnedCaloriesGroup: Object;
    dataTest: Object = { available: false };

    constructor(private dataService: DataService) {}

    houseActivities(): void {
        this.houseActivity = this.dataService.getHouseActivities();
    }

    sportActivities(): void {
        this.sportsActivity = this.dataService.getSportActivities();
    }

    workActivities(): void {
        this.workActivity = this.dataService.getWorkActivities();
    }

    gymActivities(): void {
        this.gymActivity = this.dataService.getGymActivities();
    }

    calc(): void {
        // ryan works here
    }

    submit(): void {

        this.dataTest = {
            available: true,
            test: "hello"
        };

        this.calc();

    }

    ngOnInit(): void {
        this.houseActivities();
        this.sportActivities();
        this.workActivities();
        this.gymActivities();

        this.burnedCaloriesGroup = new FormGroup({
            firstName: new FormControl()
        });
    }

}
