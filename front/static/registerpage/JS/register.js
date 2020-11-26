  function Validate() {
    if (document.getElementById('password').value ==
    document.getElementById('passwordConfirm').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'Password is matching';
    document.getElementById('submitbutton').disabled = false;
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'Password is not matching';
    document.getElementById('submitbutton').disabled = 'disabled'
  }
  }


