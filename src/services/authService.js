export const login = (email, password) => {
  const reqOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password})
  };

  return fetch('auth/login', reqOptions).then(handleJSONResponse);
}

export const register = (email, password, password_confirm, acceptedTerms) => {
  const reqOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password, password_confirm, acceptedTerms})
  };

  return fetch('auth/register', reqOptions).then(handleJSONResponse);
}

const handleJSONResponse = (response) => {
  if(!response.ok){
    Promise.reject(response.statusText);
  }

  return response.json();
}
