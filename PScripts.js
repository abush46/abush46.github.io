function showExamMarks() {
    //MSK-000109

    var index = document.getElementById("index").value;
    var do1 = "getStudentMarks";
    var session = document.getElementById("session").value;
    var exam = document.getElementById("exam").value;

    if (exam == 'Select Exam') {
        $("#btnSubmit").attr("disabled", true);
        $('#exam').addClass('is-invalid has-feedback');

        $('#divExam1').append(
            '<p id="spanExam" class="far fa-times-circle is-invalid" style="color:red;">The exam is required</p>'
        );

        $("#exam").change(function() {
            //MSK-00128-classroom
            $("#btnSubmit").attr("disabled", false);
            $('#exam').removeClass('is-invalid has-feedback');
            $('#spanExam').remove();

        });

    } else {
        var xhttp = new XMLHttpRequest(); //MSK-000110-Start Ajax  
        xhttp.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                document.getElementById('table1').innerHTML = this.responseText; //MSK-000111
                window.scrollTo(0, document.body.scrollHeight);
                var subject = document.getElementById('chartLable').value;
                var marks = document.getElementById('chartData').value;
                showBarChart(subject, marks);

                $(function() {
                    $("#example1").DataTable({
                        "responsive": true,
                        "lengthChange": false,
                        "autoWidth": false,
                        "buttons": ["pdf", "print"]
                    }).buttons().container().appendTo('#example1_wrapper .col-md-6:eq(0)');
                });


            }

        };

        xhttp.open("GET", "get_marks.php?exam=" + exam + "&StuId=" + index + "&Session=" + session + "&do=" + do1, true);
        xhttp.send(); //MSK-000110-End Ajax

    }

};

function showBarChart(subject, marks) {

    $("#barChart").show();
    $("#lineChart").hide();
    $("#pieChart").hide();
    $("#doughnutChart").hide();

    var subject1 = JSON.parse("[" + subject + "]");
    var marks1 = JSON.parse("[" + marks + "]");

    new Chart(document.getElementById("barChart"), {
        type: 'bar',
        data: {
            labels: subject1,
            datasets: [{
                label: "Marks",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: marks1
            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ''
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

};

function showLineChart(subject, marks) {

    $("#lineChart").show();
    $("#barChart").hide();
    $("#pieChart").hide();
    $("#doughnutChart").hide();

    var subject1 = JSON.parse("[" + subject + "]");
    var marks1 = JSON.parse("[" + marks + "]");

    new Chart(document.getElementById("lineChart"), {
        type: 'line',
        data: {
            labels: subject1,
            datasets: [{
                label: "Marks",
                borderColor: "#3e95cd",
                fill: false,
                data: marks1

            }]
        },
        options: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: ''
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });

};

function showPieChart(subject, marks) {

    $("#pieChart").show();
    $("#barChart").hide();
    $("#lineChart").hide();
    $("#doughnutChart").hide();

    var subject1 = JSON.parse("[" + subject + "]");
    var marks1 = JSON.parse("[" + marks + "]");

    new Chart(document.getElementById("pieChart"), {
        type: 'pie',
        data: {
            labels: subject1,
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: marks1
            }]
        },
        options: {
            title: {
                display: true,
                text: ''
            }
        }
    });

};

function showDoughnutChart(subject, marks) {

    $("#doughnutChart").show();
    $("#barChart").hide();
    $("#lineChart").hide();
    $("#pieChart").hide();

    var subject1 = JSON.parse("[" + subject + "]");
    var marks1 = JSON.parse("[" + marks + "]");

    new Chart(document.getElementById("doughnutChart"), {
        type: 'doughnut',
        data: {
            labels: subject1,
            datasets: [{
                label: "Population (millions)",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: marks1
            }]
        },
        options: {
            title: {
                display: true,
                text: ''
            }
        }
    });

};

function edit_Marks() {
    var classid = $("#exam").val();
    // var TeachId = "<?php echo $id; ?>";
    $.ajax({
        type: "POST",
        url: "get_marks.php",
        data: {
            classId: classid

        },
        success: function(data) {
            $("#table1").html(data);

        }
    });
}

function show_calendar1(year1, month1) {

    var status = document.getElementById("status5").value.split(',');

    var date_no2 = document.getElementById("date_no2").value.split(',');

    document.getElementById("calendar_month_year").innerHTML = status[0];
    //month_name[month] + " " + year;
}

function show_calendar(year1, month1) {

    var status = document.getElementById("status5").value.split(',');

    var date_no2 = document.getElementById("date_no2").value.split(',');

    var y1 = Number(year1);
    var m1 = Number(month1);

    var count5 = date_no2.length;
    //alert(count5);
    var d = new Date(); //new Date('2017','08','25');
    var month_name = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'Octomber', 'November', 'December'
    ];

    var month = m1 - 1; //0-11
    var year = y1;
    var first_date = month_name[month] + " " + 1 + " " + year;

    var tmp = new Date(first_date).toDateString();
    // Tue Aug 01 2017...

    var first_day = tmp.substring(0, 3); //Thu
    var day_name = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var day_no = day_name.indexOf(first_day); //4
    var days = new Date(year, month + 1, 0).getDate(); //31
    // Thu Aug 31 2017...

    var calendar = get_calendar(day_no, days);

    document.getElementById("calendar_month_year").innerHTML = month_name[month] + " " + year;
    document.getElementById("calendar_dates").appendChild(calendar);

    for (var i = 0; i < count5; i++) {

        var d_no = parseInt(date_no2[i], 10);

        if (status[i] == '') {


            document.getElementById("td_" + d_no).style.background = "#00FF66";
        }

        if (status[i] == '0') {


            document.getElementById("td_" + d_no).style.background = "#FF0033";

        }
    }

};


function get_calendar(day_no, days) {


    var table = document.createElement('table');
    var tr = document.createElement('tr');

    table.className = 'cal-table';

    // row for the day letters
    for (var c = 0; c <= 6; c++) {

        var th = document.createElement('th');
        th.innerHTML = ['S', 'M', 'T', 'W', 'T', 'F', 'S'][c];
        tr.appendChild(th);
        th.className = "tHead";


    }

    table.appendChild(tr);

    //create 2nd row

    tr = document.createElement('tr');

    var c;
    for (c = 0; c <= 6; c++) {
        if (c == day_no) {
            break;
        }
        var td = document.createElement('td');
        td.innerHTML = "";
        tr.appendChild(td);
        td.className = "td_no_number";
        tr.className = 'cal-tr';
    }

    var count = 1;
    for (; c <= 6; c++) {

        var td = document.createElement('td');
        td.id = "td_" + count;
        td.className = 'cal-number-td';
        tr.appendChild(td);
        tr.className = 'cal-tr';

        var h5 = document.createElement('h5');
        h5.id = "h5_" + count;
        h5.className = 'h5';
        td.appendChild(h5);
        h5.innerHTML = count;
        count++;

    }
    table.appendChild(tr);

    //rest of the date rows
    ;
    for (var r = 3; r <= 7; r++) {
        tr = document.createElement('tr');
        for (var c = 0; c <= 6; c++) {
            if (count > days) {

                for (; c <= 6; c++) {

                    var td = document.createElement('td');
                    td.innerHTML = "";
                    tr.appendChild(td);
                    td.className = "td_no_number";
                    tr.className = 'cal-tr';

                }

                table.appendChild(tr);
                return table;
            }

            var td = document.createElement('td');
            //td.innerHTML = count;
            td.id = "td_" + count;
            //document.getElementByClass("cal-number-td").style.background = "#00FF66";
            td.style.color = "#000";
            td.className = 'cal-number-td';

            tr.appendChild(td);

            var h5 = document.createElement('h5');
            h5.className = 'h5';
            td.appendChild(h5);
            h5.innerHTML = count;
            count++;
            tr.className = 'cal-tr';

        }
        table.appendChild(tr);


    }

};

function showAHistory() {

    var year = $('#year').val();
    var month = $('#month').val();
    var my_index = $('#my_index').val();
    var do1 = "getStudentAttendance";

    if (month == 'Select Month') {
        $("#btnSubmit").attr("disabled", true);
        $('#month').addClass('is-invalid has-feedback');

        $('#divMonth1').append(
            '<p id="spanExam" class="far fa-times-circle is-invalid" style="color:red;">The exam is required</p>'
        );

        $("#month").change(function() {
            //MSK-00128-classroom
            $("#btnSubmit").attr("disabled", false);
            $('#month').removeClass('is-invalid has-feedback');
            $('#spanExam').remove();

        });

    } else {

        var xhttp1 = new XMLHttpRequest();

        xhttp1.onreadystatechange = function() {

            if (this.readyState == 4 && this.status == 200) {

                document.getElementById('table1').innerHTML = this.responseText;
                show_calendar(year, month);
                $(function() {
                    $("#example1").DataTable();
                });
                window.scrollTo(0, document.body.scrollHeight);

            }

        };

        xhttp1.open("GET", "get_marks.php?year=" + year + "&month=" + month + "&my_index=" + my_index + "&do=" + do1, true);
        xhttp1.send();
    }

};