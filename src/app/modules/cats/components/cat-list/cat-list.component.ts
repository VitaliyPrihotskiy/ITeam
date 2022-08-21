import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCats, setFilterString, setShownCats } from 'src/app/store/cat.action';
import { getFilteredCatsViewModel } from 'src/app/store/cats.selectors';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatListComponent implements OnInit {
  readonly viewModel$ = this.store.select(getFilteredCatsViewModel);
  public shownCats:number|null = 10;
  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadCats());
  }

  filter(input: string): void {
    this.store.dispatch(setFilterString({ filterString: input }));
  }

  setShownCatsLength(input:any){
    this.store.dispatch(setShownCats({ shownCats: input.value }));
  }

}
