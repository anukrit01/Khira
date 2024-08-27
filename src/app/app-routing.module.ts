import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'audit',
        pathMatch: 'full'
    },
    {
        path: 'code',
        loadChildren: () => import('./features/home/home-routing.module').then(m => m.HomeRoutingModule)
    },
    {
        path: 'audit',
        loadChildren: () => import('./features/home/home-routing.module').then(m => m.HomeRoutingModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
})

export class AppRoutingModule {}
