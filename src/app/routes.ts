
import {HomeComponentComponent} from './components/home-component/home-component.component';
export const routingTable = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component: HomeComponentComponent}

  ]