/* eslint-disable no-unused-vars */
import React, {
  useState, useCallback, useEffect, memo, useRef,
} from 'react';

import Button from '../Button';
import {
  Container, ContainerInput, DescriptionDiv, Tittle, Status, StatusText,
} from './styles';
import TextInput from '../TextInput';

const TranslateTest = memo(() => {
  const [isStart, setIsStart] = useState<boolean>(false);
  const [aroundScore, setAroundScore] = useState<number>(0);
  const [status, setStatus] = useState<string>('Нажмите старт для начала теста');
  const [rightTranslate, setRightTranslate] = useState<boolean>();
  const [inputValue, setInputValue] = useState<string>('');
  const [index, setIndex] = useState<number>(0);
  const [fail, setFail] = useState<number>(0);
  const [scoreArr, setScoreArr] = useState<Array<number>>([]);
  const focusRef = useRef<HTMLInputElement>(null);

  const MOCK_DATA: object = {
    tree: 'дерево',
    grass: 'трава',
    mother: 'мама',
    father: 'папа',
    brother: 'брат',
    syringe: 'шприц',
    medicine: 'лекарство',
    glass: 'стекло',
    train: 'поезд',
    stomach: 'желудок',
    teeth: 'зубы',
    hair: 'волосы',
    leg: 'нога',
  };

  const keys: string[] = Object.keys(MOCK_DATA);
  const values :string[] = Object.values(MOCK_DATA);

  const pushingArray = useCallback(() => {
    setScoreArr([...scoreArr, 5 - fail]);
  }, [scoreArr, fail]);

  const calcScore = useCallback(() => {
    const score = scoreArr.reduce((a, b) => (a + b)) / scoreArr.length;
    setAroundScore(Math.round(score));
  }, [scoreArr]);

  const callPrompt = useCallback((): void => {
    setIndex(0);
    setFail(0);
    setScoreArr([]);
    setIsStart(true);
  }, []);

  const onAnswer = useCallback(() => {
    if (inputValue.toLowerCase() === values[index]) {
      setRightTranslate(true);
      pushingArray();
      setIndex(index + 1);
      setInputValue('');
    } else {
      setRightTranslate(false);
      setFail(fail + 1);
      setInputValue('');
    }
    if (focusRef && focusRef.current) {
    focusRef.current.focus();
  }
}, [inputValue, index, fail]);

  useEffect(() => {
    if (fail >= 3) {
      setIndex(index + 1);
      setFail(0);
      pushingArray();
    }
  }, [index, fail]);

  useEffect(() => {
    if (index === keys.length) {
      setIsStart(false);
      calcScore();
      onAnswer();
      setStatus(`Тест закончен, ваша оценка ${aroundScore}`);
    }
  }, [index, calcScore, onAnswer]);

  useEffect(() => {
    if (isStart) {
      setStatus(`Переведите слово ${keys[index]}`);
      if (index >= 1 && index < keys.length) {
        setStatus(`Переведите слово ${keys[index]}`);
      }
    }
  }, [isStart, index]);

  return (
    <Container>
      <DescriptionDiv>
        <Tittle>
          Тест на знание слов
        </Tittle>
        <Button
          disabled={isStart}
          onPress={callPrompt}
          text="Старт"
        />
      </DescriptionDiv>
      <ContainerInput>
        <TextInput
          ref={focusRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          disabled={!isStart}
          onPress={onAnswer}
          text="Ввод"
        />
      </ContainerInput>
      <Status>
        <h3>{status}</h3>
      </Status>
      {isStart && rightTranslate !== undefined && (
      <Status>
        <StatusText>
          {rightTranslate ? 'Good' : 'Bad'}
        </StatusText>
        <StatusText>
          {rightTranslate ? 'next word' : 'try again'}

        </StatusText>
      </Status>
      )}
    </Container>
  );
});

export default TranslateTest;
