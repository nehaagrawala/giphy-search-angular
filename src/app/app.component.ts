import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GiphyService, GiphyData } from './giphy.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Gif Search';
  public searchValue: string = 'angular';
  public giphies: string[] = [];
  public error;
  public errorOccured: boolean = false;

  constructor(private httpClient: HttpClient, private giphyService: GiphyService) { }

  ngOnInit() {
    this.performSearch(this.searchValue);
  }
  public performSearch(searchTerm): void {
    this.giphyService.getGiphy(searchTerm).subscribe((res: any) => {
      this.giphies = res.data;
      this.errorOccured = false;
    },
      error => 
      {
        this.error = error;
        this.errorOccured = true;
      }
    );
  }
}
