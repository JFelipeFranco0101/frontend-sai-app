import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { TabLoginComponent } from './components/tab-login/tab-login.component';

const routes: Routes = [
    { path: 'register', component: TabLoginComponent },
    { path: 'login', component: TabLoginComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
