// Base URL
const base_url = "https://api.rawg.io/api";
const api_key = `key=${process.env.REACT_APP_API_KEY}`;
//6735a05126134edfabc2f76eeada4681

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

//Date Format
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
// const lastWeek = `${currentYear}-${currentMonth}-${
//   currentDay - 7 <= 0 ? 1 : currentDay - 7
// }`;

// const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const upcomingYear = `${currentYear + 2}-12-31`;

//Popular Games
const popular_games = `ordering=-relevance&page_size=8&page=1`;

export const popularGamesURL = () => {
  return `${base_url}/games/lists/main?discover=true&${api_key}&${popular_games}`;
};

// All games
export const allGamesURL = (page, sort, genres) => {
  if (sort === "released") {
    if (genres === "") {
      const all_games = `ordering=-released&page_size=18&page=${page}`;
      return `${base_url}/games?discover=true&${api_key}&${all_games}`;
    } else {
      const all_games = `genres=${genres}&ordering=-released&page_size=18&page=${page}`;
      return `${base_url}/games?discover=true&${api_key}&${all_games}`;
    }
  } else {
    if (genres === "") {
      const all_games = `ordering=-${sort}&page_size=18&page=${page}`;
      return `${base_url}/games?discover=true&${api_key}&${all_games}`;
    } else {
      const all_games = `genres=${genres}&ordering=-${sort}&page_size=18&page=${page}`;
      return `${base_url}/games?discover=true&${api_key}&${all_games}`;
    }
  }
};

// Get genre list
export const genreListURL = () => {
  return `${base_url}/genres?${api_key}`;
};

// Get game details
export const gameDetailsURL = (id) => {
  return `${base_url}/games/${id}?${api_key}`;
};

// Get game screenshots
export const gamescreenshotsURL = (id) => {
  return `${base_url}/games/${id}/screenshots?${api_key}`;
};

// Get game video
export const gamevideoURL = (id) => {
  return `${base_url}/games/${id}/movies?${api_key}`;
};

// Get new games
export const newgamesURL = (page, genre) => {
  return `${base_url}/games/lists/recent-games-past?discover=true&${api_key}&genres=${genre}&ordering=-added&page=${page}&page_size=18`;
};

// Get upcming games
export const upcomingGamesURL = (page, genres) => {
  if (genres.length <= 0) {
    return `${base_url}/games?${api_key}&dates=${currentDate},${upcomingYear}&ordering=-released&page_size=18&page=${page}`;
  } else {
    return `${base_url}/games?${api_key}&dates=${currentDate},${upcomingYear}&ordering=-released&genres=${genres}&page_size=18&page=${page}`;
  }
};

// Get searched games
export const searchedGamesURL = (page, search) => {
  return `${base_url}/games?${api_key}&ordering=-relevance&page_size=18&page=${page}&search_precise&search=${search}`;
};
