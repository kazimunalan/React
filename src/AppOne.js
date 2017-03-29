import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects  from './componentsOne/Projects';
import AddProject  from './componentsOne/AddProject';
// import Todos from './components/Todos';

import './App.css';
import ProjectItem from "./components/ProjectItem";

class App extends Component {

    constructor(){
        super();
        this.state = {
            projects: [

            ]
        }
    }
    // componentDidMount(){
    //     console.log("Component Did Mount")
    // }
    componentWillMount(){
        // console.log("Comonent Will Mount")
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


  render() {
    return (
      <div className="App">

          <AddProject addProject={this.handleAddProject.bind(this)}/><br/>
          <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
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
}

export default App;
