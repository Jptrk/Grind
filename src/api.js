// Base URL
const base_url = "https://api.rawg.io/api";
const api_key = `key=7892a49110284f67962c1d2e8bbfabc7`;

//Getting the date
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

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

//Date Format
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastWeek = `${currentYear}-${currentMonth}-${
  currentDay - 7 <= 0 ? 1 : currentDay - 7
}`;

const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `dates=${lastWeek},${currentDate}&ordering=-metacritic&page_size=8`;

export const popularGamesURL = () => {
  return `${base_url}/games?${api_key}&${popular_games}`;
};
