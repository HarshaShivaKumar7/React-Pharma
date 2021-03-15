import React, {useState} from 'react';
// import DataStatistics from "./Page/Data_statistics";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from "react-router-dom";
// import { CollectionProvider } from "./ContextFile/useContext";
import DataStatistics from "./Page/Data_statistics";
import Form from "./Component/Form";
import TodoList from "./Component/ToDoList";
import { CollectionProvider } from "./ContextFile/useContext";


// 
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Component/pages/Home";
// import About from "./Components/pages/About";
// import Contact from "./Components/pages/Contact";
import Navbar from "./Component/layout/Navbar";
import NotFound from "./Component/pages/NotFound";
import AddUser from "./Component/users/AddUser";
import EditUser from "./Component/users/EditUser";
import User from "./Component/users/User";
// 



const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Form 
        inputText = {inputText} 
        todos = {todos} 
        setTodos = {setTodos} 
        setInputText = {setInputText}
      />
      <TodoList
        setTodos = {setTodos}
        todos = {todos}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} /> */}
        <Route exact path="/users/add" component={AddUser} />
        <Route exact path="/users/edit/:id" component={EditUser} />
        <Route exact path="/users/:id" component={User} />
        <Route component={NotFound} />

      </Switch>
	  <CollectionProvider>
						<div className="container">
							<DataStatistics />
						</div>
					</CollectionProvider>
    </div>
  </Router>


				/* 

					<CollectionProvider>
						<div className="container">
							<DataStatistics />
						</div>
					</CollectionProvider>


				*/


  );
};
export default App;




