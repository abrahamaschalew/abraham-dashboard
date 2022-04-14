import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  populars: any[] = [
    { title: "Don't be a donkey", url: 'https://sive.rs/donkey' },
    {
      title: 'Putting time in perpective',
      url: 'https://waitbutwhy.com/2013/08/putting-time-in-perspective.html',
    },
    {
      title: 'Disconnect',
      url: 'https://sive.rs/dc',
    },
    {
      title: "When you're extremely unmotivated",
      url: 'https://sive.rs/unmo',
    },
    {
      title: 'Subtract',
      url: 'https://sive.rs/subtract',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
