function diff_hours(dt2: Date, dt1: Date) {
    // Calculate the difference in milliseconds between the two provided Date objects by subtracting the milliseconds value of dt1 from the milliseconds value of dt2
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    // Convert the difference from milliseconds to hours by dividing it by the number of seconds in an hour (3600)
    diff /= 60 * 60;
    // Return the absolute value of the rounded difference in hours
    return Math.abs(Math.round(diff));
}

export default diff_hours;
