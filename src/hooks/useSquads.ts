import { isEqual } from 'lodash';
import { useEffect, useState } from 'react';

import type { Hero, Squad } from '@/utils/Types';

interface IUseSquads {
  selectedHeroes: (Hero | undefined)[];
  allSquads: Squad[];
}

export const useSquads = ({ selectedHeroes, allSquads }: IUseSquads) => {
  const [squadName, setSquadName] = useState<string | undefined>('');

  const sortAlphabetically = (arr: (Hero | undefined)[]) => {
    const sortedArr = arr.sort((a, b) => {
      const nameA = a?.name.toLowerCase();
      const nameB = b?.name.toLowerCase();
      return nameA! > nameB! ? 1 : -1;
    });
    return sortedArr;
  };

  useEffect(() => {
    const selectedSquadHeroes = selectedHeroes.map((hero) => hero);

    const heroesSquadName = allSquads.filter((squad) =>
      isEqual(
        sortAlphabetically(squad.squadHeroes),
        sortAlphabetically(selectedSquadHeroes)
      )
    );

    setSquadName(heroesSquadName[0]?.name);
  }, [selectedHeroes]);

  return { squadName };
};
