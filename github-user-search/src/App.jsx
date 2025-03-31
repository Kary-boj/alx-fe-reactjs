import { useState } from "react";
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";
import { fetchUserData } from "./services/githubService";

const App = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (username) => {
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
            <h1>GitHub User Search</h1>
            <Search onSearch={handleSearch} />
            <UserProfile user={user} loading={loading} error={error} />
        </div>
    );
};

export default App;
