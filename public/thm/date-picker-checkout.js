/*
 * Refactor JSX
 * From https://medium.com/swlh/build-a-date-picker-in-15mins-using-javascript-react-from-scratch-f6932c77db09
 * Into vanilla JS for project
 */

function dt2(){
const calendar = document.querySelector("#calendar_main1"),
    input = document.querySelector("#checkout_calender_button"),
    calHeader = document.querySelector("#calendar_header1"),
    calHeaderTitle = document.querySelector("#calendar_header1 #cal_title1"),
    calDays = document.querySelector("#cal_days1"),
    selected_date = document.querySelector("#selected_checkout_date"),
    days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ],
    months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

let oneDay = 60 * 60 * 24 * 1000;
let todayTimestamp =
    Date.now() -
    (Date.now() % oneDay) +
    new Date().getTimezoneOffset() * 1000 * 60;

let selectedDay = todayTimestamp;
// console.log(selectedDay); // Str in millisec

// Get num of days in month
// month param 0-11
const getNumberOfDays = (year, month) => {
    return 40 - new Date(year, month, 40).getDate();
};
// getNumberOfDays(2023, 1);

// Calc day details
const getDayDetails = (args) => {
    let date = args.index - args.firstDay;
    let day = args.index % 7;
    // console.log(day)
    let prevMonth = args.month - 1;
    let prevYear = args.year;
    if (prevMonth < 0) {
        prevMonth = 11;
        prevYear--;
    }
    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);

    let _date =
        (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
    // console.log(_date)
    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(args.year, args.month, _date).getTime();
    // console.log(timestamp)
    return {
        date: _date,
        day,
        month,
        timestamp,
        dayString: days[day]
    };
};

// [{}] each {} with details for each day of month
const getMonthDetails = (year, month) => {
    let firstDay = new Date(year, month).getDay();
    let numberOfDays = getNumberOfDays(year, month);
    let monthArray = [];
    let rows = 5;
    let currentDay = null;
    let index = 0;
    let cols = 7;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            currentDay = getDayDetails({
                index,
                numberOfDays,
                firstDay,
                year,
                month
            });
            monthArray.push(currentDay);
            index++;
        }
    }
    return monthArray;
};
// getMonthDetails(2023, 3)

// Variables that get updated with "state" changes
let date = new Date();
// alert(date_utc);
// const istOffset = 330 * 60 * 1000; // IST offset in milliseconds (5 hours 30 minutes ahead of UTC)
// let date = new Date(date_utc.getTime() + istOffset);
// alert(date);
let year = date.getFullYear();
let month = date.getMonth();
let monthDetails = getMonthDetails(year, month);

const isCurrentDay = (day, cell) => {
    if (day.timestamp === todayTimestamp) {
        // cell.classList.add("active");
        cell.classList.add("isCurrent1");
        cell.classList.add("inactive_indicator1");
    }
};

// Checks if day is one selected
const isSelectedDay = (day, cell) => {
    if (day.timestamp === selectedDay) {
        cell.classList.add("active1");
        cell.classList.add("isSelected1");
    }
};

// Get month str
const getMonthStr = (month) =>
    months[Math.max(Math.min(11, month), 0)] || "Month";
// console.log(getMonthStr(month))

// Set year using arrows
const setHeaderNav = (offset) => {
    month = month + offset;
    if (month === -1) {
        month = 11;
        year--;
    } else if (month === 12) {
        month = 0;
        year++;
    }
    monthDetails = getMonthDetails(year, month);
    // console.log(getMonthDetails(year, month))
    return {
        year,
        month,
        monthDetails
    };
};

// Set dynamic calendar header
const setHeader = (year, month) => {
    calHeaderTitle.innerHTML = getMonthStr(month) + " " + year;
};

// Set calendar header
setHeader(year, month);

// 1677139200000 => "2023-02-23"
const getDateStringFromTimestamp = (timestamp) => {
    let dateObject = new Date(timestamp);
    let month = dateObject.getMonth();
    let date = dateObject.getDate();
    // return (
    //   dateObject.getFullYear() +
    //   "-" +
    //   (month < 10 ? "0" + month : month) +
    //   "-" +
    //   (date < 10 ? "0" + date : date)
    // );
    return `${getMonthStr(month)} ${date}, ${dateObject.getFullYear()}`;
};

const setDateToInput = (timestamp) => {
    let dateString = getDateStringFromTimestamp(timestamp);
    //   input.value = dateString;
    selected_date.innerText = dateString;
    input.click();

};
// setDateToInput(todayTimestamp);

// Add days row to calendar
for (let i = 0; i < days.length; i++) {
    let div = document.createElement("div"),
        span = document.createElement("span");

    div.classList.add("cell_wrapper1");
    // div.classList.add("cal_days");
    span.classList.add("cell_item1");

    span.innerText = days[i].slice(0, 2);

    div.appendChild(span);
    calDays.appendChild(div);
}

// Add dates to calendar
const setCalBody = (monthDetails) => {
    // Add dates to calendar
    for (let i = 0; i < monthDetails.length; i++) {
        let div = document.createElement("div"),
            span = document.createElement("span");

        div.classList.add("cell_wrapper1");
        div.classList.add("cal_date1");
        monthDetails[i].month === 0 && monthDetails[i].timestamp >= todayTimestamp && div.classList.add("current1");
        monthDetails[i].month === 0 && isCurrentDay(monthDetails[i], div);
        span.classList.add("cell_item1");

        span.innerText = monthDetails[i].date;

        div.appendChild(span);
        calendar.appendChild(div);
    }
};

setCalBody(monthDetails);

const updateCalendar = (btn) => {
    let newCal, offset;
    if (btn.classList.contains("back1")) {
        // let { year, month, monthDetails } = setHeaderNav(-1);
        offset = -1;
    } else if (btn.classList.contains("front1")) {
        // let { year, month, monthDetails } = setHeaderNav(1);
        offset = 1;
    }
    newCal = setHeaderNav(offset);
    // console.log(monthDetails)
    setHeader(newCal.year, newCal.month);
    calendar.innerHTML = "";
    setCalBody(newCal.monthDetails);
};

// Only one calendar date is selected
const selectOnClick = () => {
    document.querySelectorAll(".cell_wrapper1").forEach((cell) => {
        cell.classList.contains("isSelected1") && cell.classList.remove("active1");

        if (cell.classList.contains("isCurrent1") &&
            !cell.classList.contains("active1")) {
            cell.querySelector("span").classList.add("inactive_indicator1");
        }
    });

};


const updateInput = () => {
    let currentDay = document.querySelector(".isCurrent1");

    // Update input based on clicked cell
    document.querySelectorAll(".cell_wrapper1").forEach((cell) => {
        if (cell.classList.contains("current1")) {
            cell.addEventListener("click", (e) => {
                let cell_date = e.target.textContent;

                currentDay !== null && currentDay.classList.remove("active1");

                for (let i = 0; i < monthDetails.length; i++) {
                    if (monthDetails[i].month === 0) {
                        if (monthDetails[i].date.toString() === cell_date) {
                            selectedDay = monthDetails[i].timestamp;
                            setDateToInput(selectedDay);
                            selectOnClick();

                            isSelectedDay(monthDetails[i], cell);

                            cell.querySelector('span').classList.contains('inactive_indicator1')
                                && cell.querySelector('span').classList.remove('inactive_indicator1');
                        }
                    }
                }
            });
        }
    });
};

updateInput();

// Set header nav actions
document.querySelectorAll(".cal-btn1").forEach((btn) => {
    btn.addEventListener("click", () => {
        updateCalendar(btn);
        updateInput();
        enableDisableMonthNavigation();
    });
});

const enableDisableMonthNavigation = () => {
    var back_btn = document.querySelectorAll(".cal-btn1.back1");
    if (month === new Date().getMonth()) {
        back_btn.forEach((btn) => {
            btn.classList.add("disabled");
        })
    }
    else {
        back_btn.forEach((btn) => {
            btn.classList.remove("disabled");
        })
    }
}

enableDisableMonthNavigation()
}
dt2()

// input.addEventListener('click', () => {
//     document.querySelector('#date_picker_calendar').classList.toggle('hidden');
//     // document.querySelector('#date_picker_input').classList.toggle('showCal');
//     //   document.querySelector('#date').classList.toggle('onFocus');
// });