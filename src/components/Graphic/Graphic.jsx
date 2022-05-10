import React, { useCallback, useEffect, useState } from "react";
import * as S from "./Graphic.styled";
import Colors from "@styles/colors";

const Graphic = ({ stats, isPlaces }) => {
  const [columns, setColumns] = useState(stats);
  const [currentColumn, setCurrentColomn] = useState(stats[0]);

  const getStats = useCallback((statistics) => {
    const newStats = statistics.slice(0, 3).reverse();
    const maxItem = newStats.slice().sort((a, b) => b.score - a.score)[0];
    const coef = maxItem.score / 100;
    return newStats.map((item) => ({
      ...item,
      score: Math.round((item.score / coef) * 0.9),
      color: item.score === maxItem.score ? Colors.red : Colors.blue,
      isActive: false,
    }));
  }, []);

  const selectColumn = useCallback(
    (column) => {
      const newColumns = columns.map((item) =>
        item.year === column.year
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      );
      setColumns(newColumns);
      setCurrentColomn(stats.find((item) => item.year === column.year));
    },
    [columns, setColumns, setCurrentColomn, stats]
  );

  const getScoreWord = useCallback((number) => {
    return number === 1
      ? "балл"
      : number > 1 && number < 5
      ? "балла"
      : "баллов";
  }, []);

  const getPlacesWord = useCallback((number) => {
    return number === 1 ? "место" : number > 1 && number < 5 ? "места" : "мест";
  }, []);

  const getDiff = useCallback(() => {
    const diffNumber =
      (currentColumn.score -
        stats.find((item) => item.year === currentColumn.year - 1).score || 0) >
      0
        ? `+${
            currentColumn.score -
              stats.find((item) => item.year === currentColumn.year - 1)
                .score || 0
          }`
        : currentColumn.score -
            stats.find((item) => item.year === currentColumn.year - 1).score ||
          0;
    return (
      <>
        {diffNumber !== 0 ? (
          <S.Text mt={16}>
            <S.GreenText>{diffNumber}</S.GreenText>{" "}
            {!isPlaces
              ? getScoreWord(Math.abs(diffNumber))
              : getPlacesWord(Math.abs(diffNumber))}{" "}
            по сравнению с прошлым годом
          </S.Text>
        ) : (
          <S.Text mt={16}>Не изменилось с прошлого года</S.Text>
        )}
      </>
    );
  }, [currentColumn, getScoreWord, getPlacesWord, stats, isPlaces]);

  useEffect(() => {
    setColumns(getStats(stats));
  }, [stats, setColumns, getStats]);

  return (
    <S.Root>
      <S.Graphic>
        {columns &&
          columns.map((column) => (
            <S.Column
              color={column.color}
              height={`${column.score}%`}
              isActive={column.isActive}
              onClick={() => selectColumn(column)}
              key={column.year}
            />
          ))}
      </S.Graphic>
      <S.Block>
        {!isPlaces && (
          <S.Text>
            Проходной балл в {currentColumn.year} году —{" "}
            <S.BoldText>{currentColumn.score}</S.BoldText>
          </S.Text>
        )}
        {isPlaces && (
          <S.Text>
            Бюджетных мест в {currentColumn.year} году —{" "}
            <S.BoldText>{currentColumn.score}</S.BoldText>
          </S.Text>
        )}
        {getDiff()}
      </S.Block>
    </S.Root>
  );
};

export default Graphic;
