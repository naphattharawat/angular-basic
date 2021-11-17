import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  title = 'TITLE APP';
  no = 0;
  list = [];
  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
  }


}
