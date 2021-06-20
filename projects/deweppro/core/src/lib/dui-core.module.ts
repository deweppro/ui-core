import { ModuleWithProviders, NgModule } from '@angular/core';
import { InputBoxComponent } from './component/input-box/input-box.component';
import { TextViewComponent } from './component/text-view/text-view.component';
import { SelectBoxComponent } from './component/select-box/select-box.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './service/error.interceptor';
import { RequestService } from './service/request.service';
import { KeyGetterPipe, KeysFilterPipe } from './pipe/filters.pipe';
import { RTLPipe } from './pipe/validators.pipe';
import { TabsComponent } from './component/tabs/tabs.component';
import { CheckBoxComponent } from './component/check-box/check-box.component';
import { SwitchBoxComponent } from './component/switch-box/switch-box.component';

@NgModule({
  declarations: [
    InputBoxComponent,
    TextViewComponent,
    SelectBoxComponent,
    TabsComponent,
    CheckBoxComponent,
    SwitchBoxComponent,
    KeysFilterPipe,
    KeyGetterPipe,
    RTLPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    InputBoxComponent,
    TextViewComponent,
    SelectBoxComponent,
    TabsComponent,
    CheckBoxComponent,
    SwitchBoxComponent,
    KeysFilterPipe,
    KeyGetterPipe,
    RTLPipe,
  ]
})
export class DuiCoreModule {
  static forRoot(): ModuleWithProviders<DuiCoreModule> {
    return {
      ngModule: DuiCoreModule,
      providers: [
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: RequestService },
      ]
    };
  }
}
