import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { SvgIcons } from '../assets/svg-icons';

@Injectable({
  providedIn: 'root',
})
export class IconService {
  svgIcons = new SvgIcons();

  constructor(
    private mir: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.registerSvgIcons();
  }

  registerSvgIcons() {
    this.addSvgIcon('bookmark', this.svgIcons.BOOKMARK_ICON);
    this.addSvgIcon('delete', this.svgIcons.DELETE_ICON);
    this.addSvgIcon('electric_bolt', this.svgIcons.ELECTRIC_BOLT_ICON);
    this.addSvgIcon('exposure_plus_1', this.svgIcons.EXPOSURE_PLUS_1_ICON);
    this.addSvgIcon('favorite', this.svgIcons.FAVORITE_ICON);
    this.addSvgIcon('filter_list', this.svgIcons.FILTER_LIST_ICON);
    this.addSvgIcon('home', this.svgIcons.HOME_ICON);
    this.addSvgIcon('menu', this.svgIcons.MENU_ICON);
    this.addSvgIcon('more_vert', this.svgIcons.MORE_VERT_ICON);
    this.addSvgIcon('open_in_new', this.svgIcons.OPEN_IN_NEW_ICON);
  }

  addSvgIcon(iconName: string, iconSvg) {
    this.mir.addSvgIconLiteral(
      `${iconName}`,
      this.domSanitizer.bypassSecurityTrustHtml(iconSvg)
    );
  }
}
