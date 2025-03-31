import axios from "axios";

const API_URL = import.meta.env.VITE_GITHUB_API_URL || "https://api.github.com/users/";
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

export const fetchUserData = async ({ username, location, repos }) => {
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (repos) query += `repos:>${repos} `;

    try {
        const response = await axios.get(`${API_URL}?q=${query.trim()}`, {
            headers: API_KEY ? { Authorization: `token ${API_KEY}` } : {},
        });

        return response.data.items;
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
};
