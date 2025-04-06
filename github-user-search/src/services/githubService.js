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
    const response = await axios.get('https://api.github.com/search/users', {
      params: {
        q, // The query string
        page, // Pagination
        per_page: 10, // Limit to 10 results per page
      },
    });
    return response.data; // Return the API response
  } catch (error) {
    console.error('Error fetching users:', error); // Log any errors
    throw error; // Rethrow error so it can be handled by the calling function
  }
};
