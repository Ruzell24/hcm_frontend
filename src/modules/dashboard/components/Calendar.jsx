import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment-timezone'; 


const localizer = momentLocalizer(moment);


const UserCalendar = ({ ongoingEntry }) => {
    const asiaTimezone = 'Asia/Manila'
    
    const formatUserTimeEntries = (entries) => {
      const userEntries = entries.map(entry => {
        const startTime = moment.tz(entry.start_time , asiaTimezone).toDate();
        const endTime = moment.tz(entry.end_time, asiaTimezone).toDate();

        return {
          id: entry.id,
          title: entry.title,
          start: startTime,
          end: endTime,
          title: "Working"
        };
      });
    
      return userEntries;
    };
      
    const events = formatUserTimeEntries(ongoingEntry || []);


    return (
        <div>
          <Calendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
        </div>
    );
};

export default UserCalendar;
