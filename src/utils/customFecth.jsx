let ok = true;    
     const customFetch = (time, task)=> {
            return new Promise ((res,rej)=>{
                setTimeout(()=>{
                    if(ok){
                        res(task)
                    } 
                    else{rej('error');}
                },time)
            });
        }  

export default customFetch 