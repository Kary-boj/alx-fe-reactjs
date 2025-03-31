const UserProfile = ({ user, loading, error }) => {
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Looks like we can't find the user</p>;
    if (!user) return null;

    return (
        <div>
            <img src={user.avatar_url} alt="User Avatar" width={100} />
            <h2>{user.name || "No Name Provided"}</h2>
            <p>Username: {user.login}</p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
            </a>
        </div>
    );
};

export default UserProfile;
