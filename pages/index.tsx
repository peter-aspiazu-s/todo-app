'use client'
import { NextPage } from "next";
import { Header } from "../components/header";
// import { EnterTask } from "../components/enterTask";
import dynamic from "next/dynamic";
const EnterTask: any = dynamic(() => import("../components/enterTask/EnterTask"), {ssr: false});

// Usar el dynamic para forzar a que se renderice del lado del cliente y no del servidor!!!!!!!!!!!!!!!!!

const TodoApp: NextPage = () => {

  return (
    <div className="todo-app">
      <Header />

      <EnterTask />

    </div>
  )
}


export default TodoApp;