fetch('https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+*+from+pscomppars+where+disc_facility+like+%27%25TESS%25%27+order+by+pl_orbper+desc&format=json')
.then(function(response){
    return response.json();
})
.then(function(exoplanetarchive){
    let placeholder = document.querySelector("#data-output");
    let out = "";
    for(let exoplanet of exoplanetarchive){
        out += `
            <tr>
                <td>${exoplanet.pl_name}</td>
                <td>${exoplanet.hostname}</td>
                <td>${exoplanet.discoverymethod}</td>
                <td>${exoplanet.disc_year}</td>
            </tr>
        `;
    }

    if (placeholder.innerHTML = out) {
        console.log("Succesful!")
    }
    
})