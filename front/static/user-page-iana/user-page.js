
//Toate variabilele utilizate cu date ale utilizatorului

var recomended_sleep_hours = 60; //orele de dormit recomandate pe o saptamana
var recomended_quality = 100;
var value_hours = 45; //orele dormite de utilizator intr-o saptamana
var value_quality = 60; //calitatea somnului de la 0 la 100

//Denumirea riscurilor

var risk1 = "Risk1";
var risk2 = "Risk2";
var risk3 = "Risk3";

//Cat e de mare riscul in cifre
var risk_number_1= "2";
var risk_number_2= "1";
var risk_number_3= "1";

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

//addinf text into risks section
document.getElementById("risk1").innerHTML = risk1;
document.getElementById("risk2").innerHTML = risk2;
document.getElementById("risk3").innerHTML = risk3;
document.getElementById("risk-number-1").innerHTML = risk_number_1;
document.getElementById("risk-number-2").innerHTML = risk_number_2;
document.getElementById("risk-number-3").innerHTML = risk_number_3;

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
        label: "Hours slept",
        borderColor: "#3e95cd",
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
        borderColor: "#3e95cd",
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
        borderColor: "#3e95cd",
        fill: false,
      },
    ],
  },
  options: {},
});
new Chart(document.getElementById("line-chart4"), {
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
          data4[0],
          data4[1],
          data4[2],
          data4[3],
          data4[4],
          data4[5],
          data4[6],
          data4[7],
          data4[8],
          data4[9],
          data4[10],
          data4[11],
        ],
        label: "Hours slept",
        borderColor: "#3e95cd",
        fill: false,
      },
    ],
  },
  options: {},
});

