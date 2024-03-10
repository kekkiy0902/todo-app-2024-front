import { twMerge } from 'tailwind-merge';
import { type Todo } from '../types';
import { Card } from '@/components/ui-parts/Cards';
import { Label } from '@/components/ui-parts/Labels';

interface TodoListProps {
  todos: Todo[];
  className?: string;
}

export const TodoList = ({ todos, className }: TodoListProps) => {
  const customClassName = twMerge('grid w-full gap-4 lg:gap-6', className);

  return (
    <section className={customClassName}>
      {todos.map((todo) => (
        <Card key={todo.id} className="grid gap-4 lg:gap-6">
          <h2 className="font-bold">{todo.title}</h2>

          <div className="grid gap-4 lg:gap-6">
            <div className="flex space-x-2">
              {todo.categories?.map((category, index) => (
                <Label key={index} name={category.name} />
              ))}
            </div>
          </div>
        </Card>
      ))}
    </section>
  );
};
