import DashboardHeader from "./components/Header"
import { useAuth } from "../shared/context/user/UserContext"
import UserCalendar from "./components/Calendar";
import { useQuery, useQueryClient } from "react-query";
import service from '../shared/service/timeEntries'
import Loading from "../shared/utils/Loading";
import ErrorPage from "../shared/utils/Error";

const Dashboard = () => {
    const queryClient = useQueryClient()
    const { user } = useAuth();
    const query = useQuery(['user', user.id], () => service.getUserTimeEntries({ id: user.id }));
    
    const fetchLatestOngoingEntry = (key) => {
        queryClient.invalidateQueries(key)
      }
    if (query.isLoading){
        return <Loading/>
    }

    if (query.isError){
        return <ErrorPage/>
    }

    const ongoingEntry = query.data.timeEntries;


    return (
        <>
        <DashboardHeader user={user} ongoingEntry={ongoingEntry} fetchLatestOngoingEntry={fetchLatestOngoingEntry}/>
        <UserCalendar user={user} ongoingEntry={ongoingEntry} fetchLatestOngoingEntry={fetchLatestOngoingEntry}/>
        </>
    )
}

export default Dashboard