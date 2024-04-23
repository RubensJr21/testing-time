const _milliseconds = 1
export const _seconds = 1000 * _milliseconds
export const _minutes = 60 * _seconds
export const _hours = 60 * _minutes

export const seconds = (time: number) => time * _seconds
export const minutes = (time: number) => time * _minutes
export const hours = (time: number) => time * _hours

export const getStringHour = (d: Date) => {
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
}

export const getTime = (delay_time?: number, date?: Date) => {
    var d = (!date) ? new Date() : date
    if (typeof delay_time == "number" ) { d = new Date(d.getTime() + delay_time) }
    return getStringHour(d)
}

export function timeToMinutes(timeStr: String) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}
  
export function timeDifference(startTimeStr: String, endTimeStr: String) {
    const startTimeMinutes = timeToMinutes(startTimeStr);
    const endTimeMinutes = timeToMinutes(endTimeStr);

    // Calcula a diferença em minutos
    let differenceInMinutes = endTimeMinutes - startTimeMinutes;

    // Se a diferença for negativa, ajusta para representar uma diferença de um dia
    if (differenceInMinutes < 0) {
        differenceInMinutes += 24 * 60; // 24 horas em minutos
    }

    return differenceInMinutes;
}

export function minutesToTime(minutes : number) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(remainingMinutes).padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}`;
}