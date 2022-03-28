
import {HomeComponentComponent} from './components/home-component/home-component.component';
import {DetailComponentComponent} from './components/detail-component/detail-component.component';
export const routingTable = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'home',component: HomeComponentComponent},
  {path:'details/:id',component: DetailComponentComponent},
  {path:'search/:searchTerm',component: HomeComponentComponent},
  ]