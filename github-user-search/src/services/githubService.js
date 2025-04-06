import axios from 'axios';

export const fetchUserData = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};

export const fetchAdvancedUsers = async (username, location, minRepos, page = 1) => {
  let query = [];

  if (username) query.push(`${username} in:login`);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>=${minRepos}`);

  const q = query.join(' ');

  const response = await axios.get(`https://api.github.com/search/users`, {
    params: {
      q,
      page,
      per_page: 10,
    },
  });

  return response.data;
};
