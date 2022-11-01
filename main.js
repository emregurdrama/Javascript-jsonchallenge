import './style.css'
import javascriptLogo from './javascript.svg'
import {
    setupCounter
} from './counter.js'

var groupNames = ["Orchid", "SteelBlue", "YellowGreen", "IndianRed", "LightSeaGreen"]

async function getData() {
    let result = await fetch("data.json")
        .then(response => response.json())
        .then(response => response)
    return result
}

const getGroup = function(key) {
    getData().then((jsonData) => {
        var namesArray = []
        var assistantName
        jsonData.filter(obj => obj.group == key && obj.type != "assistant").forEach(element => {
            namesArray.push(element.name)
        });
        jsonData.filter(obj => obj.group == key && obj.type == "assistant").forEach(element => {
            assistantName = element.name
        });
        var filteredGroupData = {
            group: key,
            name: namesArray,
            assistant: assistantName
        }
        console.log(JSON.stringify(filteredGroupData))
        return
    })
};
function getGroups() {groupNames.forEach(element => {
    getGroup(element)
    return
});    
}
getGroups();


/*
getGroup("Orchid")
getGroup("SteelBlue")
getGroup("YellowGreen")
getGroup("IndianRed")
getGroup("LightSeaGreen")
*/