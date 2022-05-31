import classNames from 'classnames';
import React from 'react';

import type { ISquad } from '@/utils/Types';

import MotionDiv from '../MotionDiv';
import Squad from '../Squad';
import css from './SquadsPanel.module.css';

interface ISquadsPanel {
  squads: ISquad[];
  selectSquad: (name: string) => void;
}

const SquadsPanel = ({ squads, selectSquad }: ISquadsPanel) => {
  return (
    <MotionDiv>
      <div className={css.squadsPanel__wrapper}>
        <div className={css.stickyShadow} />
        <div className={css.squadsPanel}>
          {squads.map((squad, idx) => {
            return (
              <div
                className={classNames(css.squadsPanel__item, {
                  'mt-16': idx !== 0,
                })}
                key={`${squad.name}-${idx}`}
                onClick={() => selectSquad(squad.name)}
              >
                <Squad title={squad.name} squad={squad.squadHeroes} />
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default SquadsPanel;
