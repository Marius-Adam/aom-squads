import { debounce, isEqual } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import type { Hero } from '@/utils/Types';

interface IUseHeroes {
  heroes: Hero[];
  placeholder: (Hero | undefined)[];
}

export const useHeroes = ({ heroes, placeholder }: IUseHeroes) => {
  const router = useRouter();
  const [selectedSquad, setSelectedSquad] =
    useState<(Hero | undefined)[]>(placeholder);
  const [searchResults, setSearchResults] = useState<Hero[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [idxToUpdate, setIdxToUpdate] = useState<number | undefined>(0);

  const hasPlaceholder = selectedSquad.some((hero) => {
    return hero?.name === 'Placeholder';
  });

  useEffect(() => {
    // if squad contains only placeholders, reset idxToUpdate to 0
    if (isEqual(selectedSquad, placeholder)) {
      setIdxToUpdate(0);
    }
    // set idxToUpdate to the item which is a placeholder
    setIdxToUpdate(
      selectedSquad.findIndex((hero) => hero?.name === 'Placeholder')
    );
  }, [selectedSquad]);

  useEffect(() => {
    const results = heroes.filter((hero) =>
      hero.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(results);
  }, [searchQuery]);

  const handleSelectHero = (name: string) => {
    const selectedHero = heroes.filter((hero) => hero.name === name);
    // only if selectedHero does not already exist
    if (!selectedSquad.includes(selectedHero[0])) {
      setIdxToUpdate((prev) => prev! + 1);
      setSelectedSquad(
        selectedSquad.map((hero, idx) => {
          return idx === idxToUpdate ? selectedHero[0] : hero;
        })
      );
    }
  };

  const handleRemoveHero = (name?: string, idx?: number) => {
    setIdxToUpdate(idx);
    setSelectedSquad(
      selectedSquad.map((hero) => (hero?.name !== name ? hero : placeholder[0]))
    );
  };

  const redirectToResults = () => {
    if (!hasPlaceholder) {
      router.push('/results');
    }
  };

  const handleSearchHero = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(event.target.value);
    },
    400
  );

  return {
    handleSelectHero,
    handleRemoveHero,
    redirectToResults,
    handleSearchHero,
    searchResults,
    selectedSquad,
    hasPlaceholder,
  };
};
