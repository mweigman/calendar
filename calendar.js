$(document).ready(function () {

    //events
    $("input[name=day]").click(newSchedule);
    //functions

    function newSchedule() {

        var weekDay = $("input[name=day]:checked").val();

        switch (weekDay) {
            case "Monday":
                $("#task1").text(`Work`);
                $("#task2").text(`Gym`);
                $("#time1").text(`7am - 4pm`);
                $("#time2").text(`5pm - 8pm`);
                break;
            case "Tuesday":
                $("#output").text(`Working2`);
                $("#task1").text(`Work`);
                $("#task2").text(`Gym`);
                $("#time1").text(`7am - 4pm`);
                $("#time2").text(`5pm - 8pm`);
                break;
            case "Wednesday":
                $("#output").text(`Working3`);
                $("#task1").text(`Work`);
                $("#task2").text(`Gym`);
                $("#time1").text(`7am - 4pm`);
                $("#time2").text(`5pm - 8pm`);
                break;
            case "Thursday":
                $("#output").text(`Working4`);
                $("#task1").text(`Work`);
                $("#task2").text(`Gym`);
                $("#time1").text(`7am - 4pm`);
                $("#time2").text(`5pm - 8pm`);
                break;
            case "Friday":
                $("#output").text(`Working5`);
                $("#task1").text(`Work`);
                $("#task2").text(`Gym`);
                $("#time1").text(`7am - 4pm`);
                $("#time2").text(`5pm - 8pm`);
                break;
            case "Saturday":
                $("#output").text(`Working6`);
                $("#task1").text(`Work`);
                $("#task2").text(`Gym`);
                $("#time1").text(`7am - 4pm`);
                $("#time2").text(`5pm - 8pm`);
                break;
            case "Sunday":
                $("#output").text(`Working7`);
                $("#task1").text(`Work`);
                $("#task2").text(`Gym`);
                $("#time1").text(`7am - 4pm`);
                $("#time2").text(`5pm - 8pm`);
                break;


        }
    }



});