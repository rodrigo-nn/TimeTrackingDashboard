(function () {
    const dayClick = document.getElementById("dayTrack");
    const monthClick = document.getElementById("monthTrack");
    const weekClick = document.getElementById("weekTrack");


    dayClick.addEventListener('click', function () {
        Tracking('daily');
    });
    weekClick.addEventListener('click', function () {
        Tracking('weekly');
    });
    monthClick.addEventListener('click', function () {
        Tracking('monthly');
    });
    Tracking('daily')
    function Tracking(tipo) {
        let dados = new XMLHttpRequest();
        dados.open('GET', 'data.json');
        dados.send();
        dados.addEventListener('readystatechange', function () {
            if (dados.readyState === 4 && dados.status === 200) {
                const bDados = JSON.parse(dados.response);
                let concText;
                document.getElementById('dayTrack').style.color = ''
                document.getElementById('weekTrack').style.color = ''
                document.getElementById('monthTrack').style.color = ''
                switch(tipo){
                    case 'daily': concText = 'Yesterday - ';
                        document.getElementById('dayTrack').style.color = '#fff'
                        break;
                    case 'weekly': concText = 'Last week - '
                        document.getElementById('weekTrack').style.color = '#fff'
                        break;
                    case 'monthly': concText = 'Last month - '
                        document.getElementById('monthTrack').style.color = '#fff'
                        break;
                }
                const workTimes = bDados[0].timeframes[tipo];
                document.getElementById('workCurrent').innerHTML = workTimes.current + ((workTimes.current > 1) ? 'hrs' : 'hr');
                document.getElementById('workPrevious').innerHTML = concText + workTimes.previous + ((workTimes.previous > 1) ? 'hrs' : 'hr');

                const playTimes = bDados[1].timeframes[tipo];
                document.getElementById('playCurrent').innerHTML = playTimes.current + ((playTimes.current > 1) ? 'hrs' : 'hr');
                document.getElementById('playPrevious').innerHTML = concText + playTimes.previous + ((playTimes.previous > 1) ? 'hrs' : 'hr');

                const studyTimes = bDados[2].timeframes[tipo];
                document.getElementById('studyCurrent').innerHTML = studyTimes.current + ((studyTimes.current > 1) ? 'hrs' : 'hr');
                document.getElementById('studyPrevious').innerHTML = concText + studyTimes.previous + ((studyTimes.previous > 1) ? 'hrs' : 'hr');

                const exerciseTimes = bDados[3].timeframes[tipo];
                document.getElementById('exerciseCurrent').innerHTML = exerciseTimes.current + ((exerciseTimes.current > 1) ? 'hrs' : 'hr');
                document.getElementById('exercisePrevious').innerHTML = concText + exerciseTimes.previous + ((exerciseTimes.previous > 1) ? 'hrs' : 'hr');

                const socialTimes = bDados[4].timeframes[tipo];
                document.getElementById('socialCurrent').innerHTML = socialTimes.current + ((socialTimes.current > 1) ? 'hrs' : 'hr');
                document.getElementById('socialPrevious').innerHTML = concText + socialTimes.previous + ((socialTimes.previous > 1) ? 'hrs' : 'hr');

                const selfCareTimes = bDados[5].timeframes[tipo];
                document.getElementById('selfCareCurrent').innerHTML = selfCareTimes.current + ((selfCareTimes.current > 1) ? 'hrs' : 'hr');
                document.getElementById('selfCarePrevious').innerHTML = concText + selfCareTimes.previous + ((selfCareTimes.previous > 1) ? 'hrs' : 'hr');
            };
        });
    };
}());