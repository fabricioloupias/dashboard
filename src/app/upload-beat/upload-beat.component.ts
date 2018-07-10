import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-upload-beat',
  templateUrl: './upload-beat.component.html',
  styleUrls: ['./upload-beat.component.css']
})
export class UploadBeatComponent implements OnInit {
  visible: boolean = true;
  selectable: boolean = true;
  removable: boolean = true;
  addOnBlur: boolean = true;

  // Enter, comma
  separatorKeysCodes = [ENTER, COMMA];

  beatTags = [];
  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.beatTags.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  };
  remove(fruit: any): void {
    let index = this.beatTags.indexOf(fruit);

    if (index >= 0) {
      this.beatTags.splice(index, 1);
    }
  };

  uploadBeat: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.btnUploadBeat();
  }

  btnUploadBeat(){   
    this.uploadBeat = this.fb.group({
      nameBeat: ['', Validators.required ],
      bpm: ['', Validators.required ],
      beatTags:''
    });
    console.log(this.uploadBeat) 
  }

  ngOnInit() {
    
  }

}
