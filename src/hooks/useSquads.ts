import { debounce, isEqual } from 'lodash';
import { useEffect, useState } from 'react';

import { placeholder } from '@/api/heroes';
import type { IHero, ISquad } from '@/utils/Types';

interface IUseSquads {
  selectedHeroes: (IHero | undefined)[];
  allSquads: ISquad[];
}

export const useSquads = ({ selectedHeroes, allSquads }: IUseSquads) => {
  const [squadName, setSquadName] = useState<string | undefined>('');
  const [selectedSquad, setSelectedSquad] = useState<IHero[] | undefined>(
    placeholder
  );
  const [squadSearchResults, setSquadSearchResults] = useState<ISquad[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const sortAlphabetically = (arr: (IHero | undefined)[]) => {
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

  useEffect(() => {
    const results = allSquads.filter((squad) =>
      squad.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSquadSearchResults(results);
  }, [searchQuery]);

  const isSquadSelected = selectedSquad?.some((hero) => {
    return hero?.name === 'Placeholder';
  });

  const handleSelectSquad = (name: string) => {
    const matchedSquad = allSquads.filter((squad) => squad.name === name);
    setSquadName(matchedSquad[0]?.name);
    setSelectedSquad(matchedSquad[0]?.squadHeroes);
  };

  const handleSearchSquad = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    400
  );

  const resetSquadSelection = () => {
    setSelectedSquad(placeholder);
  };

  return {
    handleSelectSquad,
    resetSquadSelection,
    setSquadName,
    squadName,
    selectedSquad,
    isSquadSelected,
    handleSearchSquad,
    squadSearchResults,
  };
};
