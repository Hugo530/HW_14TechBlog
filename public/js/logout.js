const logout = async function() {
  console.log('hi')
  try {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    console.log(response)

    if (response.ok) {
      document.location.replace('/');
    } 
  
  } catch(err) {
    console.error(err)
    alert('Failed to log out');
  }
};

document.querySelector('.navbar').addEventListener('click', (event) => {
  if (event.target===document.querySelector('#logout-link')) {
    logout();
  }
});
