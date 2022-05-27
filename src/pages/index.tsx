import { heroes, placeholder } from '@/api/heroes';
import { allSquads } from '@/api/squads';
import Button from '@/components/Button';
import HeroesGrid from '@/components/HeroesGrid';
import MotionDiv from '@/components/MotionDiv';
import Squad from '@/components/Squad';
import { useHeroes } from '@/hooks/useHeroes';
import { useSquads } from '@/hooks/useSquads';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const {
    handleSearchHero,
    searchResults,
    handleSelectHero,
    handleRemoveHero,
    hasPlaceholder,
    redirectToResults,
    selectedSquad,
  } = useHeroes({ heroes, placeholder });

  const { squadName } = useSquads({ selectedSquad, allSquads });

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
        <HeroesGrid
          heroes={searchResults}
          selectHero={handleSelectHero}
          searchHero={handleSearchHero}
        />
        <Squad
          squad={selectedSquad}
          removeHero={handleRemoveHero}
          title={squadName}
        />
        <div className="mt-8 flex justify-center">
          <Button disabled={hasPlaceholder} onClick={redirectToResults}>
            Generate Recommendations
          </Button>
        </div>
      </MotionDiv>
    </Main>
  );
};

export default Index;
