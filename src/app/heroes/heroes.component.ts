import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import { HEROES} from "../mock-heros";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{

  ngOnInit(): void {
  }
  heroes: Hero[] = HEROES;

  selectedHero?: Hero; //选择的英雄
  onSelect(hero: Hero): void{
      this.selectedHero = hero;
  }


}
