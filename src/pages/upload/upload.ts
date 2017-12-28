import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})

export class UploadPage {
  public photos: any;
  public base64Image: string;
  constructor(public navCtrl: NavController, private camera: Camera, private alertCtrl: AlertController) {

  }

  ngOnInit() {
    this.photos = [];
  }

  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    } //keep quality set to 50 or lower otherwise photos become to large to handle in relative time.

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
    }, (err) => {
      // Handle error
    });
  }

  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
      title: 'Delete Photo',
      message: 'Are you sure you want to delete this Photo?',
      buttons: [
        {
          text: 'No',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.photos.splice(index, 1);
          }
        } // this is for the delete alert message
      ]
    });
    confirm.present();
  }
}

