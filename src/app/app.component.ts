import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'daily-report';
  status = 1;
  otherStatus = 0;

  onStatus() {
    this.status = 1;
    this.otherStatus = 0;
  }
  anotherStatus() {
    this.status = 0;
    this.otherStatus = 1;
  }

  testing() {
    $(document).on('click', 'div button', function () {
      $(this).addClass('active').siblings().removeClass('active');
    })
  }
}
