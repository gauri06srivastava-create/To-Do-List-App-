window.addEventListener('DOMContentLoaded', () => {
    const addbtn = document.getElementById('addBtn');      
    const todoinput = document.getElementById('tskinput');
    const tasklist = document.getElementById('tasklist');

    function addTask() {
        const tasktext = todoinput.value.trim();
        if(tasktext === '') return; 

        const li = document.createElement('li');
        li.textContent = tasktext;

        const delbtn=document.createElement('span');
        delbtn.textContent='❌';
        delbtn.style.cursor="pointer";
        delbtn.style.color="#0a4e3f";
        delbtn.style.marginLeft="10px";

        delbtn.addEventListener('click',()=>
        {
            li.remove();
        });

        li.appendChild(delbtn);
        tasklist.appendChild(li);
        todoinput.value = ''; 
    }
console.log(todoinput.value);
console.log(addbtn, todoinput, tasklist);

    addbtn.addEventListener('click', addTask);
    todoinput.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') addTask();
    });
});
