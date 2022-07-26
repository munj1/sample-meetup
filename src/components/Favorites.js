import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card";
import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

const Favorites = () => {
  const ctx = useContext(FavoritesContext);
  console.log("context.favorites", ctx.favorites);
  console.log("context.totalFavorites", ctx.totalFavorites);

  if (!ctx) {
    return <div>isLoading...</div>;
  } else {
    return (
      <>
        {ctx.favorites.map((meetup, i) => {
          return <Card {...meetup} key={i} />;
        })}
      </>
    );
  }
};

export default Favorites;
