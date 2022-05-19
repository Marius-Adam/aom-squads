import { isEqual } from 'lodash';
import Router from 'next/router';
import { useEffect, useState } from 'react';

import { heroes, placeholder } from '@/api/heroes';
import Button from '@/components/Button';
import HeroesGrid from '@/components/HeroesGrid';
import MotionDiv from '@/components/MotionDiv';
import Squad from '@/components/Squad';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import type { Hero } from '@/utils/Types';

const Index = () => {
  const [squad, setSquad] = useState<(Hero | undefined)[]>(placeholder);
  const [idxToUpdate, setIdxToUpdate] = useState<number | undefined>(0);

  useEffect(() => {
    // if squad contains only placeholders, reset idxToUpdate to 0
    if (isEqual(squad, placeholder)) {
      setIdxToUpdate(0);
    }
    // set idxToUpdate to the item which is a placeholder
    setIdxToUpdate(squad.findIndex((hero) => hero?.name === 'Placeholder'));
  }, [squad]);

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

  const hasPlaceholder = squad.some((hero) => {
    return hero?.name === 'Placeholder';
  });

  const redirectToResults = () => {
    if (!hasPlaceholder) {
      Router.push('/results');
    }
  };

  return (
    <Main
      meta={
        <Meta
          title="AOM Squads"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <MotionDiv>
        <HeroesGrid heroes={heroes} selectHero={handleSelectHero} />
        <Squad squad={squad} removeHero={handleRemoveHero} />
        <div className="mt-10 flex justify-center">
          <Button disabled={hasPlaceholder} onClick={redirectToResults}>
            Generate Squads
          </Button>
        </div>
      </MotionDiv>
    </Main>
  );
};

export default Index;
