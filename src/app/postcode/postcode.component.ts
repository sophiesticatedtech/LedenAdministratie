import { Component, OnInit } from '@angular/core';
import { PostcodeService } from '../services/postcode.service';
import { Postcode } from '../domain/postcode.model';

@Component({
  selector: 'app-postcode',
  templateUrl: './postcode.component.html',
  styleUrls: ['./postcode.component.css']
})
export class PostcodeComponent implements OnInit {

  constructor(private postcodeService: PostcodeService) {  }
    private postcodes : Postcode[];
    private postcode : Postcode;


  ngOnInit() {

    this.postcode = new Postcode();
    this.postcode.id = 0;
    this.postcode.pstcod = "";
    this.postcode.str = "";
    this.postcode.wpl = "";

    this.postcodeService.get().subscribe(
      data => {this.postcodes = data;
        console.log(data);
      })

  
  }

  store() {
    console.log(this.postcode);
    this.postcodeService.add(this.postcode)
    .subscribe(
      data => { this.postcode.id = data; }
    )
  }
 
 
  update(id: number) {
    this.postcode.id=id;
    this.postcodeService.update(this.postcode).subscribe(
      data => { console.log('data', data ) }
    )
  }
 
  remove(id) {
    console.log(id);
    this.postcodeService.delete(id).subscribe(
      data => {  }
    )
  }
 
 

}
