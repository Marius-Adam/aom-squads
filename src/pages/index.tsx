import router from 'next/router';
import { useState } from 'react';

import { heroes, placeholder } from '@/api/heroes';
import { allSquads } from '@/api/squads';
import Button from '@/components/Button';
import HeroesGrid from '@/components/HeroesGrid';
import MotionDiv from '@/components/MotionDiv';
import Search from '@/components/SearchBar';
import Squad from '@/components/Squad';
import SquadsPanel from '@/components/SquadsPanel';
import { useHeroes } from '@/hooks/useHeroes';
import { useSquads } from '@/hooks/useSquads';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const [view, setView] = useState<'heroes' | 'squads'>('heroes');

  const {
    handleSelectHero,
    handleRemoveHero,
    resetHeroSelection,
    handleSearchHero,
    heroSearchResults,
    hasPlaceholder,
    selectedHeroes,
  } = useHeroes({ heroes, placeholder });

  const {
    handleSelectSquad,
    resetSquadSelection,
    setSquadName,
    squadName,
    selectedSquad,
    isSquadSelected,
    handleSearchSquad,
    squadSearchResults,
  } = useSquads({
    selectedHeroes,
    allSquads,
  });

  const handleChangeView = () => {
    if (view === 'heroes') {
      setView('squads');
      resetSquadSelection();
    }

    if (view === 'squads') {
      setView('heroes');
      resetHeroSelection();
    }
    setSquadName('');
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
        <div className="panel__wrapper">
          <Search
            onChange={view === 'heroes' ? handleSearchHero : handleSearchSquad}
            changeView={handleChangeView}
            view={view}
          />
          {view === 'heroes' ? (
            <HeroesGrid
              heroes={heroSearchResults}
              selectHero={handleSelectHero}
            />
          ) : (
            <SquadsPanel
              squads={squadSearchResults}
              selectSquad={handleSelectSquad}
            />
          )}
        </div>
        <div className="mt-8 md:mt-20">
          <Squad
            squad={view === 'heroes' ? selectedHeroes : selectedSquad}
            removeHero={view === 'heroes' ? handleRemoveHero : undefined}
            title={squadName}
          />
        </div>
        <div className="mt-8 flex justify-center">
          <Button
            disabled={view === 'heroes' ? hasPlaceholder : isSquadSelected}
            onClick={() => router.push('/results')}
          >
            Generate Recommendations
          </Button>
        </div>
      </MotionDiv>
    </Main>
  );
};

export default Index;
