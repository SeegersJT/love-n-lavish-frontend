import Cookies from 'js-cookie';

global.Buffer = require('buffer').Buffer;

let landingPage;
let loginTypeRigths;

export const buildBasicAuthToken = (username, password) => {
  const b = Buffer.from(`${username}:${password}`);
  return `Basic ${b.toString('base64')}`;
};

export const setBranchNo = (branchNo) => {
  Cookies.set('branchNo', branchNo);
};

export const deleteBranchNoCookie = () => {
  Cookies.remove('branchNo');
};

export const getBranchNo = () => Cookies.get('branchNo');

export const setEmployeeNo = (employeeNo) => {
  Cookies.set('employeeNo', employeeNo);
};

export const deleteEmployeeNoCookie = () => {
  Cookies.remove('employeeNo');
};

export const getEmployeeNo = () => Cookies.get('employeeNo');

export const setEmployeeTypeNo = (employeeTypeNo) => {
  Cookies.set('employeeTypeNo', employeeTypeNo);
};

export const deleteCountryNoCookie = () => {
  Cookies.remove('countryNo');
};

export const getCountryNo = () => Cookies.get('countryNo');

export const setCountryNo = (countryNo) => {
  Cookies.set('countryNo', countryNo);
};

export const deleteEmployeeTypeNoCookie = () => {
  Cookies.remove('employeeTypeNo');
};

export const getEmployeeTypeNo = () => Cookies.get('employeeTypeNo');

export const storeActiveCase = (activeCase) => {
  localStorage.setItem('activeCase', JSON.stringify(activeCase));
};

export const retrieveActiveCase = () => JSON.parse(localStorage.getItem('activeCase'));

export const retrieveLoggedIntoCampaign = () => Cookies.get('loggedIntoCampaign') === 'true';

export const storeLoggedIntoCampaign = (loggedIn) => Cookies.set('loggedIntoCampaign', loggedIn);

export const setLandingPage = (landing_page) => {
  landingPage = landing_page;
};

export const getLandingpage = () => landingPage;

export const setLoginType = (loginType) => {
  loginTypeRigths = loginType;
};

export const getLoginType = () => loginTypeRigths;
