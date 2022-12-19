import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AIRPORT } from "./queries";
import Task from "./Task";

const Tasks = () => {
    const { loading, error, data } = useQuery(GET_AIRPORT);

    if (loading) {
        return <div className="tasks">Loading...</div>;
    }
    if (error) {
        return <div className="tasks">Error!</div>;
    }

    return (
        <div className="tasks">
            {data.airport.map((airport) => (
                <Task key={airport.id} airport={airport} />
            ))}
        </div>
    );
};

export default Tasks;