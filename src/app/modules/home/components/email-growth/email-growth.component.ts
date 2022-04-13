import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-email-growth',
  templateUrl: './email-growth.component.html',
  styleUrls: ['./email-growth.component.css'],
})
export class EmailGrowthComponent implements OnInit {
  total: number = 0;
  constructor() {}

  ngOnInit(): void {
    const accountsPerMonth = [10, 15, 20, 20, 22, 18, 21, 35, 30, 32, 36, 40];
    for (let index = 0; index < accountsPerMonth.length; index++)
      this.total += accountsPerMonth[index];

    const emailGrowth = new Chart('emailGrowth', {
      type: 'line',
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'E-mail Accounts',
            data: accountsPerMonth,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });
  }
}
