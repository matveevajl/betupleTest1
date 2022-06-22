import React, {useState} from 'react';

const dateTimeNow = Date.now();
const oneDay = 1000 * 60 * 60 * 24;

const localizedDaysOfWeek = new Map([
    [0, 'вс'],
    [1, 'пн'],
    [2, 'вт'],
    [3, 'ср'],
    [4, 'чт'],
    [5, 'пт'],
    [6, 'сб'],
]);

const localizeDayOfWeek = (dayNumber) => {
    const dayName = localizedDaysOfWeek.get(dayNumber);
    return dayName || "";
};

const formatDate = (dateItem) => {
    const date = new Date(dateItem);
    return (
        <>
            <span className="day_text">{date.getDate()}</span>
            <span className="day_text">{localizeDayOfWeek(date.getDay())}</span>
        </>
    );
};

const Days = () => {
    const [visibleDays, setVisibleDays] = useState([
        dateTimeNow,
        dateTimeNow + 1 * oneDay,
        dateTimeNow + 2 * oneDay,
        dateTimeNow + 3 * oneDay,
        dateTimeNow + 4 * oneDay,
        dateTimeNow + 5 * oneDay,
        dateTimeNow + 6 * oneDay
    ]);
    const [currentDay, setCurrentDay] = useState(dateTimeNow);
    return (
        <nav>
            <ul className="days_line">
                {visibleDays.map(it => <li key={it} className="day">{formatDate(it)}</li>)}
            </ul>
        </nav>
    );
}

export default Days;