let events=[];

function updateEvent(){
    events.push({
        todo:document.querySelector('.todoItem').value,
        date:document.querySelector('.todoDate').value

    });
    document.querySelector('.todoItem').value='';
    display();

    
    
}
function display()
{
    htmlcode='';
    for(let i=0;i<events.length;i++)
    {
        htmlcode=htmlcode+`<div class="todo"><div class="task">${events[i].todo}</div>
        <div class="dateTask">${events[i].date}</div>
        <div class="delete" ><button  class="deleteButton" onclick="events.splice(${i},1);
        display();
        
        ">Delete</button></div>
        </div>
`;

    }
    document.querySelector('.list').innerHTML=htmlcode;
    
    if(events.length==0)
    {
        document.querySelector('.list').innerHTML=`Nothing on the list &#10024;`;
         display();
    }
        
        
}

