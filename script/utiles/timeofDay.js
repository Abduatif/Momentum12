export function timeDay() {
    const currentDate = new Date();
    const hour = currentDate.getHours();




    if (hour >= 6 && 12 > hour) {
        return 'morning'
    } else if (hour >= 12 && hour < 18) {
        return 'afternoon';
    } else if (hour >= 18 && hour < 24) {
        return "evening";
    } else {
        return 'night';
    }
}
