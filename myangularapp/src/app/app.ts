import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Pages/header/header';
import { Navbar } from './Pages/navbar/navbar';
import { Fetchdata } from './Pages/fetchdata/fetchdata';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Header,Navbar,Fetchdata],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title=signal("Sending data")

message:string=""

count:number=0
Inc(){
  this.count++
}
count1:number=0
Dec(){
  this.count1--
}
handleClick(){
  this.message="Button Clciked"
}

intialState:any=false

handleterneary(){
this.intialState=this.intialState?"This is true":"this is False"
}
}