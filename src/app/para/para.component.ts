import { Component, OnInit } from '@angular/core';
import { ParaService } from './../para.service';
import { Router,ActivatedRoute } from '@angular/router';
import { ParaModel } from './../paraModel';


@Component({
  selector: 'app-para',
  templateUrl: './para.component.html',
  styleUrls: ['./para.component.css']
})
export class ParaComponent implements OnInit {
  para: ParaModel;
  values = '';
  span="";
  onKey(event: any) { // without type info
    this.values = event.target.value ;
  } 
  Key(event: any) { // without type info
    this.span = event.target.value ;
  }
  constructor( private ParaService: ParaService,
    private router: Router, private route: ActivatedRoute
) { }

  ngOnInit() {
  }
  Addpara(values) {
    this.ParaService.AddMypara(values);
    this.router.navigate(['']);
  }
  }
