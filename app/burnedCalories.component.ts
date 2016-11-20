import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Calc } from './calc';

@Component({
    selector: 'burned-calories',
    providers: [DataService],
    template: `
<div class="layout">
  <div class="layout__left calculator-container">
    <nav>
      <h1>The Health Calculator</h1>
    </nav>
    <form (ngSubmit)="submit()" #burnedCaloriesForm="ngForm">
    <div class="form-container">
    <h3>Answer these six easy questions</h3>
     
    <p>Everyone has a different metabolic rate and this extremely accurate calculator tells you how many calories YOU are burning off in all types of exercise! </p>
    
      <h4>Step 1: Enter Your Gender</h4>
      
      <label for="gender">Gender</label>
      <select [ngModel]="calcData.gender" name="gender">
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      
      <h4>Step 2: Enter Your Weight</h4>
      
      <label for="weightType">Weight</label>
      <select [ngModel]="calcData.weightType" name="weightType">
        <option value="kg">Kilograms</option>
        <option value="pounds">Pounds</option>
        <option value="stones">Stones</option>
      </select>
      
      <input placeholder="300" type="number" [ngModel]="calcData.weight" name="weight">
      
      <h4>Step 3: Enter Your Height</h4>

      <label for="heightType">Height</label>
      <select [ngModel]="calcData.heightType" name="heightType">
        <option value="inches">Inches</option>
        <option value="centimeters">Centimeters</option>
      </select>
      
      <input placeholder="300" type="number" [ngModel]="calcData.height" name="height">
      
      <h4>Step 4: Enter Your Age</h4>
      
      <label for="age">Age</label>
      <input type="number" [ngModel]="calcData.age" name="age">

      <div class="long-selects">
        <h4>Step 5: Select One Activity</h4>

        <label for="gymActivity">At The Gym:</label>
        <select [ngModel]="calcData.gymActivity" name="gymActivity">
            <option>choose activity</option>
            <option *ngFor="let activity of gymActivity" [value]="activity">{{activity}}</option>
        </select>

        <label for="workActivity">At Work</label>
        <select [ngModel]="calcData.workActivity" name="workActivity">
            <option>choose activity</option>
            <option *ngFor="let activity of workActivity" [value]="activity">{{activity}}</option>
        </select>
        
        <label for="sportsActivity">Sports</label>	
        <select [ngModel]="calcData.sportsActivity" name="sportsActivity">
            <option>choose activity</option>
            <option *ngFor="let activity of sportsActivity" [value]="activity">{{activity}}</option>
        </select>

        <label for="houseActivity">Around The House</label>
        <select [ngModel]="calcData.houseActivity" name="houseActivity">
            <option>choose activity</option>
            <option *ngFor="let activity of houseActivity" [value]="activity">{{activity}}</option>
        </select>
      </div>
  
      <h4>Step 6: Exercise Duration	Hours:    Min:</h4>

      <label for="exerciseDurationHours">Hours</label>
      <select [ngModel]="calcData.exerciseDurationHours" name="exerciseDurationHours">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="19">19</option>
      </select>
      
      <label for="exerciseDurationMinutes">Minutes</label>
      <select [ngModel]="calcData.exerciseDurationMinutes" name="exerciseDurationMinutes">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="19">19</option>
      </select>

      </div>
     <div class="callout--more-questions">Click here to answer more questions for precision!</div>
      
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
    <results [output]="calcData"></results>
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
    public calcData: Calc;

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
        this.calcData.available = true;
    }

    submit(): void {
        this.calc();
    }

    ngOnInit(): void {
        this.houseActivities();
        this.sportActivities();
        this.workActivities();
        this.gymActivities();

        this.calcData = {
            available: false,
            gender: "Male",
            weightType: "kilograms",
            weight: null,
            heightType: "",
            height: null,
            age: null,
            gymActivity: null,
            workActivity: null,
            houseActivity: null,
            exerciseDurationHours: null,
            exerciseDurationMinutes: null
        };
    }

}
