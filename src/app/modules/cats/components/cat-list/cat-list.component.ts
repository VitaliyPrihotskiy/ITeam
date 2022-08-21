import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadCats,
  setFilterString,
  setShownCats,
} from 'src/app/store/cats.action';
import { getFilteredCatsViewModel } from 'src/app/store/cats.selectors';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatListComponent implements OnInit {
  readonly viewModel$ = this.store.select(getFilteredCatsViewModel);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadCats());
  }

  filter(input: string): void {
    this.store.dispatch(setFilterString({ filterString: input }));
  }

  onPageChange(event: PageEvent): void {
    this.store.dispatch(setShownCats({ shownCats: event }));
  }

}
