import { Component, Input } from '@angular/core';

@Component({
    selector: 'results',
    template: `
        <div class="content">
          <div [hidden]="output.available">
            <h2>Your results will be populated here once you complete the form</h2>
          </div>
          <div *ngIf="output.available">
            {{output.test}}
          </div>
        </div>
    `
})
export class ResultsComponent {

     @Input('output') output: Object;

}
