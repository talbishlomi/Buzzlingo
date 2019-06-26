import {Component, OnInit} from '@angular/core';
import {PopoverComponent} from '../components/popover/popover.component';
import {PopoverController} from '@ionic/angular';
import {DataService} from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  public searchTerm = '';
  public buzzWords: any;
  private selectedCategory: any;

  categoryList = [
    {name: 'RND', icon: 'construct'},
    {name: 'Product', icon: 'briefcase'},
    {name: 'Sales', icon: 'cash'},
    {name: 'Marketing', icon: 'tablet-portrait'},
    {name: 'Start-up',  icon: 'tablet-portrait'},
    {name: 'Business',  icon: 'tablet-portrait'},
  ];


  constructor(public popoverCtrl: PopoverController, private dataService: DataService) {
  }
  ngOnInit() {
    this.dataService.randomBuzz();
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.buzzWords = this.dataService.filterItems(this.searchTerm, this.selectedCategory);
  }

  onClickedCategory(category) {
    if (this.selectedCategory === category) {
      this.selectedCategory = null;
    } else { this.selectedCategory = category; }
    this.setFilteredItems();
  }

  async showPopOver(ev: any, buzz) {
    const popover = await this.popoverCtrl.create({
      component: PopoverComponent,
      event: ev,
      animated: false,
      showBackdrop: true,
      componentProps: {buzz, onCategoryClicked: (category) => this.onPopoverCategoryClicked(category) }
    });
    return await popover.present();
  }

  onPopoverCategoryClicked(categoryName) {
    const category = this.categoryList;
    this.onClickedCategory(category);
    console.log(category);
}


  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      this.dataService.randomBuzz();
      this.setFilteredItems();
      event.target.complete();
    }, 500);
  }
}
