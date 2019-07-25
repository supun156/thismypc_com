import {
  Component,
  OnInit
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';
import {
  Router,
  RouterModule,
  Routes
} from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  password = '';
  email = '';
  firstName = '';
  lastName = '';
  error_message = false;
  error_message_text = '';
  
  constructor(private http: HttpClient, private router: Router) {}
  ngOnInit() {

     const self = this;
    
    $("#close_contribute_alert").click(function(d){
      $("#contribute_alert").remove();
    });
  }
  resetModel() {
    this.error_message = false;
  }
 
}