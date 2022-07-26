import React, { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (fav) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

// context를 제공하고, update하는 역할도함
//value property를 통해 값이 전달됨. 만약 value property가 변하면 컴포넌트 모두가 업데이트되긴함
export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  //useState 상태업데이트 즉각적X -> 상태 업데이트 함수 안에 다시 함수를 넣어줘야해
  //이렇게 해야 올바른 순서로 react에 의해 실행됨. 항상 최신 스냅샷을 받을 수 있음
  function addFavoriteHandler(fav) {
    setUserFavorites((prevFavs) => {
      return [...prevFavs, fav];
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevFavs) => {
      return prevFavs.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
