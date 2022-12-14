function mostrarApenasHome(){
    document.getElementById("login-body").style.display = 'none';
    document.getElementById("nova-conta").style.display = 'none';
    document.getElementById("divHome").style.display = 'block';
}

function mostrarApenasLogin(){
    document.getElementById("login-body").style.display = 'block';
    document.getElementById("nova-conta").style.display = 'none';
    document.getElementById("divHome").style.display = 'none';
}

function mostrarApenasConta(){
    document.getElementById("login-body").style.display = 'none';
    document.getElementById("nova-conta").style.display = 'block';
    document.getElementById("divHome").style.display = 'none';
}

function toggleButton(){
    const username = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    if ((username != null) && (password != null)) {
        document.querySelector('#botaoLogin').disabled = false;
        return
    }

    document.querySelector('#botaoLogin').disabled = true;

}

function enableSubmit(){
    let inputs = document.getElementsByClassName('req');
    let btn = document.querySelector('#botaoConta');
    let isValid = true;
 
    for (var i = 0; i < inputs.length; i++){
      let changedInput = inputs[i];
      if (changedInput.value.trim() === "" || changedInput.value === null){
        isValid = false;
        break;
      }
    }
    btn.disabled = !isValid;
  }


function limparLogin(){
    document.getElementById("login-email").value = null;
    document.getElementById("login-password").value = null;
}

