import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'Stellar.Phone.SupportApp',
  appName: 'myApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  "plugins": {
    "Intercom": {
      "androidApiKey": "dG9rOjkwOWZlYzY5XzI5YzhfNDMxNl9hNmQzXzkxZWUxZmIwYjcxMToxOjA",
      "androidAppId": "Stellar.Phone.SupportApp"
    }
  }
};

export default config;
