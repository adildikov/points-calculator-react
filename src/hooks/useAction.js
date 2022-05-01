import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useActionWithPayload = (
  action
) => {
  const dispatch = useDispatch();
  return useCallback(
    (payload) => {
      dispatch(action(payload));
    },
    [dispatch, action]
  );
};

export const useAction = (action) => {
  const dispatch = useDispatch();

  return useCallback(() => {
    dispatch(action());
  }, [dispatch, action]);
};
