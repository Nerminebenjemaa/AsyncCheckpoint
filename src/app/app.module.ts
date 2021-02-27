import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OberservableComponent } from './components/oberservable/oberservable.component';
import { SliderObservableComponent } from './components/slider-observable/slider-observable.component';

@NgModule({
  declarations: [
    AppComponent,
    OberservableComponent,
    SliderObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
