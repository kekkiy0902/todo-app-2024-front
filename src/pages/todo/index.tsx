import { getTodos } from '@/features/todo/api';
import { TodoList } from '@/features/todo/components';
import { Todo } from '@/features/todo/types';
import { BaseLayout } from '@/components/layout-parts';
import { PageTitle } from '@/components/ui-parts/Titles';

export async function getServerSideProps() {
  const todos = await getTodos();

  return { props: { todos } };
}

const TodoPage = ({ todos }: { todos: Todo[] }) => {
  return (
    <BaseLayout>
      <PageTitle title="TODO一覧" />

      <TodoList todos={todos} className="mt-8" />
    </BaseLayout>
  );
};

export default TodoPage;
