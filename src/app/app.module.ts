import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NgrxModule } from './ngrx.module';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, NgrxModule, ComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
