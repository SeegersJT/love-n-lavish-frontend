export const isNull = (value) => value === null;

export const generateId = (amount) => `_${Math.random().toString(36).substr(2, amount)}`;
