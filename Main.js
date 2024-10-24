function textA_Neyahawa(hours, minutes, seconds) {
    let timeA = Number(hours) * 60 + Number(minutes);
    let Progress = document.getElementById('progress');

    if (hours < 8 || (hours == 9 && minutes < 0)) {
        //1限までの時間
        let timeB = 8 * 60 + 59;
        let time = timeB - timeA;
        if (time <= 120)
            document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
        else
            document.getElementById('textA').innerText = "次の授業まで:" + (9 - hours) + "時間" + (60 - minutes) + "分" + seconds + "秒";
    }
    else if ((hours == 9 && minutes >= 0) || (hours == 10 && minutes < 45)) {
        //1限
        let timeB = 10 * 60 + 44;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:1限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours == 10 && minutes >= 45) && (hours == 10 && minutes < 55)) {
        //1限~2限の間
        let timeB = 10 * 60 + 54;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if ((hours == 10 && minutes >= 55) || hours == 11 || (hours == 12 && minutes < 40)) {
        //2限
        let timeB = 12 * 60 + 39;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:2限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours == 12 && minutes >= 40) || (hours == 13 && minutes < 25)) {
        //2限~3限の間
        let timeB = 13 * 60 + 24;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if ((hours == 13 && minutes >= 25) || hours == 14 || (hours == 15 && minutes < 10)) {
        //3限
        let timeB = 15 * 60 + 9;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:3限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours == 15 && minutes >= 10) && (hours == 15 && minutes < 20)) {
        //3限~4限の間
        let timeB = 15 * 60 + 19;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if ((hours == 15 && minutes >= 20) || hours == 16 || (hours == 17 && minutes < 5)) {
        //3限
        let timeB = 17 * 60 + 4;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:4限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours == 17 && minutes >= 5) && (hours == 17 && minutes < 15)) {
        //4限~5限の間
        let timeB = 17 * 60 + 14;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if ((hours == 17 && minutes >= 45) || hours == 18 || (hours == 19 && minutes < 0)) {
        //5限
        let timeB = 18 * 60 + 59;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:5限(あと" + time + "分" + seconds + "秒)";
    }
    else {
        document.getElementById('textA').innerText = "";

    }
}
function textA_Sijounawate(hours, minutes, seconds) {
    let timeA = Number(hours) * 60 + Number(minutes);
    let Progress = document.getElementById('progress');

    if (hours < 8 || (hours == 9 && minutes < 30)) {
        //1限までの時間
        let timeB = 9 * 60 + 29;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if ((hours == 9 && minutes >= 30) || hours == 10 || (hours == 11 && minutes < 15)) {
        //1限
        let timeB = 11 * 60 + 14;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:1限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours == 11 && minutes >= 15) && (hours == 11 && minutes < 25)) {
        //1限~2限の間
        let timeB = 11 * 60 + 24;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if ((hours == 11 && minutes >= 25) || hours == 12 || (hours == 13 && minutes < 10)) {
        //2限
        let timeB = 13 * 60 + 9;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:2限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours == 13 && minutes >= 10) && (hours == 13 && minutes < 55)) {
        //2限~3限の間
        let timeB = 13 * 60 + 54;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if ((hours == 13 && minutes >= 55) || hours == 14 || (hours == 15 && minutes < 40)) {
        //3限
        let timeB = 15 * 60 + 39;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:3限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours == 15 && minutes >= 40) && (hours == 15 && minutes < 50)) {
        //3限~4限の間
        let timeB = 15 * 60 + 49;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if ((hours == 15 && minutes >= 50) || hours == 16 || (hours == 17 && minutes < 35)) {
        //3限
        let timeB = 17 * 60 + 34;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:4限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours == 17 && minutes >= 35) && (hours == 17 && minutes < 45)) {
        //4限~5限の間
        let timeB = 17 * 60 + 44;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if ((hours == 17 && minutes >= 45) || hours == 18 || (hours == 19 && minutes < 30)) {
        //5限
        let timeB = 19 * 60 + 29;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:5限(あと" + time + "分" + seconds + "秒)";
    }
    else {
        document.getElementById('textA').innerText = "";

    }
}