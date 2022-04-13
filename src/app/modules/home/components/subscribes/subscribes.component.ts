import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribes',
  templateUrl: './subscribes.component.html',
  styleUrls: ['./subscribes.component.css'],
})
export class SubscribesComponent implements OnInit {
  constructor() {}
  subscribers = [
    {
      name: 'Abraham Aschalew',
      email: 'abraham@abraham.com',
    },

    {
      name: 'Yabsra Aschalew',
      email: 'yabsra@yabsra.com',
    },

    {
      name: 'Genet Birhanu',
      email: 'genet@genet.com',
    },
    {
      name: 'Abraham Aschalew',
      email: 'abraham@abraham.com',
    },

    {
      name: 'Yabsra Aschalew',
      email: 'yabsra@yabsra.com',
    },

    {
      name: 'Genet Birhanu',
      email: 'genet@genet.com',
    },
    {
      name: 'Abraham Aschalew',
      email: 'abraham@abraham.com',
    },

    {
      name: 'Yabsra Aschalew',
      email: 'yabsra@yabsra.com',
    },

    {
      name: 'Genet Birhanu',
      email: 'genet@genet.com',
    },
  ];

  ngOnInit(): void {}
}
