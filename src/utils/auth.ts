let logoutCallback: (() => void) | null = null;

export const registerLogoutHandler = (cb: () => void) => {
  logoutCallback = cb;
};

export const logoutOn401 = () => {
  if (logoutCallback) logoutCallback();
};