import axios from 'axios';
import baseAPI from '.';

export const getTodoListAPI = actions => {
  const {
    pendingAction = () => {},
    fulfilledAction = () => {},
    rejectAction = () => {},
  } = actions;

  pendingAction();
  baseAPI
    .get('/todos')
    .then(res => {
      fulfilledAction(res.data);
    })
    .catch(err => {
      todoRejectAction(err, rejectAction);
    });
};

export const createTodoListAPI = (data, actions) => {
  const {
    pendingAction = () => {},
    fulfilledAction = () => {},
    rejectAction = () => {},
  } = actions;

  pendingAction();
  baseAPI
    .post('/todos', data)
    .then(() => {
      fulfilledAction();
    })
    .catch(err => {
      todoRejectAction(err, rejectAction);
    });
};

export const editTodoListAPI = (data, actions) => {
  const {
    pendingAction = () => {},
    fulfilledAction = () => {},
    rejectAction = () => {},
  } = actions;
  const { id, todo, isCompleted } = data;

  pendingAction();
  baseAPI
    .put(`/todos/${id}`, {
      todo,
      isCompleted,
    })
    .then(res => {
      fulfilledAction();
    })
    .catch(err => {
      todoRejectAction(err, rejectAction);
    });
};

export const deleteTodoListAPI = (data, actions) => {
  const {
    pendingAction = () => {},
    fulfilledAction = () => {},
    rejectAction = () => {},
  } = actions;
  const { id } = data;

  pendingAction();
  baseAPI
    .delete(`/todos/${id}`)
    .then(res => {
      fulfilledAction();
    })
    .catch(err => {
      todoRejectAction(err, rejectAction);
    });
};

export const todoRejectAction = (err, redirectAction) => {
  if (axios.isAxiosError(err) && err.response) {
    if ((err.response?.data).statusCode === 401) {
      redirectAction();
      window.localStorage.removeItem('token');
    }
  }
};
