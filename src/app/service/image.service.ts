import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL} from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    const file = $event.targe.files[0]
    const imgRef = ref(this.storage, `imagen/`+ name) 
    uploadBytes(imgRef, file)
    .then(response => {this.getImagenes()})
    .catch(error => console.log(error))
}
getImagenes(){
  const imagesRef = ref(this.storage, 'image')
  list(imagesRef)
  .then(async response =>{
      for(let item of response.items){
          this.url = await getDownloadURL(item);
          console.log("La URL es: " + this.url)
      }
  })
  .catch(error => console.log(error))

}



}
