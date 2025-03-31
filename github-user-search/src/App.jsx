import { useState } from "react";
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";
import { fetchUserData, fetchAdvancedSearch } from "./services/githubService";

const App = () => {
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (query) => {
        setLoading(true);
        setError(false);
        setUser(null);
        setUsers([]);

        if (query.username) {
            // Fetch single user by username
            const data = await fetchUserData(query.username);
            if (data) setUser(data);
            else setError(true);
        } else {
            // Fetch multiple users using advanced filters
            const results = await fetchAdvancedSearch(query);
            if (results.length > 0) setUsers(results);
            else setError(true);
        }

        setLoading(false);
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold text-center">GitHub User Search</h1>
            <Search onSearch={handleSearch} />

            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">Looks like we can't find the user</p>}

            {user && <UserProfile user={user} />}
            
            {users.length > 0 && (
                <div className="mt-4 grid gap-4">
                    {users.map((user) => (
                        <div key={user.id} className="p-3 bg-white shadow rounded flex items-center space-x-4">
                            <img src={user.avatar_url} alt={user.login} className="w-16 rounded" />
                            <div>
                                <p className="font-bold">{user.login}</p>
                                <p>{user.location || "Location not available"}</p>
                                <a href={user.html_url} target="_blank" className="text-blue-500">
                                    View Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default App;
