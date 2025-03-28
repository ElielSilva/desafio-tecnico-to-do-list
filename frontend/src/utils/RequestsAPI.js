
const RequestLogin = async (RequestBody) => {
  try {
    const response = await fetch('http://localhost:3001/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(RequestBody),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error; 
  }
};

const RequestRegister = async (RequestBody) => {
  try {
    const response = await fetch('http://localhost:3001/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(RequestBody),
    });

    if (!response.ok) {
      return result;
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error; 
  }
};

const RequestAllTasks = async (RequestBody) => {
  try {
    const token = JSON.parse(localStorage.getItem('Authorization'));
    const response = await fetch('http://localhost:3001/tasks/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(RequestBody),
    });

    if (response.status === 401) {
      throw new Error('Acesso proibido: você não tem permissão para acessar este recurso.');
    }

    const result = await response.json();
    
    return result;
  } catch (error) {
    console.error('Error: capitura', error);
    throw error;
  }
};

const RequestGenerics = async ( Method, Body, Path) => {
  try {
    const token = JSON.parse(localStorage.getItem('Authorization'));
    const response = await fetch(`http://localhost:3001/${Path}`, {
      method: Method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(Body),
    });
    if (response.status === 403) {
      throw new Error('Acesso proibido: você não tem permissão para acessar este recurso.');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error; 
  }
};

const RequestGenericsWithId = async ( Method, Body, Path, ParamsId) => {
  try {
    const token = JSON.parse(localStorage.getItem('Authorization'));
    console.log(token)
    const response = await fetch(`http://localhost:3001/${Path}/${ParamsId}`, {
      method: Method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(Body),
    });

    if (response.status === 403) {
      throw new Error('Acesso proibido: você não tem permissão para acessar este recurso.');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error; 
  }
};

export { RequestLogin, RequestRegister, RequestAllTasks, RequestGenerics, RequestGenericsWithId };