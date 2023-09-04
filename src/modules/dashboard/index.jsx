import DashboardHeader from "./components/Header"
import { useAuth } from "../shared/context/user/UserContext"
import UserCalendar from "./components/Calendar";

const Dashboard = () => {
    const { user } = useAuth();
    return (
        <>
        <DashboardHeader user={user}/>
        <UserCalendar user={user}/>
        </>
    )
}

export default Dashboard