import React from "react";

const Task = ({ airport }) => {
    return (
        <div key={airport.id} className="task">
            <span>{airport.name}</span>

        </div>
    );
};

export default Task;
