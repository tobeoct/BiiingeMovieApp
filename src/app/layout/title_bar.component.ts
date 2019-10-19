import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title_bar.component.html',
  styles: [
    `
      #title-bar {
        position: relative;
        width: 100%;
        box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.1);
        padding: 20px 5% 20px 5%;
      }

      #title-bar h4 {
        position: relative;
      }
      #title-bar h4:after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3px;
        width: 10%;
        border-radius: 3px;
        margin-top: 5px;
        background: #f2c94c;
      }
    `
  ]
})
export class TitleBarComponent {
  title = 'JUST FOR YOU';
}
