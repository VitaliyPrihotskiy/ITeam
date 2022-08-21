import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Cat } from 'src/app/models/cats.model';


@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatCardComponent {
  @Input() cat: Cat | null = null;
  @Input() filterString = '';
}
