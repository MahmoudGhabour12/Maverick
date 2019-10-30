import { Component, OnInit } from '@angular/core';
import {UrlService} from './../url.service';
import { UrlModel } from './../urlModel';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-url',
  templateUrl: './url.component.html',
  styleUrls: ['./url.component.css']
})
export class UrlComponent implements OnInit {
  url: UrlModel;

  values = '';
  span="";
   onKey(event: any) { // without type info
    this.values = event.target.value ;
  } 
  Key(event: any) { // without type info
    this.span = event.target.value ;
  } 
  constructor( private UrlService: UrlService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }
  AddUrl(values) {
    this.UrlService.addurl(values);
    this.router.navigate(['']);
  }

}
