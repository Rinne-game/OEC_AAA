const BUS_Time_Weekday_OECU_Shijonawate = [
    { time: "10:30", To: "寝屋川キャンパス" },
    { time: "11:50", To: "寝屋川キャンパス" },
    { time: "12:50", To: "寝屋川キャンパス" },
    { time: "13:50", To: "寝屋川キャンパス" },
    { time: "14:50", To: "寝屋川キャンパス" },
    { time: "15:50", To: "寝屋川キャンパス" },
    { time: "16:50", To: "寝屋川キャンパス" },
    { time: "17:45", To: "寝屋川キャンパス" },
    { time: "17:50", To: "寝屋川キャンパス" },
    { time: "18:50", To: "寝屋川キャンパス" },
    { time: "19:50", To: "寝屋川キャンパス" },
    { time: "20:50", To: "寝屋川キャンパス(最終)" }
];
const BUS_Time_Holiday_OECU_Shijonawate = [
    { time: "10:30", To: "寝屋川キャンパス" },
    { time: "11:50", To: "寝屋川キャンパス" },
    { time: "12:50", To: "寝屋川キャンパス" },
    { time: "13:50", To: "寝屋川キャンパス" },
    { time: "14:50", To: "寝屋川キャンパス" },
    { time: "15:50", To: "寝屋川キャンパス" },
    { time: "16:50", To: "寝屋川キャンパス" },
    { time: "17:50", To: "寝屋川キャンパス" },
    { time: "18:50", To: "寝屋川キャンパス" },
    { time: "19:50", To: "寝屋川キャンパス(最終)" }
];
const BUS_Time_Vacation_OECU_Shijonawate = [
    { time: "10:30", To: "寝屋川キャンパス" },
    { time: "11:50", To: "寝屋川キャンパス" },
    { time: "12:50", To: "寝屋川キャンパス" },
    { time: "13:50", To: "寝屋川キャンパス" },
    { time: "14:50", To: "寝屋川キャンパス" },
    { time: "15:50", To: "寝屋川キャンパス" },
    { time: "16:50", To: "寝屋川キャンパス" },
    { time: "17:50", To: "寝屋川キャンパス" },
    { time: "18:50", To: "寝屋川キャンパス" },
    { time: "19:50", To: "寝屋川キャンパス" },
    { time: "20:50", To: "寝屋川キャンパス(最終)" }
]; const BUS_Time_Weekday_OECU_Neyagawa = [
    { time: "8:25", To: "四條畷キャンパス" },
    { time: "8:30", To: "四條畷キャンパス" },
    { time: "9:05", To: "四條畷キャンパス" },
    { time: "9:10", To: "四條畷キャンパス" },
    { time: "10:00", To: "四條畷キャンパス" },
    { time: "11:00", To: "四條畷キャンパス" },
    { time: "12:20", To: "四條畷キャンパス" },
    { time: "13:20", To: "四條畷キャンパス" },
    { time: "14:20", To: "四條畷キャンパス" },
    { time: "15:20", To: "四條畷キャンパス" },
    { time: "16:20", To: "四條畷キャンパス" },
    { time: "17:20", To: "四條畷キャンパス" },
    { time: "18:20", To: "四條畷キャンパス(最終)" },
];
const BUS_Time_Holiday_OECU_Neyagawa = [
    { time: "8:25", To: "四條畷キャンパス" },
    { time: "9:05", To: "四條畷キャンパス" },
    { time: "10:00", To: "四條畷キャンパス" },
    { time: "11:00", To: "四條畷キャンパス" },
    { time: "12:20", To: "四條畷キャンパス" },
    { time: "13:20", To: "四條畷キャンパス" },
    { time: "14:20", To: "四條畷キャンパス" },
    { time: "15:20", To: "四條畷キャンパス" },
    { time: "16:20", To: "四條畷キャンパス" },
    { time: "17:20", To: "四條畷キャンパス" },
    { time: "18:20", To: "四條畷キャンパス(最終)" },
];

function getNextBusTime_OECU(campus, off = 0, arg = 0) {
    let BUS_Time = null;
    const now = new Date();
    let currentMinutes = now.getHours() * 60 + now.getMinutes();
    switch (campus) {
        case "Neyagawa":
            switch (isWeekendM()) {
                case 0:
                case 1:
                    BUS_Time = BUS_Time_Holiday_OECU_Neyagawa;
                    break;
                case 2:
                    BUS_Time = BUS_Time_Weekday_OECU_Neyagawa;
                    break;
            }
            switch (arg) {
                case 1: currentMinutes = 10 * 60 + 45;
                    break;
                case 2: currentMinutes = 12 * 60 + 40;
                    break;
                case 3: currentMinutes = 15 * 60 + 10;
                    break;
                case 4: currentMinutes = 17 * 60 + 5;
                    break;
                case 5: currentMinutes = 19 * 60;
                    break;
                default: currentMinutes = now.getHours() * 60 + now.getMinutes();
                    break;
            }
            break;
        default:
            switch (isWeekendM()) {
                case 0:
                    BUS_Time = BUS_Time_Holiday_OECU_Shijonawate;
                    break;
                case 1:
                    BUS_Time = BUS_Time_Vacation_OECU_Shijonawate;
                    break;
                case 2:
                    BUS_Time = BUS_Time_Weekday_OECU_Shijonawate;
                    break;
            }
            switch (arg) {
                case 1: currentMinutes = 11 * 60 + 15;
                    break;
                case 2: currentMinutes = 13 * 60 + 10;
                    break;
                case 3: currentMinutes = 15 * 60 + 40;
                    break;
                case 4: currentMinutes = 17 * 60 + 35;
                    break;
                case 5: currentMinutes = 19 * 60 + 30;
                    break;
                default: currentMinutes = now.getHours() * 60 + now.getMinutes();
                    break;
            }
            break;
    }

    // 各バスの時間を分に変換して、現在時刻より後のものを探す
    const futureBuses = BUS_Time
        .map(bus => {
            const [hours, minutes] = bus.time.split(":").map(Number);
            return {
                ...bus,
                totalMinutes: hours * 60 + minutes
            };
        })
        .filter(bus => bus.totalMinutes > currentMinutes)
        .sort((a, b) => a.totalMinutes - b.totalMinutes);

    // 次のバスがあれば返す

    return futureBuses.length > off ? futureBuses[off].time : "";
}
function getNextBus_To_OECU(campus, off = 0, arg = 0) {
    let BUS_Time = null;
    const now = new Date();
    let currentMinutes = now.getHours() * 60 + now.getMinutes();
    switch (campus) {
        case "Neyagawa":
            switch (isWeekendM()) {
                case 0:
                case 1:
                    BUS_Time = BUS_Time_Holiday_OECU_Neyagawa;
                    break;
                case 2:
                    BUS_Time = BUS_Time_Weekday_OECU_Neyagawa;
                    break;
            }
            switch (arg) {
                case 1: currentMinutes = 10 * 60 + 45;
                    break;
                case 2: currentMinutes = 12 * 60 + 40;
                    break;
                case 3: currentMinutes = 15 * 60 + 10;
                    break;
                case 4: currentMinutes = 17 * 60 + 5;
                    break;
                case 5: currentMinutes = 19 * 60;
                    break;
                default: currentMinutes = now.getHours() * 60 + now.getMinutes();
                    break;
            }
            break;
        default:
            switch (isWeekendM()) {
                case 0:
                    BUS_Time = BUS_Time_Holiday_OECU_Shijonawate;
                    break;
                case 1:
                    BUS_Time = BUS_Time_Vacation_OECU_Shijonawate;
                    break;
                case 2:
                    BUS_Time = BUS_Time_Weekday_OECU_Shijonawate;
                    break;
            }
            switch (arg) {
                case 1: currentMinutes = 11 * 60 + 15;
                    break;
                case 2: currentMinutes = 13 * 60 + 10;
                    break;
                case 3: currentMinutes = 15 * 60 + 40;
                    break;
                case 4: currentMinutes = 17 * 60 + 35;
                    break;
                case 5: currentMinutes = 19 * 60 + 30;
                    break;
                default: currentMinutes = now.getHours() * 60 + now.getMinutes();
                    break;
            }
            break;
    }

    // 各バスの時間を分に変換して、現在時刻より後のものを探す
    const futureBuses = BUS_Time
        .map(bus => {
            const [hours, minutes] = bus.time.split(":").map(Number);
            return {
                ...bus,
                totalMinutes: hours * 60 + minutes
            };
        })
        .filter(bus => bus.totalMinutes > currentMinutes)
        .sort((a, b) => a.totalMinutes - b.totalMinutes);

    // 次のバスがあれば返す
    return futureBuses.length > off ? futureBuses[off].To : "本日の運行は終了しました";
}
function getMinutesUntilNextBus_OECU(campus, off = 0, arg = 0) {
    let BUS_Time = null;
    const now = new Date();
    let currentMinutes = now.getHours() * 60 + now.getMinutes();
    switch (campus) {
        case "Neyagawa":
            switch (isWeekendM()) {
                case 0:
                case 1:
                    BUS_Time = BUS_Time_Holiday_OECU_Neyagawa;
                    break;
                case 2:
                    BUS_Time = BUS_Time_Weekday_OECU_Neyagawa;
                    break;
            }
            switch (arg) {
                case 1: currentMinutes = 10 * 60 + 45;
                    break;
                case 2: currentMinutes = 12 * 60 + 40;
                    break;
                case 3: currentMinutes = 15 * 60 + 10;
                    break;
                case 4: currentMinutes = 17 * 60 + 5;
                    break;
                case 5: currentMinutes = 19 * 60;
                    break;
                default: currentMinutes = now.getHours() * 60 + now.getMinutes();
                    break;
            }
            break;
        default:
            switch (isWeekendM()) {
                case 0:
                    BUS_Time = BUS_Time_Holiday_OECU_Shijonawate;
                    break;
                case 1:
                    BUS_Time = BUS_Time_Vacation_OECU_Shijonawate;
                    break;
                case 2:
                    BUS_Time = BUS_Time_Weekday_OECU_Shijonawate;
                    break;
            }
            switch (arg) {
                case 1: currentMinutes = 11 * 60 + 15;
                    break;
                case 2: currentMinutes = 13 * 60 + 10;
                    break;
                case 3: currentMinutes = 15 * 60 + 40;
                    break;
                case 4: currentMinutes = 17 * 60 + 35;
                    break;
                case 5: currentMinutes = 19 * 60 + 30;
                    break;
                default: currentMinutes = now.getHours() * 60 + now.getMinutes();
                    break;
            }
            break;
    }

    const futureBuses = BUS_Time
        .map(bus => {
            const [hours, minutes] = bus.time.split(":").map(Number);
            return {
                ...bus,
                totalMinutes: hours * 60 + minutes
            };
        })
        .filter(bus => bus.totalMinutes > currentMinutes)
        .sort((a, b) => a.totalMinutes - b.totalMinutes);

    if (futureBuses.length > off) {
        const nextBus = futureBuses[off];
        const diff = nextBus.totalMinutes - currentMinutes;
        return diff;  // 残り時間（分）
    } else {
        return -1; // バスがもう無い
    }
}
function updateBusTimes_OECU(campus, argIndex = 0) {
    //time_OECU_Neyahawa
    //time_OECU_Shijounawate
    const timeElement1 = document.getElementById('time_OECU_' + campus);
    const destinationElement1 = document.getElementById('To_OECU_' + campus);
    const untilElement1 = document.getElementById('UntilNextBus_OECU_' + campus);

    const timeElement2 = document.getElementById('time_OECU_' + campus + '_2nd');
    const destinationElement2 = document.getElementById('To_OECU_' + campus + '_2nd');
    const untilElement2 = document.getElementById('UntilNextBus_OECU_' + campus + '_2nd');

    // 1本目（直近）
    timeElement1.textContent = getNextBusTime_OECU(campus, 0, argIndex);
    destinationElement1.textContent = getNextBus_To_OECU(campus, 0, argIndex);
    untilElement1.textContent = getMinutesUntilNextBus_OECU(campus, 0, argIndex) + "分";

    // 2本目
    timeElement2.textContent = getNextBusTime_OECU(campus, 1, argIndex);
    destinationElement2.textContent = getNextBus_To_OECU(campus, 1, argIndex);
    untilElement2.textContent = getMinutesUntilNextBus_OECU(campus, 1, argIndex) + "分";
}