import { debounce, isEqual } from 'lodash';
import { useEffect, useState } from 'react';

import type { IHero } from '@/utils/Types';

interface IUseHeroes {
  heroes: IHero[];
  placeholder: (IHero | undefined)[];
}

export const useHeroes = ({ heroes, placeholder }: IUseHeroes) => {
  const [selectedHeroes, setSelectedHeroes] =
    useState<(IHero | undefined)[]>(placeholder);
  const [heroSearchResults, setHeroSearchResults] = useState<IHero[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [idxToUpdate, setIdxToUpdate] = useState<number | undefined>(0);

  const hasPlaceholder = selectedHeroes.some((hero) => {
    return hero?.name === 'Placeholder';
  });

  useEffect(() => {
    // if squad contains only placeholders, reset idxToUpdate to 0
    if (isEqual(selectedHeroes, placeholder)) {
      setIdxToUpdate(0);
    }
    // set idxToUpdate to the item which is a placeholder
    setIdxToUpdate(
      selectedHeroes.findIndex((hero) => hero?.name === 'Placeholder')
    );
  }, [selectedHeroes]);

  useEffect(() => {
    const results = heroes.filter((hero) =>
      hero.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setHeroSearchResults(results);
  }, [searchQuery]);

  const handleSelectHero = (name: string) => {
    const selectedHero = heroes.filter((hero) => hero.name === name);
    // only if selectedHero does not already exist
    if (!selectedHeroes.includes(selectedHero[0])) {
      setIdxToUpdate((prev) => prev! + 1);
      setSelectedHeroes(
        selectedHeroes.map((hero, idx) => {
          return idx === idxToUpdate ? selectedHero[0] : hero;
        })
      );
    }
  };

  const handleRemoveHero = (name?: string, idx?: number) => {
    setIdxToUpdate(idx);
    setSelectedHeroes(
      selectedHeroes.map((hero) =>
        hero?.name !== name ? hero : placeholder[0]
      )
    );
  };

  const handleSearchHero = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    400
  );

  const resetHeroSelection = () => {
    setSelectedHeroes(placeholder);
  };

  return {
    handleSelectHero,
    handleRemoveHero,
    resetHeroSelection,
    handleSearchHero,
    heroSearchResults,
    selectedHeroes,
    hasPlaceholder,
  };
};
