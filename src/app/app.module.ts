import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { InquiryEditorComponent } from './inquiry-editor/inquiry-editor.component';
import { MetadataEditorComponent } from './inquiry-editor/metadata-editor/metadata-editor.component';
import { ElakEditorComponent } from './inquiry-editor/elak-editor/elak-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    InquiryEditorComponent,
    MetadataEditorComponent,
    ElakEditorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
