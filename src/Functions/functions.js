export const smallerImage = (imagePath, size) => {
  if (imagePath !== null) {
    return imagePath.replace("media/games", `media/resize/${size}/-/games`);
  } else {
    return imagePath;
  }
};

export const releaseDate = (date) => {
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const x = new Date(date);
  return `${monthNames[x.getMonth()]} ${x.getDate()}, ${x.getFullYear()}`;
};
