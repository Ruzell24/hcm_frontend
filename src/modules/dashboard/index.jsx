import DashboardHeader from "./components/Header"
import { useAuth } from "../shared/context/user/UserContext"

const Dashboard = () => {
    const {user} = useAuth();
    return (
        <>
        <DashboardHeader user={user}/>
        </>
    )
}

export default Dashboard