//create monolog text
const text_blockqoute = "'To be, or not to be, that is the question...'";
const text_blockqoute_footer = "'William Shakespeare, \"from Hamlet\"'";
//show text blockqoute 
{
    let cnt = 0;
    let my_Interval = setInterval(() => {
        if (cnt == text_blockqoute.length + 1) { clearInterval(my_Interval); return; }
        if (cnt < text_blockqoute.length)
            document.getElementById("my_bq").innerHTML += text_blockqoute[cnt];
        if (cnt == text_blockqoute.length)
            document.getElementById("my_bq_footer").innerHTML = text_blockqoute_footer;
        cnt++;
    }, 200);
}
//---------------------------
//STOPWATCH
//---------------------------
{
    let milliseconds = 0, seconds = 0, minutes = 0;
    let my_Interval;
    let id_runner = 0;
    // click button Start
    function btn_Start() {
        document.getElementById("btn_fixed").disabled = false;
        document.getElementById("btn_start").disabled = true;
        document.getElementById("btn_reset").disabled = true;
        my_Interval = setInterval(() => document.getElementById("_timer").innerHTML = changeTimerText(), 010);
    }
    // click button Stop
    function btn_Stop() {
        clearInterval(my_Interval);
        milliseconds = 0, seconds = 0, minutes = 0;
        document.getElementById("btn_fixed").disabled = true;
        document.getElementById("btn_start").disabled = true;
        document.getElementById("btn_reset").disabled = false;
    }
    // click button Fixed
    function btn_Fixed() {
        let my_li = document.createElement("li");
        let my_textNode = document.createTextNode(showTimerText());
        my_li.appendChild(my_textNode);
        document.getElementById("ol_runners").appendChild(my_li);
    }
    // click button Reset
    function btn_Reset() {
        document.getElementById("ol_runners").innerHTML = null;
        milliseconds = 0, seconds = 0, minutes = 0;
        document.getElementById("_timer").innerHTML = showTimerText();
        document.getElementById("btn_start").disabled = false;
    }
    // change stopwatch time
    function changeTimerText() {
        milliseconds++;   //start milliseconds
        if (milliseconds == 99) {
            milliseconds++;
            milliseconds = 0;
            seconds++;
        }
        if (seconds == 59) {
            seconds++;
            seconds = 0;
            minutes++;
        }
        if (milliseconds == 99 && seconds == 59 && minutes == 99) {
            textTimer = "99:59,99";
            clearInterval(my_Interval);
        }
        return showTimerText();
    }
    //show text timer stopwatch
    function showTimerText() {
        let text_milliseconds = "0" + milliseconds;
        let text_seconds = "0" + seconds;
        let text_minutes = "0" + minutes;
        if (milliseconds > 9) { text_milliseconds = milliseconds; }
        if (seconds > 9) { text_seconds = seconds; }
        if (minutes > 9) { text_minutes = minutes; }
        return text_minutes + ':' + text_seconds + ',' + text_milliseconds;
    }
}






