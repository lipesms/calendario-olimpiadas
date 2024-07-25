import Header from '../components/Header'
import ScheduleArea from '../containers/ScheduleArea'



const Home = () => {
    const currentDay = new Date()
    const month = currentDay.getMonth() + 1
    const day = currentDay.getDate()
    const date = `2024-0${month}-${day}`

    return (
        <>
            <Header />
            <ScheduleArea date={date} day={currentDay.getDay()}/>
        </>
    )
    
}

export default Home