//Promises

function tests(){
    return new Promise((resolve,reject)=>{
        const error = true;

        resolve('Test resolved');

        if(error){
            reject('Test rejected');
        } else{
            resolve('Test resolved');
        }
    });
}

tests().then(function(res){ //se tudo der certo
    alert(res);
}).catch(function(err){ //se der errado
    alert(err);
})