import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface PeriodicElement {
  category: string;
  index: number;
  title: string;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    index: 1,
    category: 'Hydrogen',
    title: 'Obvious to you, Obvious to you',
    address: 'H',
  },
  { index: 2, category: 'Helium', title: 'Obvious to you', address: 'He' },
  { index: 3, category: 'Lithium', title: 'Obvious to you', address: 'Li' },
  { index: 4, category: 'Beryllium', title: 'Obvious to you', address: 'Be' },
  { index: 5, category: 'Boron', title: 'Obvious to you', address: 'B' },
  { index: 6, category: 'Carbon', title: 'Obvious to you', address: 'C' },
  { index: 7, category: 'Nitrogen', title: 'Obvious to you', address: 'N' },
  { index: 8, category: 'Oxygen', title: 'Obvious to you', address: 'O' },
  { index: 9, category: 'Fluorine', title: 'Obvious to you', address: 'F' },
  { index: 10, category: 'Neon', title: 'Obvious to you', address: 'Ne' },
];

// If the text to long cut some of them and add ...
ELEMENT_DATA.forEach((element) => {
  let newWord = '';
  if (element.title.length > 14) {
    for (let i = 0; i < 14; i++) {
      newWord += element.title[i];
    }

    newWord += ' ...';
    element.title = newWord;
  }
});
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  displayedColumns: string[] = ['index', 'category', 'title', 'address'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  constructor() {}

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.dataSource.pop();
    this.table.renderRows();
  }

  ngOnInit(): void {}
}
