import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchVideogames = createAsyncThunk(
  'videogames/fetch',
  async ({ page, name, page_size, filter, order, genres }) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/videogames?page=${page}` +
          `&${page_size ? `page_size=${page_size}` : 'page_size'}` +
          `&${name ? `name=${name}` : 'name'}` +
          `&${filter ? `filter=${filter}` : 'filter'}` +
          `&${order ? `order=${order}` : 'order'}` +
          `&${genres.length ? `genres=${genres.join('&genres=')}` : 'genres'}`,
      );
      const videogames = await res.json();
      return videogames;
    } catch (error) {
      return [];
    }
  },
);

export const fetchVideogameById = createAsyncThunk(
  'videogame/fetch',
  async id => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/videogames/${id}`,
      );
      const videogame = await res.json();
      return videogame;
    } catch (error) {
      return {};
    }
  },
);

export const fetchGenres = createAsyncThunk('genres/fetch', async () => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/genres`);
    const genres = await res.json();
    return genres;
  } catch (error) {
    return [];
  }
});

export const postVideogame = createAsyncThunk(
  'videogame/post',
  async videogame => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/videogames`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(videogame),
      });
    } catch (error) {
      return {};
    }
  },
);

export const deleteVideogame = createAsyncThunk(
  'videogame/delete',
  async id => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/videogames/${id}`,
        {
          method: 'DELETE',
          credentials: 'include',
        },
      );
      return id;
    } catch (error) {
      return {};
    }
  },
);

export const updateVideogame = createAsyncThunk(
  'videogame/update',
  async videogame => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/videogames/${videogame.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(videogame),
          credentials: 'include',
        },
      );
      return videogame;
    } catch (error) {
      return {};
    }
  },
);

export const authLogIn = createAsyncThunk('auth/login', async user => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    credentials: 'include',
  });
  const data = await res.json();
  return data;
});

export const authToken = createAsyncThunk('auth/token', async () => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/auth/check-session`,
    {
      method: 'POST',
      credentials: 'include',
    },
  );
  const data = await res.json();
  return data;
});
