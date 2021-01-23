export function getAnnouncementContent() {
    const DAY_ONE = "January 23, 2021 ";
    const DAY_TWO = "January 24, 2021 ";

    let TIME_ANNOUNCEMENTS_MAP = new Map();

    // Before 12:25PM: Welcome to Hack@Brown! Keep H@B Town opened so you don't miss any upcoming announcements!
    TIME_ANNOUNCEMENTS_MAP.set(
        [
            new Date(DAY_ONE.concat("12:25:00 EST")), 
            new Date(DAY_ONE.concat("13:24:59 EST"))
        ], "Workshop: Intro to HTML/CSS will take place from 12:30PM to 1:30PM EST!");
    TIME_ANNOUNCEMENTS_MAP.set(
        [
            new Date(DAY_ONE.concat("13:25:00 EST")), 
            new Date(DAY_ONE.concat("13:54:59 EST"))
        ], "Talk: 'A [Really] Brief History of American Surveillance' (Prof. Edgar) will take place from 1:30PM to 2:00PM EST!");
    TIME_ANNOUNCEMENTS_MAP.set(
        [
            new Date(DAY_ONE.concat("13:55:00 EST")), 
            new Date(DAY_ONE.concat("14:54:59 EST"))
        ], "Workshop: Google Cloud will take place from 2PM to 3PM EST!");
    TIME_ANNOUNCEMENTS_MAP.set(
        [
            new Date(DAY_ONE.concat("14:55:00 EST")), 
            new Date(DAY_ONE.concat("15:24:59 EST"))
        ], "Talk: 'The Four Ways We Tell Machines What We Want, and How We Can Do Better' (Prof. Littman) will take place from 3PM to 3:30PM!");
    // 3:30PM-6:25PM: Welcome to Hack@Brown! Keep H@B Town opened so you don't miss any upcoming announcements!
    TIME_ANNOUNCEMENTS_MAP.set(
        [
            new Date(DAY_ONE.concat("18:25:00 EST")), 
            new Date(DAY_ONE.concat("18:54:59 EST"))
        ], "Workshop: Cybersecurity (MLH) will take place from 6:30PM to 7PM EST!");
    TIME_ANNOUNCEMENTS_MAP.set(
        [
            new Date(DAY_ONE.concat("18:55:00 EST")), 
            new Date(DAY_ONE.concat("19:59:59 EST"))
        ], "Workshop: Introduction to Deep Learning will take place from 7PM to 8PM EST!");
    // 8PM - 9PM: Welcome to Hack@Brown! Keep H@B Town opened so you don't miss any upcoming announcements!
    TIME_ANNOUNCEMENTS_MAP.set(
        [
            new Date(DAY_ONE.concat("20:55:00 EST")), 
            new Date(DAY_ONE.concat("21:59:59 EST"))
        ], "Workshop: Introduction to Figma will take place from 9PM to 10PM EST!");
    // 10PM - 10:25AM next day: Welcome to Hack@Brown! Keep H@B Town opened so you don't miss any upcoming announcements!
    TIME_ANNOUNCEMENTS_MAP.set(
        [
            new Date(DAY_TWO.concat("10:25:00 EST")), 
            new Date(DAY_TWO.concat("11:24:59 EST"))
        ], "Workshop: Ethics in CS and Socially Responsible Computing will take place from 10:30AM to 11:30AM EST!");
    TIME_ANNOUNCEMENTS_MAP.set(
        [
            new Date(DAY_TWO.concat("11:25:00 EST")), 
            new Date(DAY_TWO.concat("11:59:59 EST"))
        ], "Talk: 'Digitizing Physical Intelligence' (Prof. Srinath Sridhar) will take place from 11:30AM to 12PM!");

    return TIME_ANNOUNCEMENTS_MAP;
}
