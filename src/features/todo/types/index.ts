import { type Category } from '@/features/category/types';

export interface Todo {
  id: number;
  title: string;
  categories: Category[];
}
