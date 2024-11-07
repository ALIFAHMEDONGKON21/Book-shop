const getstoredReadlist=()=>
{
     const storedlsitstr=localStorage.getItem('read-list');
     if(storedlsitstr)
     {
        const storedlist=JSON.parse(storedlsitstr);
        return storedlist
     }
     else
     {
        return [];
     }
}

const addToStoredReadList=(id)=>
{
    const storedlist=getstoredReadlist();
    if(storedlist.includes(id))
    {
        console.log(id,'Alrady Exists in read list')
    }
    else
    {
        storedlist.push(id);
        const storedlsitstr=JSON.stringify(storedlist);
        localStorage.setItem('read-list', storedlsitstr);
    }
}

export {addToStoredReadList}