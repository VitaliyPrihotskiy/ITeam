import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatsRoutingModule } from './cats-routing.module';
import { CatCardComponent, CatListComponent } from './components';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { HighlighterPipe } from './pipes/highlighter.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [CatListComponent, CatCardComponent, HighlighterPipe],
  imports: [
    CommonModule,
    CatsRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatPaginatorModule,
    MatButtonModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ],
})
export class CatsModule {}
