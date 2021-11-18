import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/alert.service';
import { UsersService } from '../services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  list = [];
  name!: string;
  lname: any;
  username!: string;
  password!: string;
  id!: number;
  modalEditUser = false;
  isUpdate = false;
  constructor(
    private usersService: UsersService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.getList();
  }

  async getList() {
    try {
      const rs: any = await this.usersService.getUser();
      if (rs.ok) {
        this.list = rs.rows;
      } else {
        console.log(rs.error);
      }
    } catch (error) {
      console.log(error);
    }
  }

  onClickEdit(i: any) {
    this.isUpdate = true;
    this.name = i.first_name;
    this.lname = i.last_name;
    this.id = i.id;
    this.modalEditUser = true;
  }

  async onClickSave() {
    try {
      const json: any = {
        "first_name": this.name,
        "last_name": this.lname,
        "username": this.username,
        "title_id": 2,
        "password": this.password
      }
      if (this.isUpdate) {
        const rs: any = await this.usersService.update(this.id, json);
        if (rs.ok) {
          this.modalEditUser = false;
          this.getList();
        } else {
          console.log(rs);
        }
      } else {
        const save: any = await this.usersService.save(json);
        if (save.ok) {
          this.modalEditUser = false;
          this.getList();
          this.alertService.success();
        } else {
          this.alertService.error(save.error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async onClickRemove(i: any) {
    try {
      const confirm = await this.alertService.confirm();
      if (confirm.isConfirmed) {
        const rs: any = await this.usersService.remove(i.id);
        if (rs.ok) {
          this.getList();
        } else {
          console.log(rs);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  onClickAdd() {
    this.isUpdate = false;
    this.name = '';
    this.lname = '';
    this.username = '';
    this.password = '';
    this.modalEditUser = true;
  }
}
