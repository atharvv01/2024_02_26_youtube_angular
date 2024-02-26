import { Routes } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { SubscribeNavigationComponent } from './components/subscribe-navigation/subscribe-navigation.component';
import { SettingsComponent } from './components/settings/settings.component';

// Define the routes for the application
export const routes: Routes = [
    // Route to the home screen component
    {path:"home",component:HomeScreenComponent},
    // Route to the subscribe navigation component
    {path:"subscribe_navigation",component:SubscribeNavigationComponent},
    // Route to the settings component
    {path:"settings",component:SettingsComponent},
];