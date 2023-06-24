import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.aimalls.shop',
  appName: 'AIMalls',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
