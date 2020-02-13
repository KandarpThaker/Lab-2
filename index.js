
var airportList = document.querySelector('body ul');
    airportList.innerHTML = '';
    var airports = ['Beijing Capital International, https://goo.gl/maps/iPe5fAqzq8C2 PEK',
                    'John F Kennedy International, https://goo.gl/maps/JWwABmA3MBS2 JFK',
                    'Lester B. Pearson International, https://goo.gl/maps/Ypu1dJLsnQu YYZ',
                    'London Heathrow, https://goo.gl/maps/TFx8SrATdYr LHR',
                    'Tokyo Haneda International, https://goo.gl/maps/5UxH2TxbRtT2 HND'];

    for(var i = 0; i < airports.length; i++) {
        var input = airports[i];
        // Put your code here inside this loop
        let commaIndex = input.indexOf(',');

        //getting airport name
        let airportName = input.slice(0,commaIndex);
        
        //getting airport code
        let airportCodeIndex = input.slice(-3);
        
        //getting airport URL
        let airportUrl = input.slice(commaIndex + 1, -3).trim()

        //create an anchor link
        let hyperlink = `<a href = "${airportUrl}">${airportCodeIndex} - ${airportName}</a>`;

        var result = hyperlink;
        var listItem = document.createElement('li');
        listItem.innerHTML = result;
        airportList.appendChild(listItem);
    }
 