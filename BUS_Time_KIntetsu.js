const _BUS_Time = {
    BUS_Time_Weekday: [
        { time: "8:56", To: "四条畷", id: 1 },
        { time: "9:45", To: "四条畷", id: 1 },
        { time: "10:52", To: "四条畷", id: 1 },
        { time: "11:00", To: "四条畷(直通)", id: 2 },
        { time: "11:05", To: "四条畷(直通)", id: 2 },
        { time: "12:13", To: "四条畷(直通)", id: 2 },
        { time: "12:43", To: "四条畷(直通)", id: 2 },
        { time: "12:48", To: "四条畷(直通)", id: 2 },
        { time: "13:11", To: "四条畷", id: 1 },
        { time: "13:20", To: "四条畷(直通)", id: 2 },
        { time: "13:25", To: "四条畷(直通)", id: 2 },
        { time: "13:50", To: "四条畷(直通)", id: 2 },
        { time: "13:56", To: "四条畷", id: 1 },
        { time: "14:10", To: "四条畷(直通)", id: 2 },
        { time: "14:22", To: "四条畷(直通)", id: 2 },
        { time: "14:41", To: "四条畷", id: 1 },
        { time: "15:20", To: "四条畷(直通)", id: 2 },
        { time: "15:25", To: "四条畷(直通)", id: 2 },
        { time: "15:30", To: "四条畷(直通)", id: 2 },
        { time: "15:43", To: "四条畷", id: 1 },
        { time: "16:00", To: "四条畷(直通)", id: 2 },
        { time: "16:13", To: "四条畷", id: 1 },
        { time: "16:30", To: "四条畷(直通)", id: 2 },
        { time: "16:43", To: "四条畷", id: 1 },
        { time: "17:13", To: "四条畷", id: 1 },
        { time: "17:20", To: "四条畷", id: 1 },
        { time: "17:25", To: "四条畷(直通)", id: 2 },
        { time: "17:50", To: "四条畷(直通)", id: 2 },
        { time: "18:14", To: "四条畷", id: 1 },
        { time: "18:45", To: "四条畷(四条畷神社前までの各バス停に停まる最終)", id: 1 },
        { time: "19:10", To: "四条畷(直通)", id: 2 },
        { time: "19:20", To: "四条畷(直通)", id: 2 },
        { time: "19:40", To: "四条畷(直通)", id: 2 },
        { time: "20:10", To: "四条畷(直通,最終)", id: 2 }
    ],
    BUS_Time_Holiday: [
        { time: "8:41", To: "四条畷", id: 1 },
        { time: "9:26", To: "四条畷", id: 1 },
        { time: "10:15", To: "四条畷", id: 1 },
        { time: "11:22", To: "四条畷", id: 1 },
        { time: "12:51", To: "四条畷", id: 1 },
        { time: "13:41", To: "四条畷", id: 1 },
        { time: "14:26", To: "四条畷", id: 1 },
        { time: "15:11", To: "四条畷", id: 1 },
        { time: "16:41", To: "四条畷", id: 1 },
        { time: "17:28", To: "四条畷(四条畷神社前までの各バス停に停まる最終)", id: 1 },
        { time: "18:02", To: "四条畷(直通,最終)", id: 2 }
    ]
};
//清滝団地経由:0,通常:1,直行:2
//console.log("info:schedule>>" + schedule);
function getNextBusTime(off = 0, arg = 0, Filter = 0, schedule = -1) {
    let BUS_Time = null;
    switch (schedule) {
        /*
        case 0:
            BUS_Time = _BUS_Time.BUS_Time_Weekday;
            break;
        case 1:
            BUS_Time = _BUS_Time.BUS_Time_Holiday;
            break;*/
        default:
            if (isWeekend())
                BUS_Time = _BUS_Time.BUS_Time_Holiday;
            else
                BUS_Time = _BUS_Time.BUS_Time_Weekday;
            break;
    }
    const now = new Date();
    let currentMinutes = now.getHours() * 60 + now.getMinutes();
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

    // 各バスの時間を分に変換して、現在時刻より後のものを探す
    const futureBuses = BUS_Time
        .map(bus => {
            const [hours, minutes] = bus.time.split(":").map(Number);
            return {
                ...bus,
                totalMinutes: hours * 60 + minutes
            };
        })
        .filter(bus => {
            //
            switch (Filter) {
                case 1:
                    return bus.id == 0;
                case 2:
                    return bus.id <= 1;
                case 3:
                    return bus.id == 2;
                default: return true;
            }
        })
        .filter(bus => bus.totalMinutes > currentMinutes)
        .sort((a, b) => a.totalMinutes - b.totalMinutes);

    // 次のバスがあれば返す
    return futureBuses.length > off ? futureBuses[off].time : "";
}
function getNextBus_To(off = 0, arg = 0, Filter = 0, schedule = -1) {
    let BUS_Time = null;
    switch (schedule) {
        /*
        case 0:
            BUS_Time = _BUS_Time.BUS_Time_Weekday;
            break;
        case 1:
            BUS_Time = _BUS_Time.BUS_Time_Holiday;
            break;*/
        default:
            if (isWeekend())
                BUS_Time = _BUS_Time.BUS_Time_Holiday;
            else
                BUS_Time = _BUS_Time.BUS_Time_Weekday;
            break;
    }
    const now = new Date();
    let currentMinutes = now.getHours() * 60 + now.getMinutes();
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

    // 各バスの時間を分に変換して、現在時刻より後のものを探す
    const futureBuses = BUS_Time
        .map(bus => {
            const [hours, minutes] = bus.time.split(":").map(Number);
            return {
                ...bus,
                totalMinutes: hours * 60 + minutes
            };
        })
        .filter(bus => {
            //
            switch (Filter) {
                case 1:
                    return bus.id == 0;
                case 2:
                    return bus.id <= 1;
                case 3:
                    return bus.id == 2;
                default: return true;
            }
        })
        .filter(bus => bus.totalMinutes > currentMinutes)
        .sort((a, b) => a.totalMinutes - b.totalMinutes);

    // 次のバスがあれば返す
    return futureBuses.length > off ? futureBuses[off].To : "本日の運行は終了しました";
}
function getMinutesUntilNextBus(off = 0, arg = 0, Filter = 0, schedule = -1) {
    let BUS_Time = null;
    switch (schedule) {
        /*
        case 0:
            BUS_Time = _BUS_Time.BUS_Time_Weekday;
            break;
        case 1:
            BUS_Time = _BUS_Time.BUS_Time_Holiday;
            break;*/
        default:
            if (isWeekend())
                BUS_Time = _BUS_Time.BUS_Time_Holiday;
            else
                BUS_Time = _BUS_Time.BUS_Time_Weekday;
            break;
    }

    const now = new Date();
    let currentMinutes = now.getHours() * 60 + now.getMinutes();
    switch (arg) {
        case 1: currentMinutes = 11 * 60 + 15; break;
        case 2: currentMinutes = 13 * 60 + 10; break;
        case 3: currentMinutes = 15 * 60 + 40; break;
        case 4: currentMinutes = 17 * 60 + 35; break;
        case 5: currentMinutes = 19 * 60 + 30; break;
        default: currentMinutes = now.getHours() * 60 + now.getMinutes(); break;
    }

    const futureBuses = BUS_Time
        .map(bus => {
            const [hours, minutes] = bus.time.split(":").map(Number);
            return {
                ...bus,
                totalMinutes: hours * 60 + minutes
            };
        })
        .filter(bus => {
            //
            switch (Filter) {
                case 1:
                    return bus.id == 0;
                case 2:
                    return bus.id <= 1;
                case 3:
                    return bus.id == 2;
                default: return true;
            }
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
function updateBusTimes(argIndex = 0, Filter = 0, schedule = -1) {

    const timeElement1 = document.getElementById('time_Kintetsu');
    const destinationElement1 = document.getElementById('To_Kintetsu');
    const untilElement1 = document.getElementById('UntilNextBus_Kintetsu');

    const timeElement2 = document.getElementById('time_Kintetsu_2nd');
    const destinationElement2 = document.getElementById('To_Kintetsu_2nd');
    const untilElement2 = document.getElementById('UntilNextBus_Kintetsu_2nd');

    // 1本目（直近）
    timeElement1.textContent = getNextBusTime(0, argIndex, Filter, schedule);
    destinationElement1.textContent = getNextBus_To(0, argIndex, Filter, schedule);
    untilElement1.textContent = getMinutesUntilNextBus(0, argIndex, Filter, schedule) + "分";

    // 2本目
    timeElement2.textContent = getNextBusTime(1, argIndex, Filter, schedule);
    destinationElement2.textContent = getNextBus_To(1, argIndex, Filter, schedule);
    untilElement2.textContent = getMinutesUntilNextBus(1, argIndex, Filter, schedule) + "分";
}
