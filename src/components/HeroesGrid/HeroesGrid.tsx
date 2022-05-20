import Image from 'next/image';

import type { Hero } from '@/utils/Types';

import Search from '../Search';
import css from './HeroesGrid.module.css';

interface IHeroesGrid {
  heroes: Hero[];
  selectHero: (name: string, idx: number) => void;
  searchHero: React.ChangeEventHandler<HTMLInputElement>;
}

const HeroesGrid = ({ heroes, selectHero, searchHero }: IHeroesGrid) => {
  return (
    <div className={css.heroesGrid__wrapper}>
      <div className={css.stickyShadow} />
      <Search onChange={searchHero} />
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
    </div>
  );
};

export default HeroesGrid;
