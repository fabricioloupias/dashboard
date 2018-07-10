import {Component,OnInit} from '@angular/core';
import {  AngularFireStorage,  AngularFireStorageReference,  AngularFireUploadTask} from 'angularfire2/storage';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {MatSnackBar} from '@angular/material';
import {  Observable} from 'rxjs';
import {  finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators';

interface Photo {
  url: string;
}

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit {

  ref: AngularFireStorageReference
  task: AngularFireUploadTask;
  downloadURL: Observable < string > ;
  uploadPercent: Observable < number > ;
  photos: Observable<Photo[]>;

  private photoDoc: AngularFirestoreDocument<Photo>;
  private photosCollection: AngularFirestoreCollection<Photo>;


  constructor(private afs: AngularFirestore, private storage: AngularFireStorage, public snackBar: MatSnackBar) {
    this.photosCollection = afs.collection<Photo>('photos');
    this.photos = this.photosCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Photo;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  ngOnInit() {}

  url: string;
  
  
  photoSelectedList(event: any) {

    const file = event.target.files[0];
    const filePath = `photos/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
  
    try{
      // observe percentage changes
      this.uploadPercent = task.percentageChanges();
      console.log(this.uploadPercent)
      // get notified when the download URL is available
      task.snapshotChanges().pipe(
          finalize(() => this.downloadURL = fileRef.getDownloadURL())
        )
        .subscribe(console.log)  
    } catch (err) {
      console.log(err)
    } 
   
  }

  savePhoto(urlPhoto){
    try{
      this.photosCollection.add({ url: urlPhoto});
      this.snackBar.open('Foto guardada', 'Undo', {
        duration: 3000
      });
    } catch(err){
      console.log(err)
      this.snackBar.open('Ocurrio algun error', 'Undo', {
        duration: 4000
      });
    }
    this.photos.subscribe(console.log)
  }


}
