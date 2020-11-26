
//Toate variabilele utilizate cu date ale utilizatorului

var recomended_sleep_hours = 60; //orele de dormit recomandate pe o saptamana
var recomended_quality = 100;
var value_hours = 45; //orele dormite de utilizator intr-o saptamana
var value_quality = 60; //calitatea somnului de la 0 la 100



//Cat e de mare riscul in cifre
var risk_number_1= "2";
document.getElementById("risk-number-1").innerHTML = risk_number_1 +"/100";

//plot data
let data1 = [1, 2, 10, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let data2 = [1, 2, 10, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let data3 = [1, 2, 10, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let data4 = [1, 2, 10, 4, 5, 6, 7, 8, 9, 10, 11, 12];



//mai departe nimic nu trebuie de schimbat in cod
value_hours = value_hours / 100;
var bar = new ProgressBar.Circle('#progress-circle1', {
    color: ' #fff',
    strokeWidth: 5,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: ' #fff', width: 5 },
    to: { color: ' #fff', width: 5 },
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);


        var value = Math.round(circle.value() * (value_hours * 100));
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value_hours * 100 + "/" + recomended_sleep_hours);
        }

    }
});
bar.text.style.fontFamily = "'Sansita', sans-serif";
bar.text.style.fontSize = '2.5em';

bar.animate(value_hours * 100 / recomended_sleep_hours);  // How much the circle is filled

value_quality = value_quality / 100;
var bar2 = new ProgressBar.Circle('#progress-circle2', {
    color: ' #fff',
    strokeWidth: 5,
    trailWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: ' #fff', width: 5 },
    to: { color: ' #fff', width: 5 },
    step: function (state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);


        var value = Math.round(circle.value() * (value_quality * 100));
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value_quality * 100 + "/" + recomended_quality);
        }

    }
});
bar2.text.style.fontFamily = "'Sansita', sans-serif";
bar2.text.style.fontSize = '2.5em';

bar2.animate(value_quality);



//plot manipulation



new Chart(document.getElementById("line-chart1"), {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        data: [
          data1[0],
          data1[1],
          data1[2],
          data1[3],
          data1[4],
          data1[5],
          data1[6],
          data1[7],
          data1[8],
          data1[9],
          data1[10],
          data1[11],
        ],
        label: "Hours",
        borderColor: "#75C0D8",
        fill: false,
      },
    ],
  },
  options: {},
});
new Chart(document.getElementById("line-chart2"), {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        data: [
          data2[0],
          data2[1],
          data2[2],
          data2[3],
          data2[4],
          data2[5],
          data2[6],
          data2[7],
          data2[8],
          data2[9],
          data2[10],
          data2[11],
        ],
        label: "Hours slept",
        borderColor: "#75C0D8",
        fill: false,
      },
    ],
  },
  options: {},
});
new Chart(document.getElementById("line-chart3"), {
  type: "line",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        data: [
          data3[0],
          data3[1],
          data3[2],
          data3[3],
          data3[4],
          data3[5],
          data3[6],
          data3[7],
          data3[8],
          data3[9],
          data3[10],
          data3[11],
        ],
        label: "Hours slept",
        borderColor: "#75C0D8",
        fill: false,
      },
    ],
  },
  options: {},
});



var d = new Date();
var startDate = new Date();
var n = d.getDay();
var m = d.getMonth();
var y = d.getFullYear();


function GetDates(startDate, daysToAdd) {
  var dates = [];

  for (var i = 0; i <= daysToAdd; i++) {
      var currentDate = new Date();
      currentDate.getDate(currentDate.setDate(startDate.getDate() + i));
      dates.push(currentDate.getDate());
}

  return dates;
}
var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month-year").innerHTML = months[m] + " " + y;
document.getElementById("day1").innerHTML = weekdays[n];
document.getElementById("day2").innerHTML = weekdays[n + 1];
document.getElementById("day3").innerHTML = weekdays[n + 2];
document.getElementById("day4").innerHTML = weekdays[n + 3];
document.getElementById("day5").innerHTML = weekdays[n + 4];
document.getElementById("day6").innerHTML = weekdays[n + 5];
document.getElementById("day7").innerHTML = weekdays[n + 6];


var dates = GetDates(startDate, 7);
document.getElementById("date1").innerHTML = dates[0];
document.getElementById("date2").innerHTML = dates[1];
document.getElementById("date3").innerHTML = dates[2];
document.getElementById("date4").innerHTML = dates[3];
document.getElementById("date5").innerHTML = dates[4];
document.getElementById("date6").innerHTML = dates[5];
document.getElementById("date7").innerHTML = dates[6];

document.getElementById("sleep-time").title=document.getElementById("sleep-time").innerHTML;
console.log(document.getElementById("3day").innerHTML);

