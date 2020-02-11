import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-coutdown',
  templateUrl: './coutdown.component.html',
  styleUrls: ['./coutdown.component.css']
})
export class CoutdownComponent implements OnInit {

  startTimer: any;
  restartTimer: any;
  isStart = true;
  @Input()
  second = 10;
  constructor() { }
  ngOnInit(): void {
  }
  start() {
    this.isStart = false;
    this.startTimer = setInterval(() => {
      if (this.second > 0) {
        this.second--;
      }
    }, 1000 );
  }
  reStart() {
    this.isStart = false;
    this.restartTimer = this.second;
    this.restartTimer =  setInterval(() => {
      if (this.second > 0) {
        this.second--;
      }
    }, 1000 );
  }
  stop() {
   clearInterval(this.startTimer);
  }
  onChange(value) {
    this.second = value;
  }
}
