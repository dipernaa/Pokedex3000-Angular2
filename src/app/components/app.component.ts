import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../services/services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showBackButton: boolean;
  title: string;

  constructor(private layoutService: LayoutService, private location: Location) {}

  ngOnInit(): void {
    this.layoutService.showBackButton$.subscribe(showBackButton => {
      this.showBackButton = showBackButton
    });
    this.layoutService.title$.subscribe(title => {
      this.title = title
    });
  }

  goBack(): void {
    this.location.back();
  }
}
