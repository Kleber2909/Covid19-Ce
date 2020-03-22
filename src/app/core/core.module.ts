import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoletimService } from './services/api/boletim.service';
import { HttpService } from './services/http.service';
import { HttpModule } from '@angular/http';
import { LoadingService } from './services/loading.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  providers: [
    HttpService,
    LoadingService,
    BoletimService,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})
export class CoreModule { }