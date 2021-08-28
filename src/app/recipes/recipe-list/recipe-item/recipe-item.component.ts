import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!:{name: string, description: string, imagePath: string};
  @Output() recipeClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick() {
    this.recipeClick.emit();
  }
}
