import { Routes } from '@angular/router';
import { Home } from './modules/home/home';
import { PoliticaCookies } from './pages/politica-cookies/politica-cookies';
import { PoliticaPrivacidadComponent } from './pages/politica-privacidad/politica-privacidad';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'politica-cookies', component: PoliticaCookies },
  { path: 'politica-privacidad', component: PoliticaPrivacidadComponent },
  { path: 'aviso-legal', component: AvisoLegalComponent },
];