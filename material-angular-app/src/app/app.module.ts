import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent, UserLoginDialog, SignUpDialog } from './app.component';
import { MatToolbarModule, MatButtonModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginDialog,
    SignUpDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,
    MatInputModule
  ],
  entryComponents: [
    UserLoginDialog,
    SignUpDialog
  ],
  exports: [MatDialogModule, MatToolbarModule, MatButtonModule, MatInputModule],
  providers: [MatDialogModule, MatToolbarModule, MatButtonModule, MatInputModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
