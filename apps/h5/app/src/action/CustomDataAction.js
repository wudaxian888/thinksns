export const SET_DATA = 'SET_DATA';
export const UPDATE_DATA = 'UPDATE_DATA';

const createAction = (type, data) => ({
  type, data,
});

export const setCustomData = (data) => createAction(SET_DATA, data);
export const updateCustomData = (data) => createAction(UPDATE_DATA, data);
