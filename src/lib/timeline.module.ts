import { NgModule, ModuleWithProviders } from "@angular/core";
import { PfTimelineComponent } from './timeline.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PfTimelineComponent],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [PfTimelineComponent]
})
export class PfTimelineModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: PfTimelineModule,
            providers: []
        };
    }

}