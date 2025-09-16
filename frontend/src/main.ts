import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
export default function bootstrap() {
  return Promise.resolve();
}
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));


