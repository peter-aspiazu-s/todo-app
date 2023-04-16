export const getTimeElapsedString = (date: Date) => {
    const currentDate = new Date();
    const elapsedMilliseconds = currentDate.getTime() - date.getTime();
    
    const elapsedSeconds = Math.round(elapsedMilliseconds / 1000);
    const elapsedMinutes = Math.round(elapsedSeconds / 60);
    const elapsedHours = Math.round(elapsedMinutes / 60);
    const elapsedDays = Math.round(elapsedHours / 24);
    const elapsedWeeks = Math.round(elapsedDays / 7);
    const elapsedMonths = Math.round(elapsedDays / 30);
    const elapsedYears = Math.round(elapsedDays / 365);
    
    if (elapsedDays === 0) {
        return 'creado hoy';
    } else if (elapsedDays === 1) {
        return 'creado hace un día';
    } else if (elapsedDays <= 7) {
        return `creado hace ${elapsedDays} días`;
    } else if (elapsedWeeks === 1) {
        return 'creado hace una semana';
    } else if (elapsedWeeks <= 4) {
        return `creado hace ${elapsedWeeks} semanas`;
    } else if (elapsedMonths === 1) {
        return 'creado hace un mes';
    } else if (elapsedMonths <= 12) {
        return `creado hace ${elapsedMonths} meses`;
    } else if (elapsedYears === 1) {
        return 'creado hace un año';
    } else {
        return `creado hace ${elapsedYears} años`;
    }
}