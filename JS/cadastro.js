let saveFile = () => {
    	
    const email = document.getElementById('email-field');
    const name = document.getElementById('name-field');
    const dob = document.getElementById('dob-field');
    const state = document.getElementById('br-state-field');
    const pw = document.getElementById('password-field');
    const pwconf = document.getElementById('password-confirmation-field');
    
    let data = 
        '\r Email: ' + email.value + ' \r\n ' + 
        'Nome: ' +name.value + ' \r\n ' + 
        'Data de Nascimento: ' + dob.value + ' \r\n ' + 
        'Estado: ' + state.value + ' \r\n ' + 
        'Senha: ' + pw.value + ' \r\n ' +
        'Confirmação da Senha: ' + pwconf.value;
    
    if (pw !== pwconf) {
        alert("As senhas não conferem.")
    }
    
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'registro.txt';

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}