import React from "react";
import { useQuery } from "react-query";

const fetchUsers = async () => {
    const response = await fetch('https://nr.txio.live/ambience/now');
    const jsonData = await response.json();
    return jsonData;
};

const ComponentGet = () => {
    const { data, status, error } = useQuery("parameterData", fetchUsers);

    // Handle loading and error states
    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "error") {
        return <p>Error: {error.message}</p>;
    }

    // Display the data if available
    return (
        <div>
           hai
        </div>
    );
};

export default ComponentGet;
