import {ScheduleContainer, DateContainer, Date} from './style'

import EventCard from '../../components/EventCard'

import { useGetEventsDayQuery } from '../../services/api'
import { getWeekDay } from '../../Utils'

type ScheduleProps = {
    date: string
    day: number
}

const ScheduleArea = ({date, day}:ScheduleProps) => {
    const {data} = useGetEventsDayQuery(date)

    const currentDay = date.split('-')

    if(data){

        return (
            <ScheduleContainer>
                <DateContainer>
                    <Date>{currentDay[2]}/{currentDay[1]} - <span>{getWeekDay(day)}</span></Date>
                </DateContainer>
                {data.units.map((event, index) => (
                    <EventCard 
                        key={event.id} 
                        disciplineCode={event.disciplineCode} 
                        disciplineName={event.disciplineName} 
                        eventUnitName={event.eventUnitName}
                        startDate={event.startDate}
                        competitors={event.competitors}
                        isLast={index == data.units.length -1 }
                    />
                ))}
            </ScheduleContainer>
        )
    }
}

export default ScheduleArea