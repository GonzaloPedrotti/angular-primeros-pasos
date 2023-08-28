import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/db.services';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})
export class MainPageComponent {

    constructor(
        private dbzService: DbzService
    ) { }

    get characters(): Character[] {
        console.log(this.dbzService.characters)
        return [...this.dbzService.characters];
    }

    onDeleteCharacter(c: Character): void {
        this.dbzService.deleteCharacterById(c.id!)
    }

    onNewCharacter( character: Character ) {
        this.dbzService.addCharacter(character)
    }

}