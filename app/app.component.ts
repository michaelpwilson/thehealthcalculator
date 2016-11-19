import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <div class="layout">
        <div class="layout__left other-calculators">
            <nav class="nav--left">
                <a href="#">
                    <i class="fa fa-fire" aria-hidden="true"></i>
                </a>
                <a href="#">
                    <i class="fa fa-fast-forward" aria-hidden="true"></i>
                </a>
                <a href="#">
                    <i class="fa fa-paint-brush" aria-hidden="true"></i>
                </a>
                <a href="#">
                    <i class="fa fa-level-down" aria-hidden="true"></i>
                </a>
                <a href="#">
                    <i class="fa fa-eye" aria-hidden="true"></i> 
                </a>
            </nav>
        </div>
        <div class="layout__right">
            <router-outlet></router-outlet>
        </div>
    </div>
    `
})
export class AppComponent { }
