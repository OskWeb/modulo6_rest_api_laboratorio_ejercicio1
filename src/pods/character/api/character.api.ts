import { Character } from './character.api-model';

export const getCharacter = async (id: string): Promise<Character> => {
  //cambiar por API
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  if (response.ok) {
    return await response.json();
  } else {
    throw Error(response.statusText);
  }
};
