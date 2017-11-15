import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(public dialog: MatDialog) {}

    openLoginDialog() {
      const dialogRef = this.dialog.open(UserLoginDialog, {
        height: '340px',
        width: '350px',
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }

    openSignUpDialog() {
      const signUpDialogRef = this.dialog.open(SignUpDialog, {
        height: '500px',
        width: '350px',
      });

      signUpDialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }
}

@Component({
  selector: 'user-login-dialog',
  templateUrl: './log-in-dialog.html',
})
export class UserLoginDialog {}

@Component({
  selector: 'sign-up-dialog',
  templateUrl: './sign-up-dialog.html',
})
export class SignUpDialog {}
