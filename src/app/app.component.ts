import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReceipeCart';

  loadedfeature='recipe';

  onNavigate(feature:string){
    this.loadedfeature=feature;
    console.log(this.loadedfeature);
  }
}
