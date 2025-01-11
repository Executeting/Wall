function handleSubmit() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageElement = document.getElementById('message');

    // 这里可以简单验证用户名和密码
    if (username === 'Wang' && password === '666') {
        messageElement.textContent = '登录成功！';
        messageElement.style.color = 'green';
        window.location.href = 'index1.html';
    }   
    else if (username === 'Liu' && password === '666') {
        messageElement.textContent = '登录成功！';
        messageElement.style.color = 'green';
        window.location.href = 'index1.html';
    } 
    else if (username === 'Li' && password === '666') {
        messageElement.textContent = '登录成功！';
        messageElement.style.color = 'green';
        window.location.href = 'index1.html';
    } 

    else {
        messageElement.textContent = '用户名或密码错误！';
        messageElement.style.color = 'red';
        
    }

    // 阻止表单的默认提交行为
    return false;
}
