setTimeout(()=>{
    let child=document.createElement('p')
    child.innerText="10"
    document.getElementById('parent').append(child)
      return setTimeout(()=>{
        let child=document.createElement('p')
        child.innerText="9"
        document.getElementById('parent').append(child)
        return setTimeout(()=>{
            let child=document.createElement('p')
            child.innerText="8"
            document.getElementById('parent').append(child)   
            return setTimeout(()=>{
                let child=document.createElement('p')
                child.innerText="7"
                document.getElementById('parent').append(child) 
                return setTimeout(()=>{
                    let child=document.createElement('p')
                      child.innerText="6"
                        document.getElementById('parent').append(child)   
                 return setTimeout(()=>{
                   let child=document.createElement('p')
                      child.innerText="5"
                     document.getElementById('parent').append(child)   
                  return setTimeout(()=>{
                   let child=document.createElement('p')
                      child.innerText="4"
                     document.getElementById('parent').append(child)   
                     return setTimeout(()=>{
                        let child=document.createElement('p')
                           child.innerText="3"
                          document.getElementById('parent').append(child)   
                          return setTimeout(()=>{
                            let child=document.createElement('p')
                               child.innerText="2"
                              document.getElementById('parent').append(child)   
                              return setTimeout(()=>{
                                let child=document.createElement('p')
                                   child.innerText="1"
                                  document.getElementById('parent').append(child)   
                             return setTimeout(()=>{
                                    let child=document.createElement('h3')
                                    child.innerText="HAPPY INDEPENDENCE DAY"
                                    console.log(child)
                                    document.getElementById('parent').append(child)
                                },500)
                    },500)   
                   },500)      
                  },500)
                },500)
               },500)
             },500)    
            },500)
        },500)
    },500)
},500)