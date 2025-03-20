const input = document.querySelector('.inputBox');

const button = document.querySelector('.addBtn');
const taskDiv = document.querySelector('.task');

button.addEventListener('click', () => {
    if(input.value === ""){
        alert("Please Enter a Task");
    }
    else{
        let span = document.createElement('span');
        span.innerHTML = input.value;
        taskDiv.appendChild(span);
        let checkBox = document.createElement('input');

        checkBox.type = "checkbox";
        checkBox.classList.add('checkBoxInput');
        
        
        
        taskDiv.append(checkBox);
         
        checkBox.addEventListener('click', () => {
          span.classList.toggle('checked');
        }) 

        let remove = document.createElement('button');
        remove.innerText = "Remove";
        remove.classList.add('removeBtn');

        remove.addEventListener('click', () => {
            taskDiv.removeChild(span);
            remove.style.display = "none";
        })

        taskDiv.append(remove);
    }
    input.value = "";
   
})

