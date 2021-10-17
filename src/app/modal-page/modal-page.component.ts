import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.component.html',
  styleUrls: ['./modal-page.component.css']
})
export class ModalPageComponent implements OnInit {

  constructor(
    public mocalController: ModalController,
  ) { }

  ngOnInit(): void {
  }

  onClose() {
    this.mocalController.dismiss();
  }

}
