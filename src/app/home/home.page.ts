import { Component } from '@angular/core';
import { Intercom } from '@capacitor-community/intercom';
import { LocalNotifications } from '@capacitor/local-notifications';

type SupportOptionType = 'signal' | 'telegram' | 'email' | 'website';

interface SupportOption {
  type: SupportOptionType;
  title: string;
  contact: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public readonly liveChatAvailable = true;

  public readonly supportOptions: SupportOption[] = [
    {
      type: 'signal',
      title: 'Signal',
      contact: 'StellarSecurity.20',
      description: 'Contact us on Signal or Molly and get help.',
    },
    {
      type: 'telegram',
      title: 'Telegram',
      contact: '@Stellar_Security',
      description: 'Contact us on Telegram.',
    },
    {
      type: 'email',
      title: 'Email',
      contact: 'info@stellarsecurity.com',
      description: 'Send us an email and we will reply as soon as possible.',
    },
    {
      type: 'website',
      title: 'Website',
      contact: 'stellarsecurity.com',
      description: 'Visit our website and get help there using our form or live chat support.',
    },
  ];

  constructor() {
    this.localNotifications().then(() => {});
  }

  public handleRefresh(event: Event): void {
    const refresher = event.target as HTMLIonRefresherElement | null;
    refresher?.complete();
  }

  public getContactHref(option: SupportOption): string {
    switch (option.type) {
      case 'email':
        return `mailto:${option.contact}`;
      case 'website':
        return 'https://stellarsecurity.com';
      case 'telegram':
        return 'https://telegram.me/Stellar_Security';
      case 'signal':
        return 'https://signal.me/#eu/ScgeKkSwNh1RIpSx2e4g1tAFJuAGs2qP6juWwes-3Wv0qBJSwXZG_pXlYo0p0o9T';
      default:
        return '#';
    }
  }

  public getContactImagePath(option: SupportOption): string {
    switch (option.type) {
      case 'email':
        return 'assets/img/write-us.svg';
      case 'signal':
        return 'assets/img/signal.svg';
      case 'telegram':
        return 'assets/img/telegram.svg';
      case 'website':
        return 'assets/img/www.svg';
      default:
        return 'assets/img/header-icon.svg';
    }
  }

  public isExternalLink(option: SupportOption): boolean {
    return option.type !== 'email';
  }

  public openContact(option: SupportOption, event: Event): void {
    if (this.getContactHref(option) === '#') {
      event.preventDefault();
    }
  }

  private async localNotifications(): Promise<void> {
    const permissions = await LocalNotifications.checkPermissions();

    if (permissions.display !== 'granted') {
      const newPermissions = await LocalNotifications.requestPermissions();

      if (newPermissions.display === 'denied') {
        throw new Error('No permission to show notifications');
      }
    }
  }

  public openIntercom(): void {
    Intercom.registerUnidentifiedUser();
    Intercom.displayMessageComposer({ message: '' });
  }

  public displayLauncher(): void {
    Intercom.displayLauncher();
  }

  public hideLauncher(): void {
    Intercom.hideLauncher();
  }
}
