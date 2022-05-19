import Image from 'next/image';

import type { Hero } from '@/utils/Types';

import css from './Squad.module.css';

interface ISquad {
  squad: (Hero | undefined)[];
  removeHero: (name?: string | undefined, idx?: number) => void;
}

const Squad = ({ squad, removeHero }: ISquad) => {
  return (
    <div className={css.squad}>
      {squad?.map((hero, idx) => {
        return (
          <div
            key={`${hero?.name}-${idx}`}
            className={css.squad__item}
            onClick={() => removeHero(hero?.name, idx)}
          >
            <Image
              alt="hero"
              height="128px"
              width="128px"
              src={`/assets/images/heroes/${hero?.name}.jpg`}
              objectFit="cover"
              blurDataURL={`/assets/images/heroes/${hero?.name}.jpg`}
              placeholder="blur"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Squad;
