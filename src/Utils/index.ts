export const formatDate = (date: string) => {
    const time = date.slice(11, 16)
    const timeList = time.split(':')
    const hourBrt = (Number(timeList[0]) - 5).toString()
    const formattedHour = hourBrt.length > 1 ? hourBrt : '0' + hourBrt
    const minutsFormatted = timeList[1].length > 1 ? timeList[1] : '0' + timeList[1]
    if(Number(formattedHour) < 0){
        return [24 + Number(formattedHour), minutsFormatted]
    }
    return [formattedHour, minutsFormatted]
}

export const getWeekDay = (number: number) => {
    const week = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

    return week[number]
}