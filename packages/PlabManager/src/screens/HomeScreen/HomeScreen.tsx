import { View } from 'react-native';
import React, { useState } from 'react';
import Header from '@components/Header';
import {
  GoalList,
  GoalText,
  GoalView,
  NoMatchAlert,
  SelectMatchView,
  Title,
  UpcomingMatchList,
  UpcomingMatchView,
} from './HomeScreen.style';
import MatchList from '@components/MatchList';

const HomeScreen = (): JSX.Element => {
  const [name] = useState('머시');
  const [matches] = useState([]);

  return (
    <View>
      <Header />
      <UpcomingMatchView>
        <Title>다가오는 {name}님의 매치</Title>
        {matches.length ? (
          <View />
        ) : (
          <UpcomingMatchList>
            <NoMatchAlert>
              대기중인 매치가 없습니다. {'\n'}아래에서 매치를 선택해보세요!
            </NoMatchAlert>
          </UpcomingMatchList>
        )}
      </UpcomingMatchView>
      <SelectMatchView>
        <Title>매치 선택하기 다다</Title>
        <GoalList>
          {[5, 10, 15].map(goal => (
            <GoalView key={goal}>
              <GoalText>{goal}경기 진행</GoalText>
            </GoalView>
          ))}
        </GoalList>
        <MatchList />
      </SelectMatchView>
    </View>
  );
};

export default HomeScreen;
