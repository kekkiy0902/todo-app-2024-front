import { useFetch } from '@/hooks/api';
import { Todo } from '../types';

export const getTodos = async (): Promise<Todo[]> => {
  try {
    const todos = await useFetch('/todo');

    return todos;
  } catch (error) {
    throw new Error('Failed to fetch todos');
  }
};
