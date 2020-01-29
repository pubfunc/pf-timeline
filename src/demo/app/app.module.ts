import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PfTimelineModule } from 'pf-timeline';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ControlDebugComponent } from './debug/control-debug.component';
import { environment } from '../environments/environment';

@NgModule({
    declarations: [
        AppComponent,
        ControlDebugComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        PfTimelineModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
