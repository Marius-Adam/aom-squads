import Image from 'next/image';

import type { IHero } from '@/utils/Types';

import MotionDiv from '../MotionDiv';
import css from './HeroesGrid.module.css';

interface IHeroesGrid {
  heroes: IHero[];
  selectHero: (name: string, idx: number) => void;
}

const HeroesGrid = ({ heroes, selectHero }: IHeroesGrid) => {
  return (
    <MotionDiv>
      <div className={css.heroesGrid__wrapper}>
        <div className={css.stickyShadow} />
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
    </MotionDiv>
  );
};

export default HeroesGrid;
