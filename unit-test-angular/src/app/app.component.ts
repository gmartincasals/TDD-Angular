import { Component } from '@angular/core';
import { Calculator } from './calculator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    /*const calculator = new Calculator();
    const result = calculator.multiply(3, 3);
    console.log(result === 9); // Test passed
    console.log(result !== 12); // Test passed

    const result2 = calculator.divide(6, 2);
    console.log(result2 === 3); // Test passed
    console.log(result2 !== 34); // Test passed

    const result3 = calculator.divide(6, 0);
    console.log(result3 === null);*/
  }
}
