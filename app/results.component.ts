import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'results',
    template: `
        <div class="content" *ngIf="output">
          <div [hidden]="output.available">
            <h2>Your results will be populated here once you complete the form</h2>
          </div>
          <div [hidden]="!output.available">
            <table cellspacing="0">
                <thead>
                    <tr>
                        <th style="border-right: 1px solid #cac2c2;">Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border-right: 1px solid #dedede;">Your RMR</td>
                        <td class="table-row-value">{{output.rmr}}</td>
                    </tr>
                    <tr>
                        <td style="border-right: 1px solid #dedede;">Research Model</td>
                        <td class="table-row-value"></td>
                    </tr>
                    <tr>
                        <td style="border-right: 1px solid #dedede;">METS</td>
                        <td class="table-row-value"></td>
                    </tr>
                    <tr>
                        <td style="border-right: 1px solid #dedede;">Corrected METS</td>
                        <td class="table-row-value"></td>
                    </tr>
                    <tr>
                        <td style="border-right: 1px solid #dedede;">Duration</td>
                        <td class="table-row-value"></td>
                    </tr>
                    <tr>
                        <td style="border-right: 1px solid #dedede;">Calories Used For Exercise</td>
                        <td class="table-row-value"></td>
                    </tr>
                    <tr>
                        <td style="border-right: 1px solid #dedede;">Calories Used During Exercise</td>
                        <td class="table-row-value"></td>
                    </tr>
                </tbody>
            </table>
          </div>
        </div>
    `
})
export class ResultsComponent {

     @Input('output') output: Object;

}
