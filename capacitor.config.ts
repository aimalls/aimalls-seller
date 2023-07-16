import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.aimalls.seller',
  appName: 'AIMalls Seller',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
