import { useEffect, useState } from 'react'

import {EventCardContainer, Discipline, DisciplineImg, EventUnitName} from './styles'

import { competitor } from '../../services/api'
import { formatDate } from '../../Utils'

type EventsProps = {
    disciplineCode: string
    disciplineName: string
    eventUnitName: string
    startDate: string
    competitors: competitor[]
    isLast: boolean
}

const EventCard = ({disciplineCode, disciplineName, startDate, competitors, isLast}: EventsProps) => {
    const [firstImg, setFirstImg] = useState('')
    const [secondImg, setSecondImg] = useState('')
    
    const time = formatDate(startDate)
    const isEncounter = competitors.length < 3

    useEffect(() => {
        if(isEncounter && competitors[0] && competitors[1]){
            fetch(`https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/${competitors[0].noc}.png`)
                .then((resp) => setFirstImg(resp.url))
            fetch(`https://gstatic.olympics.com/s1/t_original/static/noc/oly/3x2/180x120/${competitors[1].noc}.png`)
                .then((resp) => setSecondImg(resp.url))
        }
    }, [competitors, firstImg, isEncounter, secondImg])
    
    

    return (
        <EventCardContainer isLast={isLast}>
            <p>{time[0]}<br />{time[1]}</p>
            <Discipline>
                <DisciplineImg src={`https://gstatic.olympics.com/s1/t_original/static/light/pictograms-paris-2024/olympics/${disciplineCode}_small.svg`} alt={disciplineName} />
                <h3>{disciplineName}</h3>
            </Discipline>
            {competitors[0] != undefined ? (
            <EventUnitName>
            {competitors[0].noc && competitors[1].noc ? (

                <div className={`${isEncounter ? '' : 'hidden'}`}>
                <div className='results'>
                    <img src={firstImg} alt={competitors[0].noc} />
                    <p>{competitors[0].results ? competitors[0].results.mark : ''}</p>
                </div>
                <p>X</p>
                <div className='results'>
                    <img src={secondImg} alt={competitors[1].noc} />
                    <p>{competitors[1].results ? competitors[1].results.mark : ''}</p>
                </div>
            </div>
            ) : (<></>)}
            </EventUnitName>
            ) : (<></>)}
            
        </EventCardContainer>
    )
}

export default EventCard