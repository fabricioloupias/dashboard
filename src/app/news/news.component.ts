import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newState: FormGroup;
  selectedFile: File = null;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.newState = this.fb.group({
      'mensaje': this.fb.control(''),
      'foto': this.fb.control(''),
    }) 
  }

  fileSelected(event){
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  addState(){

  }

}
