import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  public jwtHelper = new JwtHelperService();
  isError!: boolean;
  errorMessage!: string;
  constructor(
    private route: Router,
    private loginService: LoginService,

  ) { }

  ngOnInit(): void {
  }

  async doLogin() {
    this.isError = false;
      this.errorMessage = '';

    try {
      if (this.username && this.password) {
        const data: any = await this.loginService.login(this.username, this.password);
        if (data.ok) {
          sessionStorage.setItem('token', data.token);
          this.route.navigate(['/admin']);
        } else {
          this.isError = true;
          this.errorMessage = data.error;
        }
      } else {
        this.isError = true;
        this.errorMessage = 'กรุณาระบุชื่อผู้ใช้งาน หรือ รหัสผ่าน';
      }
    } catch (error) {
      this.isError = true;
      this.errorMessage = 'เกิดปัญหาในการเชื่อมต่อ';
    }
  }


}
