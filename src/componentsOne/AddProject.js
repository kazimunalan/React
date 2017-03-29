/**
 * Created by kazim on 23/03/2017.
 */

import React, { Component } from 'react';
import uuid from 'uuid';



class AddProject extends Component {

    static defaultProps = {
        jobs:["Web Design", "Web Development", 'Mobile Development']
    }
    constructor(){
        super();
        this.state ={
            newProject:{}
        }
    }


    render() {
        let jobOptions =this.props.jobs.map(job => {
            return <option key={job} value={job}>{job}</option>
        })
        return (
            <div>
                <h1>Project Todo</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label> Name </label><br/>
                    <input type="text" ref="name"/><br/>
                    <label> Surname </label><br/>
                    <input type="text" ref="surname"/><br/>
                    <label> Age </label><br/>
                    <input type="text" ref="age"/><br/>
                    <label> Job </label><br/>
                    <select ref="job">
                        {jobOptions}
                    </select><br/><br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
    //Add title category
    handleSubmit(e){
        // console.log("Handle Submit");
        // console.log(this.refs.title.value);
        if(this.refs.name.value ==='' ){
            alert("Name is required");
        }
        else if( this.refs.surname.value===''){
            alert("Surname is required");
        }else{
            this.setState({newProject:{
                id: uuid.v4(),
                name: this.refs.name.value,
                surname: this.refs.surname.value,
                age: this.refs.age.value,
                job: this.refs.job.value
            }},function () {
                // console.log(this.state);
                this.props.addProject(this.state.newProject);
            });


        }
            e.preventDefault();
    }
}


export default AddProject;
