import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  MatchCard,
  MatchCardList,
  MatchDate,
  MatchInfo,
  MatchView,
} from './Match.style';

const Match = (): JSX.Element => {
  return (
    <MatchView>
      <MatchDate>3월 29일 수요일</MatchDate>
      <MatchCardList horizontal>
        <TouchableOpacity>
          <MatchCard>
            <MatchInfo>21:00</MatchInfo>
            <MatchInfo>영등포 더에프</MatchInfo>
            <MatchInfo>6vs6 / 3파전</MatchInfo>
            <MatchInfo>남녀모두</MatchInfo>
          </MatchCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <MatchCard>
            <MatchInfo>21:00</MatchInfo>
            <MatchInfo>영등포 더에프</MatchInfo>
            <MatchInfo>6vs6 / 3파전</MatchInfo>
            <MatchInfo>남녀모두</MatchInfo>
          </MatchCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <MatchCard>
            <MatchInfo>21:00</MatchInfo>
            <MatchInfo>영등포 더에프</MatchInfo>
            <MatchInfo>6vs6 / 3파전</MatchInfo>
            <MatchInfo>남녀모두</MatchInfo>
          </MatchCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <MatchCard>
            <MatchInfo>21:00</MatchInfo>
            <MatchInfo>영등포 더에프</MatchInfo>
            <MatchInfo>6vs6 / 3파전</MatchInfo>
            <MatchInfo>남녀모두</MatchInfo>
          </MatchCard>
        </TouchableOpacity>
        <TouchableOpacity>
          <MatchCard>
            <MatchInfo>21:00</MatchInfo>
            <MatchInfo>영등포 더에프</MatchInfo>
            <MatchInfo>6vs6 / 3파전</MatchInfo>
            <MatchInfo>남녀모두</MatchInfo>
          </MatchCard>
        </TouchableOpacity>
      </MatchCardList>
    </MatchView>
  );
};

export default Match;
