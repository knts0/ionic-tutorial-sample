import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { ModalPageComponent } from '../modal-page/modal-page.component';
import { DataService, Message } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(
    private data: DataService,
    public mocalController: ModalController,
  ) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  async onClickAddButton() {
    // todo
    const modal = await this.mocalController.create({
      component: ModalPageComponent,
      cssClass: 'modal-page',
      // componentPropsでデータを渡せる
      // cssClassでカスタムCSSを定義
      // swipeToCloseでスワイプによるcloseを可能にする
    })
    return await modal.present()
  }

}
