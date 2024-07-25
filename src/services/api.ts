import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type result = {
    position: string,
    mark: string,
    medalType: string,
    irm: string
}

export type competitor = {
    code: string
    noc: string
    name: string
    order: number
    results: result
}

type unit = {
    disciplineName: string
    eventUnitName: string
    id: string
    disciplineCode: string
    genderCode: string
    eventCode: string
      phaseCode: string
      eventId: string
      eventName: string
      phaseId: string
      phaseName: string
      disciplineId: string
      eventOrder: number
      phaseType: number
      eventUnitType: string
      olympicDay: string
      startDate: string
      endDate: string
      hideStartDate: boolean
      hideEndDate: boolean
      startText: string,
      order: number
      venue: string
      venueDescription: string
      location: string
      locationDescription: string
      status: string
      statusDescription: string
      medalFlag: number
      liveFlag: boolean
      scheduleItemType: string
      unitNum: string,
      sessionCode: string
      groupId: string
      competitors: competitor[]
      extraData: {
        detailUrl: string
      }
} 

type EventDayType = {
    units: unit[]
    group: []
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://sph-s-api.olympics.com/summer/schedules/api/POR/schedule/day'
    }),
    endpoints: (builder) => ({
        getEventsDay: builder.query<EventDayType, string>({
            query: (s) => `/${s}`
        })
    })
})

export const {
    useGetEventsDayQuery
} = api

export default api