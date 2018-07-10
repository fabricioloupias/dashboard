import { Component, OnInit } from '@angular/core';
import { FileSelectDirective, FileUploader } from 'ng2-file-upload';
import { HttpClientModule } from '@angular/common/http';

const URI = 'http://localhost:3000/api/uploads/image';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent {

  uploader: FileUploader = new FileUploader({url: URI, itemAlias: 'image'});
  attachmentList:any = [];
  
  constructor() { 
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      this.attachmentList.push(JSON.parse(response)); 
      console.log("Upload correctamente", item, status, response); 
    }
  }

  ngOnInit() {
    
  }

  uploadImage(){
    
  }

}
