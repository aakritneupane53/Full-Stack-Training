export async function loginService(credentials: {
  email: string;
  password: string;
}) {
  // mimic the async process of hitting the endpoint
  // const res = await api.post('/api/auth/login')
  // if res.ok return res.data

  Promise.resolve((resolve) => {
    return setTimeout(resolve, 1000);
  });

  console.log(
    `User with the credentials ${credentials.email} logged in succesfully`,
  );

  const token = "asdfghjkl";
  return token;
}

export async function logoutService() {
  // mimic the async process of hitting the endpoint
  // const res = await api.post('/api/auth/login')
  // if res.ok return res.data

  Promise.resolve((resolve) => {
    return setTimeout(resolve, 1000);
  });

  return;
}
