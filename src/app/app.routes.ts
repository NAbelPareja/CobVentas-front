import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductsDetailsComponent } from './pages/products-details/products-details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsParchesComponent } from './pages/products/products-parches/products-parches.component';
import { ProductsPegamentosComponent } from './pages/products/products-pegamentos/products-pegamentos.component';
import { ProductsPesasComponent } from './pages/products/products-pesas/products-pesas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { 
        path: 'products', component: ProductsComponent,
        children: [
            { path: 'parches', component: ProductsParchesComponent },
            { path: 'pegamentos', component: ProductsPegamentosComponent },
            { path: 'pesas', component: ProductsPesasComponent },
        ]
    },
    { path: 'products/:id', component: ProductsDetailsComponent },  // Mover esto al final
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' },
];

