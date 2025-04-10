import React, { useState } from 'react';
import { fetchAdvancedUsers, fetchUserData } from '../services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPage(1);
    setResults([]);
    setLoading(true);
    setError(null);
    await searchUsers(1);
  };

  const searchUsers = async (pageNumber) => {
    try {
      let data;

      if (location || minRepos) {
        // Use advanced search
        data = await fetchAdvancedUsers(username, location, minRepos, pageNumber);
        setResults((prev) => [...prev, ...data.items]);
      } else {
        // Use basic search
        const user = await fetchUserData(username);
        setResults([{ ...user }]);
      }
    } catch {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    setLoading(true);
    await searchUsers(nextPage);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
    <input
        id="username"
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full px-4 py-2 border rounded-md"
        />
    </div>
  <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
        <input
            id="location"
            type="text"
            placeholder="e.g., Japan"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
        />
        </div>
    <div>
        <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">Minimum Repositories</label>
        <input
            id="minRepos"
            type="number"
            placeholder="e.g., 50"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            />
        </div>
        <div className="sm:col-span-2">
                <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                    Search
                </button>
            </div>
        </form>


      {loading && <p className="mt-4 text-blue-500">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="p-4 border rounded-md flex items-center space-x-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="text-lg font-semibold">{user.login}</h2>
              {user.location && <p className="text-sm text-gray-600">📍 {user.location}</p>}
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {results.length > 0 && location && minRepos && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-800"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
