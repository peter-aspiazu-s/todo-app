'use client'
import { useState } from "react";
import { NextPage } from "next";
import { Header } from "../components/header";
import dynamic from "next/dynamic";

const EnterTask: any = dynamic(() => import("../components/enterTask/EnterTask"), {ssr: false});
// Usar el dynamic para forzar a que se renderice del lado del cliente y no del servidor!!!!!!!!!!!!!!!!!

const TodoApp: NextPage = () => {

  // 0 all todos
  // 1 complete todos
  // 2 uncomplete todos
  const [todosFilter, setTodosFilter] = useState(0);

  const [numberTask, setNumberTask] = useState(0);

  return (
    <div className="todo-app">
      <Header setTodosFilter={setTodosFilter} numberTask={numberTask} />

      <EnterTask todosFilter={todosFilter} setNumberTask={setNumberTask} />

    </div>
  )
}


export default TodoApp;