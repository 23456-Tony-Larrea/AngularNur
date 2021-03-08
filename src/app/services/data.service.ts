import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Users } from '../class/users';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  ApiService() {
    throw new Error('Method not implemented.');
  }

  constructor(private httpClient: HttpClient) { }
  getData() {
    return this.httpClient.get('http://192.168.100.244:8000/api/usuario')
  }
  getUserById(id: string) {
    return this.httpClient.get(`http://192.168.100.244:8000/api/usuario/${id}`)
  } 
  insertData(data: Users) {
    return this.httpClient.post('http://192.168.100.244:8000/api/usersPost', data)
  }
  deleteData(id: string) {
    return this.httpClient.delete(`http://192.168.100.244:8000/api/usersDelete/${id}`)

  }
  updateUsersData(id: string, data: Users) {
    return this.httpClient.patch(`http://192.168.100.244:8000/api/usersPath/${id}`, data);
  }
}


