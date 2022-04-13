import { Component, OnInit } from '@angular/core';

export interface Section {
  name: string;
  updated: Date;
  checked: any;
}

@Component({
  selector: 'app-list-files',
  templateUrl: './list-files.component.html',
  styleUrls: ['./list-files.component.css'],
})
export class ListFilesComponent implements OnInit {
  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
      checked: false,
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
      checked: false,
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
      checked: false,
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
      checked: false,
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
      checked: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
