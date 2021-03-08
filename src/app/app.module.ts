import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersEditComponent } from './components/users-edit/users-edit.component';

const routes: Routes = [
  { path: 'api', component:UsersComponent },
  
  { path:'api/edit/:id',component:UsersEditComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavbarComponent,
    UsersEditComponent 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
   RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
