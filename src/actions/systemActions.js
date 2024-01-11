export const ADD_SYSTEM_TOASTER = 'ADD_SYSTEM_TOASTER';
export const REMOVE_SYSTEM_TOASTER = 'REMOVE_SYSTEM_TOASTER';

export const addSystemToaster = (message, variant) => ({
    type: ADD_SYSTEM_TOASTER,
    message,
    variant,
});

export const removeSystemToaster = (id) => ({
    type: REMOVE_SYSTEM_TOASTER,
    id,
});