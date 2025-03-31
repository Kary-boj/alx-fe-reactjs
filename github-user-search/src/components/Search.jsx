import { useState } from "react";
import { fetchUserData, fetchAdvancedSearch } from "../services/githubService";

const Search = ({ onSearch }) => {
    const [username, setUsername] = useState("");
    const [location, setLocation] = useState("");
    const [repos, setRepos] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();


        setLoading(true);
        setError(false);
        


        const query = { username: username.trim(), location: location.trim(), repos };
        const isSingleUserSearch = Boolean(username.trim());

        try {
            if (isSingleUserSearch) {
                const user = await fetchUserData(username);
                onSearch({ user });
                if (!user) setError(true);
            } else {
                const users = await fetchAdvancedSearch(query);
                onSearch({ users });
                if (users.length === 0) setError(true);
            }
        } catch {
            setError(true);
        }

        setLoading(false);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-md shadow-md max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    placeholder="GitHub Username (optional)"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    placeholder="Min Repositories"
                    value={repos}
                    onChange={(e) => setRepos(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Search
                </button>
            </form>

            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">Looks like we can't find the user</p>}
        </div>
    );
};

export default Search;

