export function getTimeString(date: Date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}`;
    return timeString
}

export function getTimeZone() {
    const timeZone = new Date().toLocaleDateString('en', { timeZoneName: 'short' }).split(', ')[1];
    return timeZone
}

export function getDayOfWeek(date: Date) {
    const dayOfWeek = date.getDay() + 1;
    return dayOfWeek
}

export function getDayOfYear(date: Date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const dayOfYear = Math.floor((date.getTime() - startOfYear.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    return dayOfYear
}

export function getWeekNumber(date: Date) {
    const dayOfYear = getDayOfYear(date);
    const weekNumber = Math.ceil(dayOfYear / 7);
    return weekNumber;
}

export function getPeriodOfDay(hour: number) {
    if (hour >= 5 && hour < 12) {
        return 'morning';
    } else if (hour >= 12 && hour < 18) {
        return 'afternoon';
    } else {
        return 'night';
    }
}

