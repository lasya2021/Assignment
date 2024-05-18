var input = [5,6,7,4,5,6];
 function removeDup(data) {
    let unique = [];
    data.forEach(element => {
        if(! unique.includes(element)){
            unique.push(element)
        }
        
    });
    return unique;
    
 }
 console.log(removeDup(input));