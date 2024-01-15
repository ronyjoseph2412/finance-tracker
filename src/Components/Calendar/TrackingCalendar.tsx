import React from "react";
import styles from "./TrackingCalendar.module.css";

interface DayData {
  dayNumber: number;
  amountSpent: number;
}

const currentDate = new Date();
const firstDayOfMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  1
);
const daysInMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  0
).getDate();

const startDayOffset = firstDayOfMonth.getDay();

const data = Array.from({ length: 42 }, (_, index) => {
  const dayNumber = index + 1 - startDayOffset;
  const isAday = dayNumber >= 1 && dayNumber <= daysInMonth;
  const isFutureDay = isAday && dayNumber > currentDate.getDate() - 1;
  const amountSpent = isFutureDay ? 0 : Math.floor(Math.random() * 200) + 50;
  return {
    dayNumber,
    amountSpent,
    isFutureDay,
    isAday,
  };
});

interface CalendarProps {}

// const calculateCircleSize = (
//   amountSpent: number,
//   maxAmount: number
// ): number => {
//   const maxSize = 60; // Limiting the size to 30 pixels
//   const sizeDifference = maxAmount - amountSpent;

//   // Calculate the size based on the difference
//   const calculatedSize = maxSize * (sizeDifference / maxAmount);

//   return Math.min(calculatedSize, maxSize);
// };

const TrackingCalendar: React.FC<CalendarProps> = ({}) => {
  const maxAmountSpent = Math.max(...data.map((day) => day.amountSpent), 0);
  return (
    <div className={styles.calendar}>
      <div>Sun</div>
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>

      {data.map((day) => {
        if (day.isAday)
          return (
            <div
              className={` ${day.isFutureDay ? styles.futureDay : styles.day}`}
              key={day.dayNumber}
            >
              <div className={styles.dayNumber}>{day.dayNumber}</div>
              {!day.isFutureDay && (
                <div className={styles.spentAnalysis}>${day.amountSpent}</div>
              )}
              {/* {day.amountSpent > 0 && (
          <div
            className={styles.circle}
            style={{
              backgroundColor: "#0070f3",
              width: calculateCircleSize(day.amountSpent, maxAmountSpent),
              height: calculateCircleSize(day.amountSpent, maxAmountSpent),
            }}
          />
        )} */}
            </div>
          );
        else if (day.dayNumber <= 31) return <div key={day.dayNumber}></div>;
      })}
    </div>
  );
};

export default TrackingCalendar;