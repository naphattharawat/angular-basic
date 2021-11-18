import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  error(title: any = 'เกิดข้อผิดพลาด', text: any = '') {
    Swal.fire({
      icon: 'error',
      title: title,
      text: text
    })
  }

  success() {
    Swal.fire({
      icon: 'success',
      title: 'บันทึกสำเร็จ',
    })
  }

  confirm() {
    return Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });
  }
}
