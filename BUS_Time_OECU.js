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
        case "Shijonawate":
            if (isWeekend())
                BUS_Time = BUS_Time_Holiday_OECU_Shijonawate;
            else
                BUS_Time = BUS_Time_Weekday_OECU_Shijonawate;
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
        case "Neyagawa":
            if (isWeekend())
                BUS_Time = BUS_Time_Holiday_OECU_Neyagawa;
            else
                BUS_Time = BUS_Time_Weekday_OECU_Neyagawa;
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
    return futureBuses.length > 0 ? futureBuses[off].time : "";
}
function getNextBus_To_OECU(campus, off = 0, arg = 0) {
    let BUS_Time = null;
    const now = new Date();
    let currentMinutes = now.getHours() * 60 + now.getMinutes();
    switch (campus) {
        case "Shijonawate":
            if (isWeekend())
                BUS_Time = BUS_Time_Holiday_OECU_Shijonawate;
            else
                BUS_Time = BUS_Time_Weekday_OECU_Shijonawate;
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
        case "Neyagawa":
            if (isWeekend())
                BUS_Time = BUS_Time_Holiday_OECU_Neyagawa;
            else
                BUS_Time = BUS_Time_Weekday_OECU_Neyagawa;
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
    return futureBuses.length > 0 ? futureBuses[off].To : "本日の運行は終了しました";
}
function getMinutesUntilNextBus_OECU(campus, off = 0, arg = 0) {
    let BUS_Time = null;
    if (isWeekend())
        BUS_Time = BUS_Time_Holiday_Kintetsu;
    else
        BUS_Time = BUS_Time_Weekday_Kintetsu;

    const now = new Date();
    let currentMinutes = now.getHours() * 60 + now.getMinutes();
    switch (campus) {
        case "Shijonawate":
            if (isWeekend())
                BUS_Time = BUS_Time_Holiday_OECU_Shijonawate;
            else
                BUS_Time = BUS_Time_Weekday_OECU_Shijonawate;
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
        case "Neyagawa":
            if (isWeekend())
                BUS_Time = BUS_Time_Holiday_OECU_Neyagawa;
            else
                BUS_Time = BUS_Time_Weekday_OECU_Neyagawa;
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