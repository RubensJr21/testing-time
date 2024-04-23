import { ChangeEvent, HtmlHTMLAttributes, useEffect, useState } from "react"

export type TimePickerProps  = {
    duration: string
    timeChange: (newTime: string) => void
    key: string
}
// Arrows
// https://www.w3schools.com/icons/fontawesome5_icons_arrows.asp

export default function TimeRangePicker ({duration, timeChange, key}: TimePickerProps) {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)

    const [blockAddMinute, setBlockAddMinute] = useState(false)

    const [maxHour, setMaxHour] = useState(0)
    const [maxMinute, setMaxMinute] = useState(0)

    useEffect(() => {
        if(hours >= maxHour){
            // quer dizer que nenhum minuto pode ser adicionado além do máximo de minuto
            // caso o número atual dos minutos seja maior que o máximo ele deve ser trocado para o máximo
             setBlockAddMinute(true);
             setMinutes(maxMinute)
         } else {
             // quer dizer que a hora não está no máximo, logo é possível colocar até 59 minutos
            // caso o número atual dos minutos seja maior que o máximo ele deve ser trocado para o máximo
            setBlockAddMinute(false);
         }
    }, [hours])

    useEffect(() => {
        var [maxHour, maxMinute] = duration.split(":").map((i) => Number(i))
        setMaxHour(maxHour)
        setMaxMinute(maxMinute)
    }, [duration])

    return (
        <div className="w-fit flex justify-between items-center">
            <input
                type="number"
                name="hour"
                // Remover botões
                // https://stackoverflow.com/questions/71296535/how-to-remove-arrow-on-input-type-number-with-tailwind-css
                className="text-sm font-medium h-10 w-10 rounded text-gray-900 text-center"
                value={hours}
                min={0}
                max={maxHour}
                onChange={(e) => {
                    setHours(Number(e.target.value))
                }
            }/>
            <h1 className="mx-2 text-white">:</h1>
            <input
                key={`input-2`}
                type="number"
                name="minutes"
                // Remover botões
                // https://stackoverflow.com/questions/71296535/how-to-remove-arrow-on-input-type-number-with-tailwind-css
                className="text-sm font-medium h-10 w-10 rounded text-gray-900 text-center"
                value={minutes}
                min={0}
                max={!blockAddMinute ? 59 :maxMinute} // Verificar lógica para os casos em que a duração é de 02:30
                onChange={(e) => {
                    if(!blockAddMinute){
                        setMinutes(Number(e.target.value))
                    }
                }
            }/>
        </div>
    )
}