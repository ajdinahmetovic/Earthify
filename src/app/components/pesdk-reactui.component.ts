import { Component, Input, ViewChild } from '@angular/core';
import {ViewEncapsulation} from '@angular/core'; //required for external css
// Import PhotoEditor SDK React
import PhotoEditorReactUI from 'photoeditorsdk/js/PhotoEditorSDK.UI.ReactUI.js';

const license = null;


// the PhotoEditorSDK expects React and ReactDom to be available in global/window
import * as React from 'react';
import {ActivatedRoute} from '@angular/router';
import {DataC} from '../content/data';

const image = new Image();
image.src = 'assets/example.jpg';

const defaultProps = {
  // license: license,

"owner":"Ajdin Ahmetovic","version":"2.1","enterprise_license":false,"available_actions":["magic","filter","transform","sticker","text","adjustments","brush","focus","frames","camera"],"features":["adjustment","filter","focus","overlay","transform","text","sticker","frame","brush","camera","textdesign","library","export"],"platform":"HTML5","app_identifiers":[],"api_token":"tD6RfmHpBos08pWCYf4rmA","domains":["https://api.photoeditorsdk.com"],"issued_at":1540046126,"expires_at":1542585600,"signature":"BK7FRM7Ko/BL04Rf/yZ1vN007FGGSjgH/XKSFu7iethY+3KfC+mkWGw0SbuPKxn9l5DX+g6E2DdObOwiC/6kWrKaPw4WI7RPCf+6VFyrxuBx1lm+PWa9ufBUltUFU4tmcze3ocQoH+ygMu1Gj7i+IpIVKNw0bJwIpCPmqOypM9NUIQvGohEWxgjmb+/DGzkwE8KYOcQ5RBFiyQ2dZ3nqWM5AXLRdDB8cTwldD1mko8bF8NCi4YKsamgrCXQwgiUZoY6TyWpEn51cT/jei3T5hX8dCvagj9J3AdzqcECy2FVUAybdw84GPdGkawfivavwHmdMLMlIasw191i4WsIl0rwMhZ3yFFBRF/eXm9z2/hsyUBWc0dbIJDCHFgeVGVRjnnWi+YhAyG8hJtGjWaTq5kj+jsaTGJpGLnKVzGCXsE+CUNb+Y6mv3RN7msyIDBTVd/KHLfiy1jY8qxJXfX6nG5ehIC8O/uyI85lQcM7tMyk3gGPLsKI4RsA43TUeTe80pjiHTbrO0evfhbyOHcb8lo/UOHfubdB72JGplVvgvpV/u+rgdavXokgtmJozlBTrYqJPeq23pIL6muzps4v9VYb//ZGwjjVCQt+z4sf3rtGah9Xw278GWz7VQbUpAM2oRiBBRq5/WJ8S4k2ieCnyafWk4FRq1+gVx6GwwqsmQLE=",

  assets: {
    baseUrl: '/assets/photoeditorsdk' // see angular-cli.json for configuraton
  },
  style:{
    width: window.innerWidth,
    height: window.innerHeight
  },
  editor: {
    image: image
  }
};

const templateStr: string = `
  <ngui-react
    [reactComponent]="reactComponent"
    [reactProps]="reactProps">
  </ngui-react>
`;

@Component({
  selector: 'photoeditorsdk-reactui',
  styleUrls: ['../../../node_modules/photoeditorsdk/css/PhotoEditorSDK.UI.ReactUI.css'],
  template: templateStr,
  encapsulation: ViewEncapsulation.None
})

export class PhotoEditorSDKReactUIComponent {
 // members
 reactComponent: React.Component;
 reactProps: any
 // inputs
 @Input() license: string = license;
 // functions
  photo;
 constructor(private route: ActivatedRoute, private data: DataC) {


   this.photo = data.getItems();
   image.src = this.photo[this.route.snapshot.params['id']].img;

   const licenseProps = {
     license: this.license
   };

    this.reactComponent = PhotoEditorReactUI.ReactComponent;
    this.reactProps = {...defaultProps, ...licenseProps};
  }

  getWidth (){
    return window.innerWidth;
  }

  getHeight (){

   return window.innerHeight;
  }

}
