import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipeBook';
  loadFeature = 'Recipes'
  
  appNavigator(feature: string) {
    this.loadFeature = feature;
  } 
}


