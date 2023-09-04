import React, { useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment-timezone'; 
import service from '../../shared/service/timeEntries';
import { useQuery } from 'react-query';
import Loading from '../../shared/utils/Loading';
import { useNavigate } from 'react-router-dom';



const localizer = momentLocalizer(moment);

// Configure moment-timezone to use 'Asia/Manila' as the default time zone
moment.tz.setDefault('Asia/Manila');

const UserCalendar = ({ user }) => {
    const navigate = useNavigate();

    const query = useQuery(['user', user.id], () => service.getUserTimeEntries({ id: user.id }));

    useEffect(() => {
        if (query.isError) {
            navigate('/');
        }
    }, [query.isError, navigate]);

    const asiaTimezone = 'Asia/Manila'; // Replace with your desired Asia timezone

    const formatUserTimeEntries = (entries) => {
      const userEntries = entries.map(entry => {
        const hoursOffset = 8;
        const startTime = moment.tz(entry.start_time, asiaTimezone).subtract(hoursOffset , 'hours').toDate();
        const endTime = moment.tz(entry.end_time, asiaTimezone).subtract(hoursOffset , 'hours');
        console.log(startTime)
        return {
          id: entry.id,
          title: entry.title,
          start: startTime,
          end: endTime,
          title: "Working"
        };
      });
    
      console.log(userEntries);
      return userEntries;
    };
      
    const events = formatUserTimeEntries(query.data?.timeEntries || []);

    return (
        <div>
            {query.isLoading ? (
                <Loading />
            ) : (
                <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
            )}
        </div>
    );
};

export default UserCalendar;
