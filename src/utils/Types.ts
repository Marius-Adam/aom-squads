export interface IHero {
  name: string;
  class: string;
  faction: string;
  brotherhood: string[] | null[];
}

export interface ISquad {
  name: string;
  squadHeroes: IHero[];
}
