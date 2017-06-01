import * as _ from 'lodash'

export class Aukcja {
  private _id: string;
  private tytul: string;
  private pozycje: PozycjaSprzedazy[] = [];

  constructor(id: string, tytul: string, ...images) {
    this._id = id;
    this.tytul = tytul;
    this.pozycje.concat(images);
  }
  public dodajPozycje(pozycja: PozycjaSprzedazy) {
    this.pozycje.push(pozycja);
  }
  public usunPozycje(pozycja: PozycjaSprzedazy) {
    this.pozycje.splice(this.pozycje.findIndex((elem => elem.imageUrl === pozycja.imageUrl)), 1)
  }



}
export interface PozycjaSprzedazy {
  imageUrl: string[];
  opis: string;


}