var today = new Date();
var day = today.getDay();
var list_of_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.write('Today is : ' + list_of_days[day] + '<br />');
var hr = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();
var suffix = (hr >= 12) ? 'PM' : 'AM';
hr = (hr >= 12) ? hr - 12 : hr;
if (hr === 0 && suffix === 'PM')
{
    hr = 12;
    suffix = 'PM';
}
else if (hr === 0 && suffix === 'AM')
{
    hr = 12;
    suffix = 'AM';
}
document.write('Current Time : ' + hr + ' ' + suffix + ' : ' + min + ' : ' + sec);
