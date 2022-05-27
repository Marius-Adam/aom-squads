import { isEqual } from 'lodash';
import { useEffect, useState } from 'react';

import type { Hero, Squad } from '@/utils/Types';

interface IUseSquads {
  selectedSquad: (Hero | undefined)[];
  allSquads: Squad[];
}

export const useSquads = ({ selectedSquad, allSquads }: IUseSquads) => {
  const [squadName, setSquadName] = useState<string | undefined>('');

  useEffect(() => {
    const selectedSquadHeroes = selectedSquad.map((hero) => hero?.name);

    const heroSquads = allSquads.filter((squad) =>
      isEqual(squad.squadHeroes.sort(), selectedSquadHeroes.sort())
    );

    setSquadName(heroSquads[0]?.name);
  }, [selectedSquad]);

  return { squadName };
};
