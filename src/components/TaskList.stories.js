import React from 'react';

import TaskList from './TaskList';
import * as TaskStories from './Task.stories';

export default {
  component: TaskList,
  title: 'TaskList',
  /*
    Decorators는 스토리에 임의의 wrapper를 제공하는 한 방법이다. 
    데코레이터 'key'를 사용하여 기본 내보내기에서 렌더링 된 컴포넌트에 'padding'을 추가.
    데코레이터는 providers(React context)를 설정하는 라이브러리 컴포넌트 에서 스토리를 감싸 줄 때 사용.
  */
  decorators: [ 
    story => (
      <div style={{ padding: '3rem' }}>
        {story()}
      </div> 
    )
  ]
};

const Template = args => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    // TaskStories를 가져옴으로써 최소한의 노력으로 스토리 속의 인수(arguments)를 구성(compose)할 수 있다. 
    // 이를 통해 두 컴포넌트가 받을 수 있는 데이터와 액션(mocked callbacks)이 모두 보존. 
    { ...TaskStories.Default.args.task, id: '1', title: 'Task 1' },
    { ...TaskStories.Default.args.task, id: '2', title: 'Task 2' },
    { ...TaskStories.Default.args.task, id: '3', title: 'Task 3' },
    { ...TaskStories.Default.args.task, id: '4', title: 'Task 4' },
    { ...TaskStories.Default.args.task, id: '5', title: 'Task 5' },
    { ...TaskStories.Default.args.task, id: '6', title: 'Task 6' },
  ]
}

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // args 구성을 통해 이야기를 형성합니다.
  // Default 스토리에서 가져온 상속된 데이터입니다.
  tasks: [
    ...Default.args.tasks.slice(0, 5),
    { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
  ]
}

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
}

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};

