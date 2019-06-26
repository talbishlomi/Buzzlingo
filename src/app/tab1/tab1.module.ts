import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import {DiscoverButtonComponent} from '../components/discover-button/discover-button.component';
import {ScrollVanishDirective} from '../directives/scroll-vanish.directive';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: Tab1Page}]),

    ],
    exports: [
        DiscoverButtonComponent
    ],
    declarations: [Tab1Page, DiscoverButtonComponent, ScrollVanishDirective]
})
export class Tab1PageModule {}
