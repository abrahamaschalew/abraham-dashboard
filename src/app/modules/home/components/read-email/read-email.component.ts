import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-read-email',
  templateUrl: './read-email.component.html',
  styleUrls: ['./read-email.component.css'],
})
export class ReadEmailComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const chart = new Chart('read-email', {
      type: 'line',
      data: {
        labels: ['#1', '#2', '#3', '#4', '#5', '#6', 'MSG ID #7'],
        datasets: [
          {
            data: [86, 114, 106, 106, 107, 111, 133],
            label: 'Number Of sent the messages',
            borderColor: '#3e95cd',
            backgroundColor: '#7bb6dd',
            fill: false,
          },
          {
            data: [70, 90, 44, 60, 83, 90, 100],
            label: 'Number Of Poples who read the message',
            borderColor: '#ffa500',
            backgroundColor: '#ffc04d',
            fill: false,
          },
        ],
      },
    });
  }
}
