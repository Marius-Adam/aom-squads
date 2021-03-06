import classNames from 'classnames';
import Image from 'next/image';
import type { MouseEventHandler } from 'react';

import type { IHero } from '@/utils/Types';

import MotionDiv from '../MotionDiv/MotionDiv';
import css from './Squad.module.css';

interface ISquad {
  title?: string;
  squad: (IHero | undefined)[] | undefined;
  removeHero?: (
    name?: string | undefined,
    idx?: number | undefined
  ) => MouseEventHandler<HTMLDivElement> | undefined | void;
}

const Squad = ({ squad, removeHero, title }: ISquad) => {
  const handleRemoveHero = (idx: number, hero?: string) => {
    return removeHero && removeHero(hero, idx);
  };

  return (
    <>
      <div className={css.squad}>
        {title ? (
          <h1 className={css.squad__title}>{title}</h1>
        ) : (
          <div className="h-11" />
        )}

        <div className={css.squad__wrapper}>
          {squad?.map((hero, idx) => {
            return (
              <MotionDiv key={`${hero?.name}-${idx}`}>
                <div
                  className={classNames(css.squad__item, {
                    'transition-transform': hero?.name !== 'Placeholder',
                    'hover:scale-': hero?.name !== 'Placeholder',
                  })}
                  onClick={() => handleRemoveHero(idx, hero?.name)}
                >
                  <Image
                    alt="hero"
                    height="128px"
                    width="128px"
                    src={`/assets/images/heroes/${hero?.name}.jpg`}
                    objectFit={
                      hero?.name !== 'Placeholder' ? 'cover' : 'initial'
                    }
                    blurDataURL={`/assets/images/heroes/${hero?.name}.jpg`}
                    placeholder="blur"
                  />
                </div>
              </MotionDiv>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Squad;
