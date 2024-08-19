import { Component } from '@angular/core';
import { Intercom } from '@capacitor-community/intercom';
import { LocalNotifications } from '@capacitor/local-notifications';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private key_cache = "key_support_options";

  public support_options : any;

  constructor(public httpClient: HttpClient) {
    this.localNotifications().then(r => {});
    this.init();
  }

  public init() {

    // @ts-ignore
    this.support_options = JSON.parse(localStorage.getItem(this.key_cache));
    console.log(this.support_options);

      this.httpClient.get('https://stellarphoneuisupportappapiprod.azurewebsites.net/api/v1/supportcontroller/info?reseller_user_id=EMPTY ')
      .subscribe(data => {

        this.support_options = data;

        localStorage.setItem(this.key_cache, JSON.stringify(data));
      })
  }

  public handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.init();
      event.target.complete();
    }, 2000);
  }

  private async localNotifications() {
    const permissions = await LocalNotifications.checkPermissions();
    console.log('checkPermissions result:', permissions);
    if (permissions.display !== 'granted') {
      const newPermissions = await LocalNotifications.requestPermissions();
      console.log('requestPermissions result:', newPermissions);
      if (newPermissions.display === 'denied') {
        // Always ends up here, without showing any notification permission prompt
        throw new Error(`No permission to show notifications`);
      }
    }

    /*let notifs = await LocalNotifications.schedule({
      notifications: [
        {
          title: 'Stellar Data',
          body: 'You have 1 GB remaining',
          id: 1,
          schedule: { at: new Date(Date.now() + 1000 * 5) },
          actionTypeId: '',
          extra: null,
        },
      ],
    });*/
  }

  openIntercom() {
    Intercom.registerUnidentifiedUser();
    Intercom.displayMessageComposer({ message: "" });
  }
  displayLauncher() {
    Intercom.displayLauncher();
  }

  hideLauncher() {
    Intercom.hideLauncher();
  }

}
