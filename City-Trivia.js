const Cities = {
    "jerusalem":{
        name:"Jerusalem",
        capital:"t",
        coastal:"",
        famous:"t",
        ancient:"t"
    },
    "telAviv":{
        name:"Tel Aviv",
        capital:"",
        coastal:"t",
        famous:"t",
        ancient:""
    },
    "acre":{
        name:"Acre",
        capital:"",
        coastal:"t",
        famous:"",
        ancient:"t"
    },
    "katzrin":{
        name:"Katzrin",
        capital:"",
        coastal:"",
        famous:"",
        ancient:"t"
    },
    "zikim":{
        name:"Zikim",
        capital:"",
        coastal:"t",
        famous:"",
        ancient:""
    },
    "musmus":{
        name:"Musmus",
        capital:"",
        coastal:"",
        famous:"",
        ancient:""
    }
}
function checkCity(capital, coastal, famous, ancient){
    
    if (capital){records[id][prop] = value}
        else if (prop=="tracks" && records[id].tracks==false){records[id].tracks = [value]}
        else if (prop=="tracks"&&value!=""&&records[id].hasOwnProperty(prop)){records[id].tracks.concat(value)}
        else if (prop=="tracks"&&value!=""){records[id].tracks=[value]}
        else if (value==""){delete records[id][prop]}
    return records
}
function guessCity(capital, coastal, famous, ancient){

}
console.log(Boolean(Cities.jerusalem.capital))