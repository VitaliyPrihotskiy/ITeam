import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsRoutingModule } from './cats-routing.module';
import { CatCardComponent, CatListComponent } from './components';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HighlighterPipe } from './pipes/highlighter.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  declarations: [CatListComponent, CatCardComponent, HighlighterPipe],
  imports: [
    CommonModule,
    CatsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatSliderModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
})
export class CatsModule {}
