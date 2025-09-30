const baseClassSchedule = [
    { name: "1限", start: 9 * 60 + 29, end: 11 * 60 + 14, checkboxId: "1" },
    { name: "2限", start: 11 * 60 + 24, end: 13 * 60 + 9, checkboxId: "2" },
    { name: "3限", start: 13 * 60 + 54, end: 15 * 60 + 39, checkboxId: "3" },
    { name: "4限", start: 15 * 60 + 49, end: 17 * 60 + 34, checkboxId: "4" },
    { name: "5限", start: 17 * 60 + 44, end: 19 * 60 + 29, checkboxId: "5" },
];

function updateClassStatus(hours, minutes, seconds, campus) {
    const timeNow = (hours * 60 + minutes + seconds / 60);
    const classes = getAdjustedClassSchedule(campus);
    const display = document.getElementById("textA");

    for (let i = 0; i < classes.length; i++) {
        const c = classes[i];
        const isChecked1 = document.getElementById(c.checkboxId);
        let isChecked = isChecked1.checked;
        if (!isChecked) continue;

        const prevEnd = i === 0 ? 0 : classes[i - 1].end;
        console.log("time>>" + hours + ":" + minutes + "(" + timeNow + ")");
        console.log("id:[" + c.checkboxId + "]>>" + isChecked1.checked + "time:" + prevEnd + "-" + c.start + "-" + c.end + ",[Next:" + (timeNow >= prevEnd && timeNow < c.start) + ",Now:" + (timeNow >= c.start && timeNow < c.end) + "]");
        if (timeNow < c.start) {
            const diff = Math.ceil(c.start - timeNow);
            display.innerText = `次の授業まで: ${diff}分${seconds}秒`;
            return;
        } else if (timeNow >= c.start && timeNow < c.end) {
            const diff = Math.ceil(c.end - timeNow);
            display.innerText = `現在: ${c.name} (あと${diff}分${seconds}秒)`;
            return;
        }
    }

    display.innerText = "";
}
function getAdjustedClassSchedule(campus) {
    const offset = campus === "Neyagawa" ? -30 : 0;
    return baseClassSchedule.map(cls => ({
        ...cls,
        start: cls.start + offset,
        end: cls.end + offset,
        checkboxId: `${campus}_${cls.checkboxId}`
    }));
} function isWithinPeriod(startDateStr, endDateStr) {
    const now = new Date(); // 現在日時
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    // 時間部分を無視して日付だけで判定したい場合は以下のように日付だけを使う
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    return today >= startDate && today <= endDate;
}
function isWeekendM() {
    const today = new Date();
    const day = today.getDay(); // 日曜:0, 月曜:1, ..., 土曜:6
    if (day === 0 || day === 6) return 0;
    else if (isWithinPeriod("08-04", "10-01") || isWithinPeriod("02-02", "03-31")) return 1;
    return 2;
}
function isWeekend() {
    // return isWeekendOrHoliday();
    // console.log("APIの使用:" + !(localStorage.getItem("API_agree") != true));
    // if (localStorage.getItem("API_agree") != true) return false;
    if (isWithinPeriod("08-04", "10-01") || isWithinPeriod("02-02", "03-31")) return true;
    let result = false;
    setTimeout(() => {
        result = isWeekendOrHoliday()
    }, 10);
    return result;
    /*
    const today = new Date();
    const day = today.getDay(); // 日曜:0, 月曜:1, ..., 土曜:6
    return day === 0 || day === 6;*/
} function getTodayString() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // 月は0始まり
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}
async function isWeekendOrHoliday() {
    const today = new Date();
    const day = today.getDay(); // 日曜:0, 月曜:1, ..., 土曜:6
    const dateString = today.toISOString().split('T')[0]; // 'yyyy-mm-dd' 形式に変換

    // 土日チェック
    if (day === 0 || day === 6) {
        return true;
    }

    // 祝日APIを使って祝日を取得
    const year = today.getFullYear();
    const month = today.getFullYear();
    const holidaysUrl = `http://api.national-holidays.jp/all`;
    //${getTodayString()}
    // console.log(`${getTodayString()}`);

    try {
        const response = await fetch(holidaysUrl);
        const holidays = await response.json((item) => { });
        const result = holidays.includes((item) => item.date == getTodayString());
        return result;

        // 祝日チェック
        return false;

    } catch (error) {
        console.error("祝日情報の取得に失敗しました", error);
        return false;  // APIに失敗した場合は祝日でないと判断
    }
}

