import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Todo from './Todo';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() })

const todoItems = {
  todos: [
    {
      id: 1,
      name: "item 1",
      done: true
    },
    {
      id: 2,
      name: "Item 2",
      done: false
    }
  ]
};

describe('Testing Todo React Component', () => {
  // Applies only to tests in this describe block

  const wrapper = shallow(
    <Todo
      data={todoItems.todos[0]}
      click={() => {}}
      removeClick={() =>{}}
    />);

  beforeEach(() => {
  });

  test('Todo Exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('Todo clicked', () => {

    wrapper.find(".Todo").childAt(0).simulate("click");
    expect(wrapper.find(".TodoList--is-done"));
  });
});

