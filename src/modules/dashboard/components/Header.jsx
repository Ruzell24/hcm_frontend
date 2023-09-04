import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { FaPlay, FaStop } from 'react-icons/fa';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import service from '../../shared/service/timeAction';
import Loading from '../../shared/utils/Loading';
import OngoingTimeEntryHeader from './OngoingTimeEntryHeader';

const DashboardHeader = ({ user , fetchLatestOngoingEntry }) => {


  const [elapsedTime, setElapsedTime] = useState(0);
  const navigate = useNavigate();
  const { mutate: createTimeEntryMutate } = useMutation(service.createTimeEntry);
  const { mutate: endTimeEntryMutate } = useMutation(service.endTimeEntry);
  const TIME_ENTRY_KEY = "user_ongoing_entry"
  const USER_ENTRY_KEY = "user"
  const query = useQuery([TIME_ENTRY_KEY, user.id], () =>
    service.getOngoingEntries({ id: user.id })
  );

  

  const onLogout = () => {
    Cookies.remove('token');
    navigate('/');
  };

  const onTimeIn = () => {
    createTimeEntryMutate({ user_id: user.id }, {
      onSuccess: () => {
        localStorage.removeItem('startTime');
        localStorage.removeItem('elapsedTime');
        fetchLatestOngoingEntry(TIME_ENTRY_KEY)
      },
    });
  };

  const onTimeOut = (entryId) => {
    endTimeEntryMutate({ id: entryId }, {
      onSuccess: () => {
        localStorage.removeItem('startTime');
        localStorage.removeItem('elapsedTime');
        fetchLatestOngoingEntry(TIME_ENTRY_KEY)
        fetchLatestOngoingEntry(USER_ENTRY_KEY)

        setElapsedTime(0);
      },
    });
  };

  const ongoingData = query?.data?.timeEntry;

 
  if (ongoingData?.is_ongoing) {
    return(
      <OngoingTimeEntryHeader 
      onTimeOut={onTimeOut} 
      ongoingData={ongoingData} 
      onLogout={onLogout}
      elapsedTime={elapsedTime}
      setElapsedTime={setElapsedTime}
      startTime={new Date(ongoingData.start_time)}
      />
    )
  }

  return (
    <>
      {query.isLoading ? (
        <Loading />
      ) : (
        <header className="shadow-md p-4">
          <div className="flex justify-end items-center">
            <div className="flex items-center space-x-4">
              <div className="cursor-pointer text-gray-500 hover:text-gray-800">
              <FaPlay className="text-2xl" onClick={onTimeIn} />
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
      )}
    </>
  );
};

export default DashboardHeader;
