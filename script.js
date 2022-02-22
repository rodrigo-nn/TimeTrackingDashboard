const dayClick = document.getElementById("dayTrack");
const monthClick = document.getElementById("monthTrack");
const weekClick = document.getElementById("weekTrack");

dayClick.addEventListener('click', DayTracking);
weekClick.addEventListener('click', WeekTracking);
monthClick.addEventListener('click', MonthTracking);

document.getElementById('dayTrack').style.color = '#fff'

function DayTracking(){
    CleanColorMenu();
    document.getElementById('dayTrack').style.color = '#fff';
};
function WeekTracking(){
    CleanColorMenu();
    document.getElementById('weekTrack').style.color = '#fff';
};
function MonthTracking(){
    CleanColorMenu();
    document.getElementById('monthTrack').style.color = '#fff';
};
function CleanColorMenu(){
    document.getElementById('dayTrack').style.color = '';
    document.getElementById('weekTrack').style.color = '';
    document.getElementById('monthTrack').style.color = '';
}
let dados = new XMLHttpRequest();
dados.open('GET', 'data.json');
dados.send();