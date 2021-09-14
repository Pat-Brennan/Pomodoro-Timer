
import React from "react";
import { minutesToDuration, secondsToDuration } from "../utils/duration";
import ProgressBar from "./ProgressBar";

function TimerDisplay({ session, durations, isTimerRunning }) {
    if (session) {
        return (<>
            <div className="row mb-2">
                <div className="col">
                    {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
                    <h2 data-testid="session-title">
                        {session?.label} for {
                            session.label === "Focusing" ? minutesToDuration(durations.focus) :
                                minutesToDuration(durations.break)} minutes
                    </h2>
                    {/* TODO: Update message below correctly format the time remaining in the current session */}
                    <p className="lead" data-testid="session-sub-title">
                        {secondsToDuration(session?.timeRemaining)} remaining
                    </p>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col">
                    <ProgressBar session={session} durations={durations} />
                </div>
            </div>
            <div>
                {isTimerRunning ? "" : <h2>PAUSED</h2>}
            </div>
        </>);
    }
    else return <div></div>;

}

export default TimerDisplay;