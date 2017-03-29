import React, { Component } from 'react';
import Button from "react-bootstrap/lib/Button";


class ProjectItem extends Component {


    render() {
        //console.log(this.props);
        return (
           <ul className="Project">
               {/*{this.props.project.id}*/}
               <li>
                   {this.props.project.name}
               </li>
               <li>
                   {this.props.project.surname}
               </li>
               <li>
                   {this.props.project.age}
               </li>
               <li>
                   <strong>{this.props.project.job}</strong>
               </li>
               <li>
                   {/*<a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}> X </a>*/}
                   <Button bsStyle="primary" onClick={this.deleteProject.bind(this,this.props.project.id)}> Delete </Button>
               </li>
           </ul>
        );
    }

    deleteProject(id){
        //console.log("test");
        this.props.onDelete(id);
    }
}



export default ProjectItem;
