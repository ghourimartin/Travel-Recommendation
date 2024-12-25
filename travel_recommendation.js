const search_bar = document.getElementById("search_bar");
const report = document.getElementById("report");
const search_button = document.getElementById('search_button');
const patients = [];


function searchCondition() 
{
    const input = document.getElementById('search_bar').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json')
        .then(response => response.json())
        .then(data => 
            {
            jsonData = data
            // Check countries and cities
            for (const country of jsonData.countries) 
            {
                if (country.name.toLowerCase().includes(input)) 
                {
                    type= "Country"
                    names= country.name
                    cities= country.cities
                }
                for (const city of country.cities) 
                {
                    if (city.name.toLowerCase().includes(input)) 
                    {
                        type= "City"
                        names= city.name
                        imageUrl= city.imageUrl
                        description= city.description
                    }
                }
            }
            // Check temples
            for (const temple of jsonData.temples) 
            {
                if (temple.name.toLowerCase().includes(input)) {
                    type= "Temple"
                    names= temple.name
                    imageUrl= temple.imageUrl
                    description= temple.description
                }
            }
            // Check beaches
            for (const beach of jsonData.beaches) 
                {
                if (beach.name.toLowerCase().includes(input))
                {
                    type= "Beach"
                    names= beach.name
                    imageUrl= beach.imageUrl
                    description= beach.description
                }
                }
            
            
            if(names) 
            {
                console.log(names , imageUrl , description)
                resultDiv.innerHTML += `<h2>${names}</h2>`;
                resultDiv.innerHTML += `<img src="${imageUrl}">`;
                resultDiv.innerHTML += `<p><strong>Description:</strong> ${description}</p>`;

            } 
            else
            {
            resultDiv.innerHTML = 'Condition not found.';
            }
        }
        )
        .catch(error => 
        {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

function clear_but()
{
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
}


const options = { timeZone: 'America/New_York', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
const newYorkTime = new Date().toLocaleTimeString('en-US', options);
console.log("Current time in New York:", newYorkTime);

