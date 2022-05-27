export interface Hero {
  name: string;
  class: string;
  faction: string;
  brotherhood: string[] | null[];
}

export interface Squad {
  name: string;
  squadHeroes: string[];
}
