import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import {MenubarModule} from 'primeng/menubar';
import { HeaderModule } from '../header/header.module';
import { AuthService } from 'src/app/service/auth.service';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [
    MenuComponent
  ],
  providers: [
    AuthService
  ]
})
export class MenuModule { }
