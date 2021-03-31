import { Component } from '@angular/core';
import { InventoryItem, InventoryService } from 'api';
import { Observable } from 'rxjs';
import {v4 as UUID} from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ui';

  inventory$: Observable<InventoryItem[]>;
  newItem: InventoryItem;

  constructor(private inventory: InventoryService) {}

  resetNewItem(): void {
    this.newItem = {
      id: UUID(),
      name: "New item name"
    }
  }

  ngOnInit() {
    this.inventory$ = this.inventory.getInventory();
    this.resetNewItem();
  }

  addInventory(e: Event): void {
    e.preventDefault();
    this.inventory.addInventory(this.newItem).subscribe(()=>{
      this.inventory$ = this.inventory.getInventory();
    });
    this.resetNewItem();
  }
}
