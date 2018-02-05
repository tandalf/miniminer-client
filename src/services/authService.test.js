import fetchMock from 'fetch-mock';

import { login, register } from './authService';

describe('authService', () => {
  const first_name = 'Timothy';
  const last_name = 'Ebiuwhe';
  const goodEmail = 'timothy_ebiuwhe@live.com';
  const goodPassword = '3e23rgs';
  const goodPasswordConfirm = '3e23rgs';

  const badEmail = 'timothy_ebiuwhe@live.com';
  const badPassword = '3e23rgs';
  const badPasswordConfirm = '3e23rgssssss';

  describe('login', () => {
    const successLoginRes = {
      status: 200,
      body: {
        token: 'fake-token',
        first_name,
        last_name,
        goodEmail,
      },
    };
    const errorLoginRes = {
      status: 401,
      body: {
        message: 'email or password is incorrect'
      }
    };

    it("should make a POST request to auth/login", () => {
      fetchMock.postOnce('auth/login', successLoginRes);
      login(goodEmail, goodPassword).then(resp => {
        expect(resp).toEqual(successLoginRes.body);
      });
      fetchMock.called('auth/login', 'POST');
    });
  });

  describe('register', () => {
    const successRegistrationRes = {
      status: 201,
      body: {
        first_name,
        last_name,
        goodEmail,
      }
    }
    it("should make a POST request to auth/register", () => {
      fetchMock.postOnce('auth/register', successRegistrationRes);
      register(goodEmail, goodPassword, goodPasswordConfirm, true).then(resp => {
        expect(resp).toEqual(successRegistrationRes.body);
      });
      fetchMock.called('auth/register', 'POST');
    })
  });
})
