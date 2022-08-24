import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from '@nativescript/angular'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './home.component'
import { ModalRootComponent } from "./modal-root.component";
import { ModalViewActionBarComponent } from "./modal-view.component";

@NgModule({
  imports: [
    NativeScriptCommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ModalRootComponent,
    ModalViewActionBarComponent
  ],
  entryComponents: [
    ModalRootComponent
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeModule {}
