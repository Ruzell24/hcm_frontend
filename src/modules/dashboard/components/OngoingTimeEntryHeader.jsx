import { useEffect, useState } from "react";
import { FaStop } from "react-icons/fa";

const OngoingTimeEntryHeader = ({ onTimeOut, ongoingData, onLogout, setElapsedTime }) => {
  const storedStartTime = localStorage.getItem('startTime');
  const storedElapsedTime = localStorage.getItem('elapsedTime');
  
  const initialStartTime = storedStartTime ? new Date(storedStartTime) : new Date(ongoingData.start_time);
  const initialElapsedTime = storedElapsedTime ? parseInt(storedElapsedTime) : 0;

  const [startTime, setStartTime] = useState(initialStartTime);
  const [elapsedTime, internalElapsedTime] = useState(initialElapsedTime);

  useEffect(() => {
    let timerInterval;

    timerInterval = setInterval(() => {
      const currentTime = new Date();
      const elapsedMilliseconds = currentTime - startTime;
      const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
      setElapsedTime(elapsedSeconds);
      internalElapsedTime(elapsedSeconds);
    }, 1000);

    // Save startTime and elapsedTime to localStorage
    localStorage.setItem('startTime', startTime.toISOString());
    localStorage.setItem('elapsedTime', elapsedTime.toString());

    return () => {
      clearInterval(timerInterval);
    };
  }, [startTime, setElapsedTime, elapsedTime]);

  const formatElapsedTime = () => {
    const hours = Math.floor(elapsedTime / 3600);
    const remainingSeconds = elapsedTime % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;
    return `${hours} hrs ${minutes} mins ${seconds} secs`;
  };

  return (
    <header className="shadow-md p-4">
      <div className="flex justify-end items-center">
        <div className="flex items-center space-x-4">
          <div className="cursor-pointer text-gray-500 hover:text-gray-800">
            <div className="flex items-center space-x-2">
              <FaStop
                className="text-2xl"
                onClick={() => onTimeOut(ongoingData.id)}
              />
              <div className="text-xs">{formatElapsedTime()}</div>
            </div>
          </div>
          <div
            className="cursor-pointer text-red-500 hover:text-red-800 font-bold"
            onClick={onLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </header>
  );
};

export default OngoingTimeEntryHeader;
