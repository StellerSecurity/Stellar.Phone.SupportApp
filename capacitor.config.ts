import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'Stellar.Phone.SupportApp',
  appName: 'Support',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  "plugins": {
    "Intercom": {
      "androidApiKey": "android_sdk-330bc061870e0cfc2d59a8c0b2bdd3a5c6f47f28",
      "androidAppId": "jkv7s675"
    }
  }
};

export default config;
