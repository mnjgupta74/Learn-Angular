import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifelse',
  templateUrl: './ngifelse.component.html',
  styleUrls: ['./ngifelse.component.css']
})
export class NgifelseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    isValid : boolean = false;
    onCreateBlock()
    {
      this.isValid = true;
    }
}
