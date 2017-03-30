import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects  from './componentsOne/Projects';
import AddProject  from './componentsOne/AddProject';
import Todos from './componentsOne/Todos';

import './App.css';
import ProjectItem from "./components/ProjectItem";

class App extends Component {

    constructor(){
        super();
        this.state = {
            projects: [],
            todos: []
        }
    }
    // componentDidMount(){
    //     console.log("Component Did Mount")
    // }
    componentWillMount(){
        // console.log("Comonent Will Mount")
        this.getProject();
        this.getTodos();
    }


  render() {
    return (
      <div className="App">

          <AddProject addProject={this.handleAddProject.bind(this)}/><br/>
          <Projects projects={this.state.projects} onUpdate={this.handleUpdateProject.bind(this)} onDelete={this.handleDeleteProject.bind(this)}/>
          <hr/>
          <Todos todos={this.state.todos}/>
      </div>
    );
  }

  componentDidMount(){
      this.getTodos();
  }
  getTodos(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        dataType: 'json',
        cache: false,
        success: function (data) {
            this.setState({todos:data},function () {
                console.log(this.state);
            })
        }.bind(this),
        error: function (xhr,status,err) {
            console.log(err);
        }
    });
  }

  getProject(){
      this.setState({
          projects:[
              {
                  id: uuid.v4(),
                  name: 'Name1',
                  surname:'Surname1',
                  age:'Age1',
                  job: 'Job1'
              },
              {
                  id: uuid.v4(),
                  name: 'Name2',
                  surname:'Surname2',
                  age:'Age2',
                  job: 'Job2'
              },
              {
                  id: uuid.v4(),
                  name: 'Name3',
                  surname:'Surname3',
                  age:'Age3',
                  job: 'Job3'
              }
          ]
      });
  }

   //Add title category
  handleAddProject(project){
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects})
  }
  handleDeleteProject(id){
      let projects = this.state.projects;
      let index = projects.findIndex( x => x.id === id);
      projects.splice(index,1);
      this.setState({projects:projects});
  }
    handleUpdateProject(id){
        let projects = this.state.projects;
        let index = projects.findIndex( x => x.id === id);
        projects.splice(index,1);
        this.setState({projects:projects});
    }
}

export default App;
