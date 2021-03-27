import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastr: ToastrService) { }

  toast(type, message) {
    this.toastr.clear()
    switch (type) {
      case 'success':
        this.toastr.success(message)
        break;

      case 'error':
        this.toastr.error(message)
        break;

      case 'warning':
        this.toastr.warning(message)
        break;

      case 'info':
        this.toastr.info(message)
        break;
    
      default:
        break;
    }
  }
}
