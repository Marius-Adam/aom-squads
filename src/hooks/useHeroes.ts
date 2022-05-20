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
  const [squad, setSquad] = useState<(Hero | undefined)[]>(placeholder);
  const [searchResults, setSearchResults] = useState<Hero[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [idxToUpdate, setIdxToUpdate] = useState<number | undefined>(0);

  const hasPlaceholder = squad.some((hero) => {
    return hero?.name === 'Placeholder';
  });

  useEffect(() => {
    // if squad contains only placeholders, reset idxToUpdate to 0
    if (isEqual(squad, placeholder)) {
      setIdxToUpdate(0);
    }
    // set idxToUpdate to the item which is a placeholder
    setIdxToUpdate(squad.findIndex((hero) => hero?.name === 'Placeholder'));
  }, [squad]);

  useEffect(() => {
    const results = heroes.filter((hero) =>
      hero.name.toLowerCase().includes(searchQuery)
    );
    setSearchResults(results);
  }, [searchQuery]);

  const handleSelectHero = (name: string) => {
    const selectedHero = heroes.filter((hero) => hero.name === name);
    // only if selectedHero does not already exist
    if (!squad.includes(selectedHero[0])) {
      setIdxToUpdate((prev) => prev! + 1);
      setSquad(
        squad.map((hero, idx) => {
          return idx === idxToUpdate ? selectedHero[0] : hero;
        })
      );
    }
  };

  const handleRemoveHero = (name?: string, idx?: number) => {
    setIdxToUpdate(idx);
    setSquad(
      squad.map((hero) => (hero?.name !== name ? hero : placeholder[0]))
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
    squad,
    hasPlaceholder,
  };
};
