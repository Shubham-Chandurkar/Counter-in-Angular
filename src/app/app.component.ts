import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Counter App';
  name = "Shubham Chandurkar";

  count: number = 0;

  handleIncrease() {
    this.count = this.count + 1;
  }

  handleDecrease() {
    if (this.count > 0) {
      this.count = this.count - 1;
    } else {
      this.handleReset();
    }
  }

  handleReset() {
    this.count = 0;
  }

}
