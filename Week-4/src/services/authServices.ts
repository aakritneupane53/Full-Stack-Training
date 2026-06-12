export async function loginService(credentials: {
  email: string;
  password: string;
}) {
  // mimic the async process of hitting the endpoint
  // const res = await api.post('/api/auth/login')
  // if res.ok return res.data

  await Promise.resolve((resolve) => {
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

  await Promise.resolve((resolve) => {
    return setTimeout(resolve, 1000);
  });

  console.log(`User succesfully logged out`);

  return;
}

export async function getUser(accessToken: string) {
  await Promise.resolve((resolve) => {
    return setTimeout(resolve, 1000);
  });

  if (accessToken)
    return {
      name: "Fake user",
      email: "fakeuser@fake.com",
    };
}
