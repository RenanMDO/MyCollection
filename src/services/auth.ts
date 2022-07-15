import { v4 as uuid } from 'uuid'
type SiginRequestData = {
  email: string,
  password: string,
};

const delay = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async function signInRequest(data: SiginRequestData) {
  await delay()
  return {
    token: uuid(),
    user: {
      name: 'Admin',
      email: 'admin@admin.com.br',
    }
  }
};

export async function recoverUserInformation() {
  await delay();
  return {
    user: {
      name: 'Admin',
      email: 'admin@admin.com.br',
    }
  }
}

