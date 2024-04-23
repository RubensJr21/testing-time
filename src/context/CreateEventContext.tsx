import { getTime, hours, minutes } from '@/lib/time'
import { useState } from 'react'
import { createContext } from 'use-context-selector'

export type CreateEventContextType = {

}

export const CreateEventContext = createContext({} as CreateEventContextType)

export function CreateEventProvider({children}) {
    const [start_time, setStartTime] = useState(getTime(minutes(30)))
    const [end_time, setEndTime] = useState(getTime(hours(2) + minutes(30)))
    const [duration, setDuration] = useState("")
    const [nome, setNome] = useState("")

    return (
        <></>
    )
}