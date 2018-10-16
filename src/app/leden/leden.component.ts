import { Component, OnInit } from '@angular/core';

import {Lid } from '../domain/lid.model';

import { LidService } from '../services/lid.service';
import { Postcode } from '../domain/postcode.model';


@Component({
  selector: 'app-leden',
  templateUrl: './leden.component.html',
  styleUrls: ['./leden.component.css']
})
export class LedenComponent implements OnInit {

  constructor(private lidService: LidService) { }
  private leden : Lid[];
  private lid : Lid;


  ngOnInit() {
    this.lid = new Lid();
    this.lid.id = 0;
    this.lid.nam = "";

    this.lid.pstcod = new Postcode;
    this.lid.pstcod.id;
    this.lid.pstcod.pstcod;
    this.lid.pstcod.wpl;
    this.lid.pstcod.str;

    this.lid.hnr = "";

    this.lidService.get().subscribe(
      data => {this.leden = data;
        console.log(data);
      })
  }

}
