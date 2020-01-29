import { Component, ViewChild, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

@Component({
    selector: 'pf-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

    handleEvent(event: any) {
        console.info('event %o', event);
    }

}
