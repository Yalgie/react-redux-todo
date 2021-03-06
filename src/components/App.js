import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Test from "./Test";

const App = () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <Test />
    </div>
);

export default App;