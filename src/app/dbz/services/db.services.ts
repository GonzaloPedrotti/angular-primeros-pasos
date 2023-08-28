import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    constructor() { }


    public characters: Character[] =
        [
            {

                id: uuid(),
                name: 'Krillin',
                power: 1000
            },
            {
                id: uuid(),
                name: 'Goku',
                power: 9500
            },
            {
                id: uuid(),
                name: 'Vegeta',
                power: 7500
            }
        ]

    public getCharacter(): Character[] {
        return this.characters;
    }

    public addCharacter(e: Character) {
        const newCharacter: Character = {
            id: uuid(),
            ...e
        }
        this.characters.push(newCharacter);
    }

    public deleteCharacterById(id: string) {
        this.characters = this.characters.filter((x: Character) => x.id !== id);
    }

}