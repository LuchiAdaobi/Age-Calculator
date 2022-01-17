const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate(){
    let dateInput = document.getElementById('date').value;
    let monthInput = document.getElementById('month').value;
    let yearInput  = document.getElementById('year').value;
    
    let ageDisplay = document.getElementById('age');

    // get current time

    let today = new Date();
    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();

    leapChecker(currentYear)

    // CalculateAge
  
    if(dateInput  > currentDay){
        currentDay = currentDay + months[currentMonth -1];
        currentMonth--;
    }
    if (monthInput > currentMonth){
        currentMonth = currentMonth + 12;
        currentYear--;
    }

    let bDate = currentDay - dateInput;
    let bMonth = currentMonth - monthInput;
    let bYear = currentYear - yearInput;
   
    displayAge()

    function displayAge(){  
        // check for input errors

    if(dateInput == "" || monthInput == "" || yearInput == "" || (monthInput > 12 || dateInput > 31)){
        alert('Please, put in valid details to calculate your age')
        ageDisplay.innerHTML= "";
        return;
    } else if (yearInput > currentYear ||
    (monthInput > currentMonth && yearInput == currentYear) ||
    (dateInput > currentDay && monthInput == currentMonth && yearInput == currentYear)){
        alert('Sorry, not born yet')
        ageDisplay.innerHTML= "";
        return;
    } else if(yearInput == currentYear && (monthInput == currentMonth && dateInput == currentDay)){
        ageDisplay.innerHTML= 'Welcome To The World!!!';
    } else if ( monthInput == currentMonth && dateInput == currentDay){
        ageDisplay.innerHTML= 'Happy Birthday!!!   You are ' +  bYear + ' Years old.';
    }else if (yearInput == currentYear && monthInput < currentMonth ){
         ageDisplay.innerHTML= 'You are only ' +  bMonth + ' Months & ' + bDate + ' Days old.';
        }else if (yearInput == currentYear && monthInput == currentMonth && dateInput < currentDay){
         ageDisplay.innerHTML= 'You are only '+ bDate + ' Days old.';

    } else{
        ageDisplay.innerHTML = 'You are ' + bYear + ' Years ' + bMonth + ' Months & ' + bDate + ' days old.';
    }
    }

       
}


function leapChecker(year){
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1]= 29;
    }else {
        months[1] = 28;
    }
}



 