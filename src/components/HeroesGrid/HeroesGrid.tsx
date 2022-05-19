import Image from 'next/image';

import type { Hero } from '@/utils/Types';

import css from './HeroesGrid.module.css';

interface IHeroesGrid {
  heroes: Hero[];
  selectHero: (name: string, idx: number) => void;
}

const HeroesGrid = ({ heroes, selectHero }: IHeroesGrid) => {
  return (
    <div className={css.heroesGrid}>
      {heroes.map((hero, idx) => {
        return (
          <div
            className={css.heroesGrid__item}
            key={`${hero.name}-${idx}`}
            onClick={() => selectHero(hero.name, idx)}
          >
            <Image
              alt="hero"
              height="128px"
              width="128px"
              src={`/assets/images/heroes/${hero.name}.jpg`}
              objectFit="cover"
              blurDataURL={`/assets/images/heroes/${hero.name}.jpg`}
              placeholder="blur"
            />
          </div>
        );
      })}
    </div>
  );
};

export default HeroesGrid;
