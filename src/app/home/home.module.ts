import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FyloStoreComponent } from './two-column-box/fylo-store/fylo-store.component';
import { StayProductiveBoxComponent } from './two-column-box/stay-productive-box/stay-productive-box.component';
import { TwoColumnBoxComponent } from './two-column-box/two-column-box.component';

@NgModule({
    declarations: [
        HomeComponent,
        TwoColumnBoxComponent,
        StayProductiveBoxComponent,
        FyloStoreComponent
    ],
    imports: [CommonModule, HomeRoutingModule],
    providers: [],
  })
  export class HomeModule {}



  