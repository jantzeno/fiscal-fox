import { MOCK_STORE$ } from '../../store/testing';
import { MOCK_USER } from '../user/store/models/user-mock-state';
import { AuthFacade } from './auth.facade';
import { requestLogin, requestLogout, requestRegistration } from './store';

describe('AuthFacade', () => {
  let authFacade: AuthFacade;

  beforeEach(() => {
    authFacade = new AuthFacade(MOCK_STORE$);
  });

  describe('#login method', () => {
    it('should login', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = requestLogin({
        username: MOCK_USER.username,
        password: 'password',
      });
      authFacade.login({ username: MOCK_USER.username, password: 'password' });
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#logout method', () => {
    it('should logout', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = requestLogout();
      authFacade.logout();
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });

  describe('#register method', () => {
    it('should register', () => {
      const dispatchSpy = spyOn(MOCK_STORE$, 'dispatch');
      const action = requestRegistration({
        user: MOCK_USER,
        password: 'password',
      });
      authFacade.register(MOCK_USER, 'password');
      expect(dispatchSpy).toHaveBeenCalledWith(action);
    });
  });
});
