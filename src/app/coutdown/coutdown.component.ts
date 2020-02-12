import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-coutdown',
  templateUrl: './coutdown.component.html',
  styleUrls: ['./coutdown.component.css']
})
export class CoutdownComponent implements OnInit {
  private intervalId = 0;
  startTimer: number;
  isStart = true;
  @Input()
  second: number;
  ngOnInit(): void {
    this.startTimer = this.second;
  }
  clearTime() {
    clearInterval(this.intervalId);
  }
  start() {
    this.isStart = false;
    this.clearTime();
    this.intervalId = window.setInterval(() => {
      if (this.startTimer > 0) {
        this.startTimer--;
      }
    }, 1000 );
  }
  reStart() {
    this.isStart = false;
    this.clearTime();
    this.startTimer = this.second;
    this.start();
  }
  stop() {
   this.clearTime();
  }
  onChange(value) {
    this.startTimer = value;
    this.second = value
  }
}
