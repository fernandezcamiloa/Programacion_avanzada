const apiKey = '4D08448F-B2D2-4970-BD9B-713F2EE6405D';

async function asyncCall() {
    try {
        console.log('calling');
        const response = await fetch(`https://rest.coinapi.io/v1/exchanges`, {
            method: 'GET',
            headers: {
                'X-CoinAPI-Key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error('Error en la solicitud: ' + response.status);
        }

        const data = await response.json();


        const primeros16Exchanges = data.slice(0, 16);

        primeros16Exchanges.forEach(exchange => {
            const nombre = exchange.name; 
            const cotizacion_hora = exchange.volume_1hrs_usd ;
            const cotizacion_dia = exchange.volume_1day_usd; 

            const listItem = document.createElement('li');
            listItem.textContent = `Operadora: ${nombre} | Cotización por hora: ${cotizacion_hora} | Cotización del día: ${cotizacion_dia}`;
            
            document.getElementById('exchange-list').appendChild(listItem);
        });

    
        const result = await resolveAfter2Seconds();
        console.log(result);
    } catch (error) {
        console.warn('Error al consumir la API:', error);
    }
}

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

asyncCall();





