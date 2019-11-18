/*
    Age Converter

    Start
        Set DOB = input from user
        set birtdate to dob// converting from string to date
        Set cur = current date
        set sum = cur - birtdate //  subtracting the current date from birtdate
        Set age = sum / 1000 * 60 * 60 * 24 * 365.253 

        Set string granted = "Ok, you're "+age+ ", Go right ahead!!";
        Set string denied =  "Sorry,You are only "+age+ " years old! BE GONE!!";
        set if age is greater or qual to 21
            DISPLAY granted
            if not
                DISPLAY denied
    End
*/
function ageTester() {
    var dob = document.getElementById('input').value;
    var birthDate = new Date(dob);
    var cur = new Date();
    var age = Math.floor((cur-birthDate) /31557600000) ; // 1000(milisecs) * 60(sec) * 60(mins) * 24(Hr) * 365.253(Days)

    var output = document.getElementById('output');
    var granted = "Ok, you're "+age+ ", Go right ahead!!";
    var denied =  "Sorry,You are "+age+ " years old! BE GONE!!"; 

        if (age >= 21) {
            output.innerText = granted;
        }else{
            output.innerText = denied;
        }  
    }