import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { DataService } from '../../services/data.service';
import { Users } from '../../class/users';
@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {
id:any;
data:any;
userss=new Users
constructor(private route:ActivatedRoute ,private dataService:DataService) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params.id;
   this.getData(); 
   console.log(this.id);
  }

  getData(){
this.dataService.getUserById(this.id).subscribe(res=>{
  this.data=res;
  this.userss=this.data;
})
  } 
  
updateUsers(){
 this.dataService.updateUsersData(this.id,this.userss).subscribe(resp=>{console.log(resp)})
}
}
