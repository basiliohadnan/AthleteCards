import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/home-page/home-page.module').then(module => module.HomePageModule)
  },
  {
    path: 'profile/:token/id/:id',
    loadChildren: () => import('../app/profile-page/profile-page.module').then(module => module.ProfilePageModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
