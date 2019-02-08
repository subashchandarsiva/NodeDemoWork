var geocode = (address)=>{
    return new Promise((res,rej)=>{
        res("Hi subash"+address);
    })
}

geocode("nilgiris").then((res)=>{
    console.log(res);
},(err)=>{
    console.log(err);
})