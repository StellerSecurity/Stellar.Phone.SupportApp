import { Component } from '@angular/core';
import { Intercom } from '@capacitor-community/intercom';
import { LocalNotifications } from '@capacitor/local-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    this.localNotifications().then(r => {});
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
