import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ToolbarModule,
    CardModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
