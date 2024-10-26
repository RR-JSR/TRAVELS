import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';
import { provideHttpClient, withFetch } from '@angular/common/http';

const bootstrap = () => {
  const updatedConfig = {
    ...config,
    providers: [
      ...(config.providers || []),
      provideHttpClient(withFetch()),
    ],
  };

  return bootstrapApplication(AppComponent, updatedConfig);
};

export default bootstrap;