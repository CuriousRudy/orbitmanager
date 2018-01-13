import React from 'react';
import reduxThunk from 'reduxThunk';
const API_ROOT = 'https://www.bungie.net/Platform/Destiny2/';

// fetch to get the user's characters
fetch(`API_ROOT/${platform}/Profile/${membershipId}/?components=100`)
  .then(res => res.json())
  .then(player => player.Response.profile.data.characterIds);

fetch(
  `API_ROOT/${platform}/Profile/${membershipId}/Character/${characterId}/?components=100`
)
  .then(res => res.json())
  .then(player =>
    this.dispatch({
      type: 'SET_CHARACTER',
      light: player.Response.character.data.light,
      race: player.Response.character.data.raceHash,
      gender: player.Response.character.data.genderHash,
      class: player.Response.character.data.classHash,
      level: player.Response.character.data.levelProgression.level,
      playerEmblem: player.Response.character.data.emblemBackgroundPath
    })
  );
