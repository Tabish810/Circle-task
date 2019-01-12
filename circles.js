$(document).ready(function () {
    $(".div1").hide().fadeIn(1000);
    $(".div2").hide().fadeIn(2000);
    $(".div3").hide().fadeIn(3000);
    $(".div4").hide().fadeIn(4000);
    $(".div5").hide().fadeIn(4500);
    $(".div6").hide().fadeIn(5000);
    $(".div7").hide().fadeIn(5500);
});
var data = [
    {
        id: 1,
        name: 'Zoology',
        credirHours: '3+0',
        teacherName: 'Abc',
        course1: 'Z1',
        course2: 'Z2',
        course3: 'Z3',
        course4: 'Z4',
    },
    {
        id: 2,
        name: 'Chemistry',
        credirHours: '0+3',
        teacherName: 'Abc',
        course1: 'CH1',
        course2: 'CH2',
        course3: 'CH3',
        course4: 'CH3',
    },
    {
        id: 3,
        name: 'Botany',
        credirHours: '3+0',
        teacherName: 'Abc',
        course1: 'B1',
        course2: 'B2',
        course3: 'B3',
        course4: 'B3',
    },
    {
        id: 4,
        name: 'Computer Sciene',
        credirHours: '3+0',
        teacherName: 'Abc',
        course1: 'C1',
        course2: 'C2',
        course3: 'C3',
        course4: 'C3',
    },
    {
        id: 5,
        name: 'Pharmacy',
        credirHours: '0+3',
        teacherName: 'Abc',
        course1: 'PHAR1',
        course2: 'PHAR2',
        course3: 'PHAR3',
        course4: 'PHAR3',
    },
    {
        id: 6,
        name: 'physics',
        credirHours: '3+0',
        teacherName: 'Abc',
        course1: 'P1',
        course2: 'P2',
        course3: 'P3',
        course4: 'P4',
    },

];
localStorage.setItem("data", JSON.stringify(data));
var b1 = document.querySelector("#d1");
var dummyData;
$('#d1').on('click', function () {
    checkTags(0);
});
$('#d2').on('click', function () {
    checkTags(1);
});
$('#d3').on('click', function () {
    checkTags(2);
});
$('#d4').on('click', function () {
    checkTags(3);
});
$('#d5').on('click', function () {
    checkTags(4);
});
$('#d7').on('click', function () {
    checkTags(6);
});
function backBtn(){
    window.location = 'index.html';
}
function checkTags(value) {
    var a = document.getElementsByTagName("a")[value].getAttribute('value');
    this.dummyData = a;
    checkData(a);
}
function checkData(a) {
    if (this.dummyData == a) {
        var localData = JSON.parse(localStorage.getItem('data'));
        for (var i = 0; i < localData.length; i++) {
            if (localData[i].id == a) {
                var user_obj = {
                    id: localData[i].id,
                    name: localData[i].name,
                    credirHours: localData[i].credirHours,
                    teacherName: localData[i].teacherName,
                    course1: localData[i].course1,
                    course2: localData[i].course2,
                    course3: localData[i].course3,
                    course4: localData[i].course4,
                };
                localStorage.setItem('details', JSON.stringify(user_obj));
                window.location = 'data.html';
            }
        }
    }
}
function loadData() {
    var x = JSON.parse(localStorage.getItem('details'));
    document.getElementById("name").innerHTML = x.name;
    document.getElementById("credirHours").innerHTML = x.credirHours;
    document.getElementById("teacherName").innerHTML = x.teacherName;
    document.getElementById("course1").innerHTML = x.course1;
    document.getElementById("course2").innerHTML = x.course2;
    document.getElementById("course3").innerHTML = x.course3;
    document.getElementById("course4").innerHTML = x.course4;
}   