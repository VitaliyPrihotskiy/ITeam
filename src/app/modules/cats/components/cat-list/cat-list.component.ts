import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadCats,
  setFilterString,
  setPaginationData,
} from 'src/app/store/cats.action';
import { getFilteredCatsViewModel } from 'src/app/store/cats.selectors';
import { PageEvent } from '@angular/material/paginator';
import { DEFAULT_PAGE_SIZE } from '../../../../constants/cats.constants';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatListComponent implements OnInit {
  readonly viewModel$ = this.store.select(getFilteredCatsViewModel);
  readonly defaultPageSize = DEFAULT_PAGE_SIZE;
  readonly pageSizeOptions = [10, 25, 50, 75, 100];

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadCats());
  }

  filter(input: string): void {
    this.store.dispatch(setFilterString({ filterString: input }));
  }

  onPageChange(event: PageEvent): void {
    this.store.dispatch(setPaginationData({ currentPage: event.pageIndex, pageSize: event.pageSize}));
  }
}
