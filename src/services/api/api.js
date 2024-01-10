import { buildBasicAuthToken } from '../auth';
import {
    POST, getHttpGetOptions, getHttpPostData, getAuthHeaders, API_HOST, API_PREFIX,
} from '.';

// Auth/Password endpoints
export const AUTH_ENDPOINT = `${API_HOST}/api/auth/token`;
export const USER_PROFILE_ENDPOINT = `${API_PREFIX}/users/profile`;
export const API_USERS_ENDPOINT = `${API_PREFIX}/users`;

export const getForgotPasswordEndpoint = (email) => `${API_PREFIX}/users/password/reset/${email}`;
export const getPasswordTokenInvalidationEndpoint = (token) => `${API_PREFIX}/users/passwords/${token}/validate`;
export const getSavePasswordEndpoint = (token) => `${API_PREFIX}/users/passwords/${token}/save`;
export const getValidateOTPTokenEndpoint = (token) => `${API_PREFIX}/users/otp/${token}/validate`;
export const getCreatePasswordEndpoint = (user) => `${API_PREFIX}/users/${user}/passwords`;
export const getEmailTokenInvalidationEndpoint = (token) => `${API_PREFIX}/users/confirmations/${token}`;
export const getCPCompanyRegistrationEndpoint = () => `${API_PREFIX}/creditprovider/company/registration`;

// / constructs options relating to the auth http request
const getAuthRequestOptions = (username, password) => ({
    method: POST,
    headers: {
        Authorization: buildBasicAuthToken(username, password),
    },
});

/**
 * Returns a pair of [endpoint, requestOptions], relating to a request
 *  to authenticate.
 *
 * @param {string} username - name of the user attempting to log in
 * @param {string} password - user's password
 * @returns {array} containing the endpoint and requestOptions
 */
export const getAuthRequest = (username, password) => [
    AUTH_ENDPOINT,
    getAuthRequestOptions(username, password),
];

export const getUserProfileRequest = (accessToken) => [
    USER_PROFILE_ENDPOINT,
    getHttpGetOptions(getAuthHeaders(accessToken)),
];

export const getForgottenPasswordRequest = (email) => [
    getForgotPasswordEndpoint(email),
    getHttpGetOptions(),
];

export const getRegisterRequest = (fullName, email, country) => [
    API_USERS_ENDPOINT,
    getHttpPostData({ fullName, email, country }),
];

export const getValidateEmailConfirmationTokenRequest = (token) => [
    getEmailTokenInvalidationEndpoint(token),
    getHttpGetOptions(),
];

export const getCreatePasswordRequest = (user, newPassword, passwordConfirmation) => [
    getCreatePasswordEndpoint(user),
    getHttpPostData({ newPassword, passwordConfirmation }),
];

export const getValidatePasswordResetTokenRequest = (token) => [
    getPasswordTokenInvalidationEndpoint(token),
    getHttpGetOptions(),
];

export const getResetPasswordRequest = (token, newPassword, passwordConfirmation) => [
    getSavePasswordEndpoint(token),
    getHttpPostData({ newPassword, passwordConfirmation }),
];

const getCountriesEndpoint = () => `${API_PREFIX}/countries`;
export const getCountriesRequest = (accessToken) => [
    getCountriesEndpoint(),
    getHttpGetOptions(getAuthHeaders(accessToken)),
];

export const getValidateOTPTokenRequest = (token) => [
    getValidateOTPTokenEndpoint(token),
    getHttpGetOptions(),
];

export const getCPCompanyRegistrationRequest = (accessToken, payload) => [
    getCPCompanyRegistrationEndpoint(),
    getHttpPostData(payload, getAuthHeaders(accessToken)),
];
