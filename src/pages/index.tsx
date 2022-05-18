import { useEffect, useState } from 'react';

import { heroes, placeholder } from '@/api/heroes';
import Button from '@/components/Button/Button';
import HeroesGrid from '@/components/HeroesGrid/HeroesGrid';
import Squad from '@/components/Squad/Squad';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { Hero } from '@/utils/Types';

const Index = () => {
  const [squad, setSquad] = useState<(Hero | undefined)[]>(placeholder);
  const [idxToUpdate, setIdxToUpdate] = useState<number | undefined>(0);

  useEffect(() => {
    // if squad is empty reset idxToUpdate
    if (JSON.stringify(squad) === JSON.stringify(placeholder)) {
      setIdxToUpdate(0);
    }
    // set idxToUpdate to the element which is a placeholder
    setIdxToUpdate(squad.findIndex((hero) => hero?.name === 'Placeholder'));
  }, [squad]);

  const handleHeroSelect = (name: string) => {
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
  console.log(squad);
  return (
    <Main
      meta={
        <Meta
          title="AOM Squads"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <HeroesGrid heroes={heroes} selectHero={handleHeroSelect} />
      <Squad squad={squad} removeHero={handleRemoveHero} />
      <div className="flex justify-center">
        <Button>Button</Button>
      </div>
    </Main>
  );
};

export default Index;
