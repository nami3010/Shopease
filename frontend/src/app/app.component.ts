import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  constructor(private metaTagService:Meta) {
    
  }
  ngOnInit(){
    this.metaTagService.addTags([
      { name: 'keywords', content: 'ecommerce, easyshop, online shopping, Retail, Shopping Cart' },
      { name: 'robots', content: 'index, follow' }
    ])
  }

}
