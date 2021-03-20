import { Injectable } from '@angular/core';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ToastComponent } from '../@shared/components/toast/toast.component';


@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  public message: string = '';
  public actionButtonLabel: string = 'Retry';
  public action: boolean = false;
  public setAutoHide: boolean = true;
  public autoHide: number = 6000;
  public addExtraClass: boolean = false;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  public verticalPosition: MatSnackBarVerticalPosition = 'top';
  constructor(private snackBar: MatSnackBar) {
  }

  public showToaster(msg: any) {
    this.snackBar.dismiss();
    let config = new MatSnackBarConfig();
    config.duration = this.setAutoHide ? this.autoHide : 3000;
    config.data = msg;
    this.snackBar.openFromComponent(ToastComponent, config);
  }
  public close(){
    this.snackBar.dismiss();
  }

}
