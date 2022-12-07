import { Inject, Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage';


@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private mir: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Inject(AngularFireStorage) private storage: AngularFireStorage
  ) {
    this.registerSvgIcons();
    const getStorage = this.storage.getStorage();
    const spaceRef = this.storage.ref(getStorage, 'assets');  }

  
  registerSvgIcons() {
    this.addSvgIcon('delete');
    this.addSvgIcon('bookmark');
    this.addSvgIcon('home');
    this.addSvgIcon('favorite');
    this.addSvgIcon('more_vert');
    this.addSvgIcon('menu');
    this.addSvgIcon('open_in_new');
    this.addSvgIcon('exposure_plus_1');
    this.addSvgIcon('filter_list');
    this.addSvgIcon('bolt');
    this.addSvgIcon('electric_bolt');
  }

  addSvgIcon(iconName: string) {
    this.mir.addSvgIcon(
      `${iconName}`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `assets/${iconName}_icon.svg`
      )
    );
  }
}
