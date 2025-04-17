const BUS_Time_Weekday_Kintetsu = [
    { time: "9:26", To: "四条畷(清滝団地経由)" },
    { time: "10:15", To: "四条畷(清滝団地経由)" },
    { time: "11:22", To: "四条畷(清滝団地経由)" },
    { time: "11:30", To: "四条畷(直通)" },
    { time: "11:35", To: "四条畷(直通)" },
    { time: "13:14", To: "四条畷(直通)" },
    { time: "13:19", To: "四条畷(直通)" },
    { time: "13:41", To: "四条畷(清滝団地経由)" },
    { time: "13:50", To: "四条畷(直通)" },
    { time: "13:55", To: "四条畷(直通)" },
    { time: "14:20", To: "四条畷(直通)" },
    { time: "14:26", To: "四条畷(直通)" },
    { time: "14:40", To: "四条畷(直通)" },
    { time: "14:52", To: "四条畷(直通)" },
    { time: "15:11", To: "四条畷(直通)" },
    { time: "15:50", To: "四条畷(直通)" },
    { time: "15:55", To: "四条畷(直通)" },
    { time: "16:00", To: "四条畷(直通)" },
    { time: "16:13", To: "四条畷" },
    { time: "16:30", To: "四条畷(直通)" },
    { time: "16:43", To: "四条畷" },
    { time: "17:00", To: "四条畷(直通)" },
    { time: "17:13", To: "四条畷" },
    { time: "17:43", To: "四条畷" },
    { time: "17:50", To: "四条畷(直通)" },
    { time: "17:55", To: "四条畷(直通)" },
    { time: "18:20", To: "四条畷" },
    { time: "18:44", To: "四条畷" },
    { time: "19:15", To: "四条畷(四条畷神社前までの各バス停に停まる最終)" },
    { time: "19:40", To: "四条畷(直通)" },
    { time: "19:50", To: "四条畷(直通)" },
    { time: "20:10", To: "四条畷(直通)" },
    { time: "20:40", To: "四条畷(直通,最終)" }
];
const BUS_Time_Holiday_Kintetsu = [
    { time: "8:41", To: "四条畷(清滝団地経由)" },
    { time: "9:26", To: "四条畷(清滝団地経由)" },
    { time: "10:15", To: "四条畷(清滝団地経由)" },
    { time: "11:22", To: "四条畷(清滝団地経由)" },
    { time: "12:51", To: "四条畷(清滝団地経由)" },
    { time: "13:41", To: "四条畷(清滝団地経由)" },
    { time: "14:26", To: "四条畷(清滝団地経由)" },
    { time: "15:11", To: "四条畷(清滝団地経由)" },
    { time: "16:43", To: "四条畷" },
    { time: "17:28", To: "四条畷(最終)" }
];
function getNextBusTime(off = 0, arg = 0) {
    let BUS_Time = null;
    if (isWeekend())
        BUS_Time = BUS_Time_Holiday_Kintetsu;
    else
        BUS_Time = BUS_Time_Weekday_Kintetsu;
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
        .filter(bus => bus.totalMinutes > currentMinutes)
        .sort((a, b) => a.totalMinutes - b.totalMinutes);

    // 次のバスがあれば返す
    return futureBuses.length > 0 ? futureBuses[off].time : "";
}
function getNextBus_To(off = 0, arg = 0) {
    let BUS_Time = null;
    if (isWeekend())
        BUS_Time = BUS_Time_Holiday_Kintetsu;
    else
        BUS_Time = BUS_Time_Weekday_Kintetsu;
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
        .filter(bus => bus.totalMinutes > currentMinutes)
        .sort((a, b) => a.totalMinutes - b.totalMinutes);

    // 次のバスがあれば返す
    return futureBuses.length > 0 ? futureBuses[off].To : "本日の運行は終了しました";
}