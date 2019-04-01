import { Component } from '@angular/core';
import { AndroidFullScreen } from '@ionic-native/android-full-screen/ngx';
import { AppLauncher, AppLauncherOptions } from '@ionic-native/app-launcher/ngx';
import { Hotspot, HotspotNetwork } from '@ionic-native/hotspot/ngx';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
public dateandtimenow = "-";
constructor(private alertCtrl:AlertController,private hotspot: Hotspot,private appLauncher: AppLauncher,private androidFullScreen: AndroidFullScreen) {
  console.log("GG");

  var timerunning = setInterval(()=>{
    this.dateandtimenow = moment().format('MMMM D YYYY, h:mm:ss a');
  },1000);
//  this.androidFullScreen.isImmersiveModeSupported()
//       .then(() => this.androidFullScreen.immersiveMode())
//       .catch((error: any) => console.log(error));
  //      this.androidFullScreen.showUnderSystemUI();
//  this.hotspot.scanWifi().then((networks) => {
  //  console.log(networks);
//});

}


launchApp(appno:any)
{


  const options: AppLauncherOptions = {
  }

  if(appno == "1")
  {
    options.packageName = 'com.sec.android.gallery3d';
    this.appLauncher.launch(options).then((canLaunch: boolean) => console.log('OK'))
    .catch((error: any) => console.log("error",error));
  }
  else if(appno == "2")
  {
    options.packageName = 'io.Fibeco.MeterReader';
    this.appLauncher.launch(options).then((canLaunch: boolean) => console.log('OK'))
    .catch((error: any) => console.log("error",error));
  }
  else if(appno == "3")
  {
    options.packageName = 'com.sec.android.app.camera';
    this.appLauncher.launch(options).then((canLaunch: boolean) => console.log('OK'))
    .catch((error: any) => console.log("error",error));
  }
  else if(appno == "4")
  {
    options.packageName = 'com.sec.android.app.popupcalculator';
    this.appLauncher.launch(options).then((canLaunch: boolean) => console.log('OK'))
    .catch((error: any) => console.log("error",error));
  }
  else if(appno == "5")
  {

    options.packageName = 'gg';
    this.appLauncher.launch(options).then((canLaunch: boolean) => console.log('OK'))
    .catch((error: any) =>
    {
      console.log("error",error)
    });
  }

/*  this.appLauncher.canLaunch(options)
    .then((canLaunch: boolean) => console.log('Facebook is available'))
    .catch((error: any) => console.error('Facebook is not available'));*/

}



swipeEvent(event:any){
    console.log(event);
    }



}
