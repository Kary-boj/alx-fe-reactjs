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

  const q = query.join(' '); // Join all query parameters into one string

  try {
    // Manually build the URL with the query string and pagination
    const url = `https://api.github.com/search/users?q=${q}&page=${page}&per_page=10`;

    // Make the request to the API with the URL
    const response = await axios.get(url);
    return response.data; // Return the search result
  } catch (error) {
    console.error('Error fetching users:', error); // Log the error
    throw error; // Rethrow the error to be handled elsewhere
  }
};
