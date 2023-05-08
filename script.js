const form = document.getElementById("my-form");

form.addEventListener("submit",function(event){
    event.preventDefault();
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");

    const day = dayInput.value;
    const month = monthInput.value;
    const year = yearInput.value;

    //converting to date format
    var date = new Date(year, month - 1, day);

    //  console.log("date entered by user"+date);

    //using date constructor to get todays date
    var today = new Date();
    console.log("todays date" + today);

    //comparison
    var result_ms = Math.abs(today - date);
    console.log("difference in ms" + result_ms);

    var result_days = Math.ceil(result_ms / (1000 * 60 * 60 * 24));
    console.log("difference in days" + result_days);

    var result_years = Math.floor(result_days / 365.25);
    console.log("result_years " + result_years);

    var result_months = Math.floor((result_days % 365.25) / 30.44);
    console.log("result_month" + result_months);

    var days_output = Math.floor((result_days % 365) % 30.44);
    console.log("result_days " + days_output);

    document.getElementById("year_res").innerHTML = result_years;
    document.getElementById("month_res").innerHTML = result_months;
    document.getElementById("day_res").innerHTML = days_output;
    
});

// console.log("hello world");