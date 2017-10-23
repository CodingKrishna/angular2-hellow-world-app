import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular 2 hello world app';
	userName = 'Krishna';
	
	onGetAppNameClicked(appName : string){
		this.title = "Pioneer Coders App";
		this.title = appName;
	}
}
