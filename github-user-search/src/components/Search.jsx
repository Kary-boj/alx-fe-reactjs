import { useState } from "react";
import { fetchUserData } from "../services/githubService";

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username.trim()) return;

        setLoading(true);
        setError(false);
        setUser(null);

        const data = await fetchUserData(username);
        if (data) {
            setUser(data);
        } else {
            setError(true);
        }

        setLoading(false);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Looks like we cant find the user</p>}
            {user && (
                <div>
                    <img src={user.avatar_url} alt="User Avatar" width={100} />
                    <h2>{user.name || "No Name Provided"}</h2>
                    <p>Username: {user.login}</p>
                    <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        View Profile
                    </a>
                </div>
            )}
        </div>
    );
};

export default Search;
