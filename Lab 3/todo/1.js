function addTask() {
    var taskText = document.getElementById('task').value.trim();
    if (taskText === '') return;
    
    var li = document.createElement('li');
    li.className = 'list-group-item';
    
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'form-check-input me-2';
    checkbox.onchange = function() {
        li.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    };
    
    var span = document.createElement('span');
    span.textContent = taskText;
    
    var btn = document.createElement('button');
    btn.className = 'btn btn-danger btn-sm ms-auto';
    btn.innerHTML = '&#128465;';
    btn.onclick = function() {
        li.remove();
    };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btn);
    document.getElementById('list').appendChild(li);
    document.getElementById('task').value = '';
}