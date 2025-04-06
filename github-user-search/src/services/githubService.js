import axios from 'axios';

// Basic user fetch by username
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('User not found');
  }
};

// Advanced search with filters
export const fetchAdvancedUsers = async (username, location, minRepos, page = 1) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}&per_page=10&page=${page}`
  );

  return response.data; // includes items[], total_count, etc.
};
