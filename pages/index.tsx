import { NextPage } from "next";
import { Header } from "../components/header";
import { EnterTask } from "../components/enterTask";
// import dynamic from "next/dynamic";
// const {EnterTask}: any = dynamic(() => import("../components/enterTask"), {ssr: false})

const TodoApp: NextPage = () => {
  return (
    <div className="todo-app">
      <Header />

      <EnterTask />
    </div>
  )
}


export default TodoApp;