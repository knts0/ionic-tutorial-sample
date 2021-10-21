import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.css']
})
export class ModalPageComponent implements OnInit {

  constructor(
    public mocalController: ModalController,
    public photoService: PhotoService,
  ) { }

  ngOnInit(): void {
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  onClose() {
    this.mocalController.dismiss();
  }

}
