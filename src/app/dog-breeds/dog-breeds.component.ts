import { Component, OnInit } from '@angular/core';
import { DogBreedService } from './dog-breed.service'

@Component({
  selector: 'app-dog-breeds',
  templateUrl: './dog-breeds.component.html',
  styleUrls: ['./dog-breeds.component.scss'],
})
export class DogBreedsComponent implements OnInit {

  public pics: any;
  public searchText: String;
  public searchPic = '../../assets/images/default.png';

  constructor(private dogService: DogBreedService) { }

  ngOnInit() {
    this.getBreedsPic();
  }

  getBreedsPic(): void {
    this.dogService.getBreedsPic()
        .subscribe(response => {
        this.pics = response.message;
    });
  }

  searchByBreed(): void{
    this.dogService.searchByBreed(this.searchText)
        .subscribe(response => {
          if(response.status === "success"){
            this.searchPic = response.message;
          } else {
            this.searchPic = '../../assets/images/default.png';
          }
    });
  }
}
