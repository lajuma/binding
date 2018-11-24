import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AreasComponent } from './areas/areas.component';
import { AreaComponent } from './areas/area/area.component';
import { RectangleComponent } from './areas/area/rectangle/rectangle.component';

@NgModule({
  declarations: [
    AppComponent,
    AreasComponent,
    AreaComponent,
    RectangleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
