import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/db.services';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public characterDelete: EventEmitter<Character> = new EventEmitter();

  constructor(private dbzService: DbzService) {

  }

  onDeleteCharacter(c: Character) {
    this.characterDelete.emit(c);
    // this.dbzService.deleteCharacterById(c);
  }

}
