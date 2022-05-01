import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckBoxComponent } from './component/check-box/check-box.component';
import { InputBoxComponent } from './component/input-box/input-box.component';
import { SelectBoxComponent } from './component/select-box/select-box.component';
import { SwitchBoxComponent } from './component/switch-box/switch-box.component';
import { TabsComponent } from './component/tabs/tabs.component';
import { TextViewComponent } from './component/text-view/text-view.component';
import { KeyGetterPipe, KeysFilterPipe } from './pipe/filters.pipe';
import { RTLPipe } from './pipe/validators.pipe';
import { ErrorInterceptor } from './service/error.interceptor';
import { API_PREFIX, RequestService } from './service/request.service';

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
  imports: [CommonModule, FormsModule, HttpClientModule],
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
  ],
  schemas: [],
})
export class DuiCoreModule {
  static forRoot(domain?: string): ModuleWithProviders<DuiCoreModule> {
    return {
      ngModule: DuiCoreModule,
      providers: [
        { provide: RequestService },
        { provide: API_PREFIX, useValue: domain || '' },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
      ],
    };
  }
}
