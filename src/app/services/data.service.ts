import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public buzzWords: any = [];

  constructor() {
    this.buzzWords = [
      {name: 'KPI', description: 'Key performance indicator', category: 'RND'},
      {name: 'IPO', description: 'Initial public offering', category: 'Product'},
      {name: 'YC', description: 'Y Combinator', category: 'Start-up'},
      {name: 'B2B', description: 'Business to Business', category: 'Business'},
      {name: 'B2C', description: 'Business to Customer', category: 'Business'},
      {name: 'Data-Driven Mentality', description: 'The infamous A/B split test is the tip of the iceberg of the data-focused mentality that dominates startups', category: 'Start-up'},
      {name: 'Lean', description: 'The easiest way to think of lean is of a philosophy that eliminates all waste', category: 'Start-up'},
      {name: 'MVP', description: 'A minimum viable product', category: 'Start-up'},
      {name: 'Agile', description: 'A minimum viable product', category: 'Start-up'},
      {name: 'Pivot', description: 'A startup is all about experimentation. Sometimes, you have to change fundamental assumptions', category: 'Start-up'},
      {name: 'Hackathon', description: 'a day-long competition especially observed on weekends to create software and hardware products.', category: 'Start-up'},
      {name: 'SEO', description: 'Search engine optimization (SEO) is the practice of increasing the quantity and quality of traffic to your website through organic search engine results.', category: 'Marketing'},
      {name: 'Customer Journey', description: 'The customer journey is the path of touch points a prospect takes before making a purchase decision.', category: 'Marketing'},
      {name: 'Big Data', description: 'The massive collection of structured and unstructured data that is often difficult to process through traditional means. Data collected from mobile, web browsing, voice data etc.', category: 'Business'},
      {name: 'Deep Dive', description: 'Otherwise known as brainstorming, this one is used by professionals as in “Were going for a deep dive on the Parson\'s account.”', category: 'Business'},
      {name: 'Artificial Intelligence (AI)', description: 'AI refers to the autonomous intelligent behavior of software or machines that have a human-like ability to make decisions and to improve over time by learning from experience', category: 'RND'},
      {name: 'Data Mining', description: 'The concept of discovering patterns from large amounts of data is known as Data Mining.', category: 'RND'},
      {name: 'Machine Learning', description: 'Machine Learning is a type of Artificial Intelligence which gives computer programs the ability to learn from new data without being explicitly programmed to do so.', category: 'RND'},
      {name: 'Sales Funnel', description: 'A sales funnel is an internet marketing method where potential customers are led through a series of events or actions that can be mapped out in the shape of funnel.', category: 'Sales'},
      {name: 'A/B Testing', description: 'A/B testing is the practice of comparing two versions of online content—websites, apps, marketing emails, etc.—in order to see which version performs better. The two versions (A and B) are presented to users at random in order to gauge reactions.', category: 'Marketing'},


    ];
  }
  filterItems(searchTerm, category) {
    return this.buzzWords.filter(buzzword => {
      return buzzword.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 && (category == null || category.name === buzzword.category);
    });
  }

  randomBuzz() {
    this.buzzWords.sort(() => Math.random() - 0.5);
  }
}

