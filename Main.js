function textA_Neyahawa(hours, minutes, seconds) {
    let timeA = Number(hours) * 60 + Number(minutes);
    let Progress = document.getElementById('progress');
    let isOn_Neyagawa_1 =/* localStorage.getItem('Neyagawa_1');
    console.log("1:" + isOn_Neyagawa_1);
    if (isOn_Neyagawa_1 == null) isOn_Neyagawa_1 = */document.getElementById('Neyagawa_1').checked;
    let isOn_Neyagawa_2 =/* localStorage.getItem('Neyagawa_2');
    console.log("2:" + isOn_Neyagawa_2);
    if (isOn_Neyagawa_2 == null) isOn_Neyagawa_2 = */document.getElementById('Neyagawa_2').checked;
    let isOn_Neyagawa_3 =/* localStorage.getItem('Neyagawa_3');
    console.log("3:" + isOn_Neyagawa_3);
    if (isOn_Neyagawa_3 == null) isOn_Neyagawa_3 = */document.getElementById('Neyagawa_3').checked;
    let isOn_Neyagawa_4 =/* localStorage.getItem('Neyagawa_4');
    console.log("4:" + isOn_Neyagawa_4);
    if (isOn_Neyagawa_4 == null) isOn_Neyagawa_4 = */document.getElementById('Neyagawa_4').checked;
    let isOn_Neyagawa_5 =/* localStorage.getItem('Neyagawa_5');
    console.log("5:" + isOn_Neyagawa_5);
    if (isOn_Neyagawa_5 == null) isOn_Neyagawa_5 = */document.getElementById('Neyagawa_5').checked;

    if ((hours < 8 || (hours == 9 && minutes < 0)) && isOn_Neyagawa_1) {
        //1限までの時間
        let timeB = 8 * 60 + 59;
        let time = timeB - timeA;
        if (time <= 120)
            document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
        else
            document.getElementById('textA').innerText = "次の授業まで:" + (9 - hours) + "時間" + (60 - minutes) + "分" + seconds + "秒";
    }
    else if (((hours == 9 && minutes >= 0) || (hours == 10 && minutes < 45)) && isOn_Neyagawa_1) {
        //1限
        let timeB = 10 * 60 + 44;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:1限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours <= 9 || (hours == 10 && minutes < 55)) && isOn_Neyagawa_2) {
        //1限~2限の間
        let timeB = 10 * 60 + 54;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if (((hours == 10 && minutes >= 55) || hours == 11 || (hours == 12 && minutes < 40)) && isOn_Neyagawa_2) {
        //2限
        let timeB = 12 * 60 + 39;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:2限(あと" + time + "分" + seconds + "秒)";
    }
    else if (((hours <= 12) || (hours == 13 && minutes < 25)) && isOn_Neyagawa_3) {
        //2限~3限の間
        let timeB = 13 * 60 + 24;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if (((hours == 13 && minutes >= 25) || hours == 14 || (hours == 15 && minutes < 10)) && isOn_Neyagawa_3) {
        //3限
        let timeB = 15 * 60 + 9;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:3限(あと" + time + "分" + seconds + "秒)";
    }
    else if (((hours < 15) || (hours == 15 && minutes < 20)) && isOn_Neyagawa_4) {
        //3限~4限の間
        let timeB = 15 * 60 + 19;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if (((hours == 15 && minutes >= 20) || hours == 16 || (hours == 17 && minutes < 5)) && isOn_Neyagawa_4) {
        //3限
        let timeB = 17 * 60 + 4;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:4限(あと" + time + "分" + seconds + "秒)";
    }
    else if (((hours < 17) || (hours == 17 && minutes < 15)) && isOn_Neyagawa_5) {
        //4限~5限の間
        let timeB = 17 * 60 + 14;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if (((hours == 17 && minutes >= 45) || hours == 18 || (hours == 19 && minutes < 0)) && isOn_Neyagawa_5) {
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
    let isOn_Shijonawate_1 =/* localStorage.getItem('Shijonawate_1');
    console.log("1:" + isOn_Shijonawate_1);
    if (isOn_Shijonawate_1 == null) isOn_Shijonawate_1 = */document.getElementById('Shijonawate_1').checked;
    let isOn_Shijonawate_2 =/* localStorage.getItem('Shijonawate_2');
    console.log("2:" + isOn_Shijonawate_2);
    if (isOn_Shijonawate_2 == null) isOn_Shijonawate_2 = */document.getElementById('Shijonawate_2').checked;
    let isOn_Shijonawate_3 =/* localStorage.getItem('Shijonawate_3');
    console.log("3:" + isOn_Shijonawate_3);
    if (isOn_Shijonawate_3 == null) isOn_Shijonawate_3 = */document.getElementById('Shijonawate_3').checked;
    let isOn_Shijonawate_4 =/* localStorage.getItem('Shijonawate_4');
    console.log("4:" + isOn_Shijonawate_4);
    if (isOn_Shijonawate_4 == null) isOn_Shijonawate_4 = */document.getElementById('Shijonawate_4').checked;
    let isOn_Shijonawate_5 =/* localStorage.getItem('Shijonawate_5');
    console.log("5:" + isOn_Shijonawate_5);
    if (isOn_Shijonawate_5 == null) isOn_Shijonawate_5 = */document.getElementById('Shijonawate_5').checked;

    if ((hours < 8 || (hours == 9 && minutes < 30)) && isOn_Shijonawate_1) {
        //1限までの時間
        let timeB = 9 * 60 + 29;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if (((hours == 9 && minutes >= 30) || hours == 10 || (hours == 11 && minutes < 15)) && isOn_Shijonawate_1) {
        //1限
        let timeB = 11 * 60 + 14;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:1限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours < 10 || (hours == 11 && minutes < 25)) && isOn_Shijonawate_2) {
        //1限~2限の間
        let timeB = 11 * 60 + 24;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if (((hours == 11 && minutes >= 25) || hours == 12 || (hours == 13 && minutes < 10)) && isOn_Shijonawate_2) {
        //2限
        let timeB = 13 * 60 + 9;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:2限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours < 13 || (hours == 13 && minutes < 55)) && isOn_Shijonawate_3) {
        //2限~3限の間
        let timeB = 13 * 60 + 54;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if (((hours == 13 && minutes >= 55) || hours == 14 || (hours == 15 && minutes < 40)) && isOn_Shijonawate_3) {
        //3限
        let timeB = 15 * 60 + 39;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:3限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours < 15 || (hours == 15 && minutes < 50)) && isOn_Shijonawate_4) {
        //3限~4限の間
        let timeB = 15 * 60 + 49;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if (((hours == 15 && minutes >= 50) || hours == 16 || (hours == 17 && minutes < 35)) && isOn_Shijonawate_4) {
        //3限
        let timeB = 17 * 60 + 34;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:4限(あと" + time + "分" + seconds + "秒)";
    }
    else if ((hours < 17 || (hours == 17 && minutes < 45)) && isOn_Shijonawate_5) {
        //4限~5限の間
        let timeB = 17 * 60 + 44;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "次の授業まで:" + time + "分" + seconds + "秒";
    }
    else if (((hours == 17 && minutes >= 45) || hours == 18 || (hours == 19 && minutes < 30)) && isOn_Shijonawate_5) {
        //5限
        let timeB = 19 * 60 + 29;
        let time = timeB - timeA;
        document.getElementById('textA').innerText = "現在:5限(あと" + time + "分" + seconds + "秒)";
    }
    else {
        document.getElementById('textA').innerText = "";

    }
    /*
    console.log("Saving...");
    localStorage.setItem('Shijonawate_1', isOn_Shijonawate_1);
    localStorage.setItem('Shijonawate_2', isOn_Shijonawate_2);
    localStorage.setItem('Shijonawate_3', isOn_Shijonawate_3);
    localStorage.setItem('Shijonawate_4', isOn_Shijonawate_4);
    localStorage.setItem('Shijonawate_5', isOn_Shijonawate_5);

    console.log("1:" + isOn_Shijonawate_1);
    console.log("2:" + isOn_Shijonawate_2);
    console.log("3:" + isOn_Shijonawate_3);
    console.log("4:" + isOn_Shijonawate_4);
    console.log("5:" + isOn_Shijonawate_5);
    console.log("Sucsess!!!");*/
}