import { Component, OnInit } from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];
  selectedHero?: Hero; //选择的英雄
  constructor(private heroService: HeroService,
              private messageService: MessageService) {}

  //初始化英雄列表
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void{
      this.selectedHero = hero;
      this.messageService.addMessage(`HeroesComponent: Selected hero id: ${hero.id}`);
  }


}
