import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { Navbar } from '../shared/components/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnChanges {
  ngOnInit(): void {
    initFlowbite();
  }

  ngOnChanges(changes: SimpleChanges): void {}
}
