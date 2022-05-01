import { Component } from '@angular/core';
import { RequestService } from '@deweppro/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title =
    'text text text text text text text text text text text text text text';
  valueText =
    'text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text text';
  valueNum = '621';
  valueBool1 = false;
  valueBool2 = false;
  valueBool3 = false;
  regex = new RegExp('[^0-9]', 'gi');

  selectList: { [title: string]: any } = {
    'text 1': 123,
    'text 2': 'hello',
    'text 3': false,
    'text 4': false,
    'text 5': false,
    'text 6': false,
    'text 7': false,
    'text 8': false,
    'text 9': false,
    'text 10': false,
    'text 11': false,
    'text 12': false,
    'text 13': false,
    'text 14': false,
  };
  selectDefault = '2';

  tmpls: { [key: string]: string } = {
    'dui-input-box': `<dui-input-box [title] [(value)] [regex]></dui-input-box>`,
    'dui-text-view': `<dui-text-view [title] [value]></dui-text-view>`,
    'dui-select-box': `data = { [title: string]: any }

    <dui-select-box [title] [data] [filter] (key) (value)></dui-select-box>`,
    'dui-tabs': `<dui-tabs [tab]="'tab2'">
    <div [attr.data-tab]="'tab1'" #tabItem>#1</div>
    <div [attr.data-tab]="'tab2'" #tabItem>#2</div>
    <div [attr.data-tab]="'tab3'" #tabItem>#3</div>
  </dui-tabs>`,
    'dui-check-box': `<dui-check-box [title] [(value)]></dui-check-box>`,
    'dui-switch-box': `data = { [title: string]: any }

    <dui-switch-box [title] [data] (key) (value)></dui-switch-box>`,
    ajax: `constructor(private rs: RequestService) {}

    actionClick() {
        this.rs.get("/assets/demo.json").subscribe((v: DemoMessage) => alert(v.msg));
    }
    `,
  };

  constructor(private rs: RequestService) {}

  debug(msg: any): void {
    console.log(msg);
  }

  actionClick() {
    this.rs
      .get(`/assets/demo.json`)
      .subscribe((v: DemoMessage) => alert(v.msg));
  }
}

export class DemoMessage {
  msg!: string;
}
