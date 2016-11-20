import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'results',
    template: `
        <div class="content" *ngIf="output">
          <div [hidden]="output.available">
            <h2>Your results will be populated here once you complete the form</h2>
          </div>
          <div [hidden]="!output.available">
            {{output.test}}
          </div>
        </div>
    `
})
export class ResultsComponent {

     @Input('output') output: Object;

}
