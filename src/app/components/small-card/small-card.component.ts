import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = "";

  @Input()
  cardTitle:string = "";
  @Input()
  Id:string = "0"

  constructor(){ }

  ngOnInit(): void {
      
  }
  
}
