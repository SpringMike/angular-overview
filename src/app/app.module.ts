import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';


import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './font-size-editor/font-size-editor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoutdownComponent } from './coutdown/coutdown.component';
import {FormsModule} from '@angular/forms';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    CoutdownComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }

