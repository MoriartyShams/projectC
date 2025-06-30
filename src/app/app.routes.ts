import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { About } from './about/about';
import { Portfolio } from './portfolio/portfolio';

export const routes: Routes = [

    { path: "", component: Home },
    { path: "contact", component: Contact},
    { path: "about", component: About },
    {path:"portfolio", component: Portfolio},
];
