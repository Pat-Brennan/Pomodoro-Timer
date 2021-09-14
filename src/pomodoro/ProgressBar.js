
import React from "react";

function ProgressBar({ session, durations }) {
    let elapsedTime = 0;
    const focusTime = durations.focus * 60;
    const breakTime = durations.break * 60;
    if (session && session.label === "Focusing") {
        elapsedTime = ((focusTime - session.timeRemaining) / focusTime) * 100;
    } else if (session && session.label === "On Break") {
        elapsedTime = ((breakTime - session.timeRemaining) / breakTime) * 100;
    }

    return (
        <div className="progress" style={{ height: "20px" }}>
            <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={elapsedTime} // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: `${elapsedTime}%` }} // TODO: Increase width % as elapsed time increases
            />
        </div>);
}

export default ProgressBar;