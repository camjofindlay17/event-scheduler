let nine = document.getElementById("9")
let ten = document.getElementById("10")
let eleven = document.getElementById("11")
let twelve = document.getElementById("12")
let one = document.getElementById("1")
let two = document.getElementById("2")
let three = document.getElementById("3")
let four = document.getElementById("4")
let five = document.getElementById("5")
let saveScr9 = $("#submit-event9")
let saveScr10 = $("#submit-event10")
let saveScr11 = $("#submit-event11")
let saveScr12 = $("#submit-event12")
let saveScr1 = $("#submit-event1")
let saveScr2 = $("#submit-event2")
let saveScr3 = $("#submit-event3")
let saveScr4 = $("#submit-event4")
let saveScr5 = $("#submit-event5")
let time = moment().format("HH:mm:ss")  //HH format to capture military time, so script doesn't repeat at AM/PM intervals

function renderDay() {
let today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"))
};

function renderTime() {
let time = moment();
$("#currentTime").text(time.format("hh:mm:ss a")) //hh format to remove military time from time stamp
};

//function to render the color at each time interval, and clear the log at the end of the day
function renderColor() {
    if (time >= "9:00:00" && time <= "9:59:59") {
        nine.classList.remove("hover")
        nine.contentEditable = "false"
        nine.style = "background-color: red"
    } else if (time >= "10:00:00" && time < "18:00:00") {
        nine.classList.remove("hover")
        nine.contentEditable = "false"
        nine.style = "background-color: gainsboro"
    }
    if (time >= "10:00:00" && time <= "10:59:59") {
        ten.classList.remove("hover")
        ten.contentEditable = "false"
        ten.style = "background-color: red"
    } else if (time >= "11:00:00" && time < "18:00:00") {
        ten.classList.remove("hover")
        ten.contentEditable = "false"
        ten.style = "background-color: gainsboro"
    }
    if (time >= "11:00:00" && time <= "11:59:59") {
        eleven.classList.remove("hover")
        eleven.contentEditable = "false"
        eleven.style = "background-color: red"
    } else if (time >= "12:00:00" && time < "18:00:00") {
        eleven.classList.remove("hover")
        eleven.contentEditable = "false"
        eleven.style = "background-color: gainsboro"
    }
    if (time >= "12:00:00" && time <= "12:59:59") {
        twelve.classList.remove("hover")
        twelve.contentEditable = "false"
        twelve.style = "background-color: red"
    } else if (time >= "13:00:00" && time < "18:00:00") {
        twelve.classList.remove("hover")
        twelve.contentEditable = "false"
        twelve.style = "background-color: gainsboro"
    }
    if (time >= "13:00:00" && time <= "13:59:59") {
        one.classList.remove("hover")
        one.contentEditable = "false"
        one.style = "background-color: red"
    } else if (time >= "14:00:00" && time < "18:00:00") {
        one.classList.remove("hover")
        one.contentEditable = "false"
        one.style = "background-color: gainsboro"
    }
    if (time >= "14:00:00" && time <= "14:59:59") {
        two.classList.remove("hover")
        two.contentEditable = "false"
        two.style = "background-color: red"
    } else if (time >= "15:00:00" && time < "18:00:00") {
        two.classList.remove("hover")
        two.contentEditable = "false"
        two.style = "background-color: gainsboro"
    }
    if (time >= "15:00:00" && time <= "15:59:59") {
        three.classList.remove("hover")
        three.contentEditable = "false"
        three.style = "background-color: red"
    } else if (time >= "16:00:00" && time < "18:00:00") {
        three.classList.remove("hover")
        three.contentEditable = "false"
        three.style = "background-color: gainsboro"
    }
    if (time >= "16:00:00" && time <= "16:59:59") {
        four.classList.remove("hover")
        four.contentEditable = "false"
        four.style = "background-color: red"
    } else if (time >= "17:00:00" && time < "18:00:00") {
        four.classList.remove("hover")
        four.contentEditable = "false"
        four.style = "background-color: gainsboro"
    }
    if (time >= "17:00:00" && time <= "17:59:59") {
        five.classList.remove("hover")
        five.contentEditable = "false"
        five.style = "background-color: red"
    } 
    if (time = "18:00:00") {
        localStorage.clear();
        location.reload() // will reload the screen at the end of the day, clearing the stored items
    }
}

let localStore = {
    nine: function() {
        localStorage.setItem("event9", nine.innerHTML); //Individual event# to allow individual saving, instead of everything saving at one click
    },
    ten: function() {
        localStorage.setItem("event10", ten.innerHTML);
    },
    eleven: function() {
        localStorage.setItem("event11", eleven.innerHTML);
    },
    twelve: function() {
        localStorage.setItem("event12", twelve.innerHTML);
    },
    one: function() {
        localStorage.setItem("event1", one.innerHTML);
    },
    two: function() {
        localStorage.setItem("event2", two.innerHTML);
    },
    three: function() {
        localStorage.setItem("event3", three.innerHTML);
    },
    four: function() {
        localStorage.setItem("event4", four.innerHTML);
    },
    five: function() {
        localStorage.setItem("event5", five.innerHTML);    
    },
    save9: function() {
        let stored = localStorage.getItem("event9");
        if (stored) {
            nine.innerHTML = stored
        }
    },
    save10: function() {
        let stored = localStorage.getItem("event10");
        if (stored) {
            ten.innerHTML = stored
        }
    },
    save11: function() {
        let stored = localStorage.getItem("event11");
        if (stored) {
            eleven.innerHTML = stored
        }
    },
    save12: function() {
        let stored = localStorage.getItem("event12");
        if (stored) {
            twelve.innerHTML = stored
        }
    },
    save1: function() {
        let stored = localStorage.getItem("event1");
        if (stored) {
            one.innerHTML = stored
        }
    },
    save2: function() {
        let stored = localStorage.getItem("event2");
        if (stored) {
            two.innerHTML = stored
        }
    },
    save3: function() {
        let stored = localStorage.getItem("event3");
        if (stored) {
            three.innerHTML = stored
        }
    },
    save4: function() {
        let stored = localStorage.getItem("event4");
        if (stored) {
            four.innerHTML = stored
        }
    },
    save5: function() {
        let stored = localStorage.getItem("event5");
        if (stored) {
            five.innerHTML = stored
        }
    },
};

saveScr9.on ("click", function() {
    localStore.nine()
    // location.reload() - if this were put on every one, it would clear the rest at each save point. not-user friendly
});
saveScr10.on ("click", function() {
    localStore.ten()
});
saveScr11.on ("click", function() {
    localStore.eleven()
});
saveScr12.on ("click", function() {
    localStore.twelve()
});
saveScr1.on ("click", function() {
    localStore.one()
});
saveScr2.on ("click", function() {
    localStore.two()
});
saveScr3.on ("click", function() {
    localStore.three()
});
saveScr4.on ("click", function() {
    localStore.four()
});
saveScr5.on ("click", function() {
    localStore.five()
});

if (location.reload) {
    localStore.save9()
    localStore.save10()
    localStore.save11()
    localStore.save12()
    localStore.save1()
    localStore.save2()
    localStore.save3()
    localStore.save4()
    localStore.save5()
};

renderColor()
renderDay();
renderTime();
setInterval(renderTime, 1000)