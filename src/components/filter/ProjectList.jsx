import { Component } from "react";
import "./css/ProjectList.css";

export default class ProjectList extends Component {
  render() {
    const { projects } = this.props;
    return (
      <div className="projectList">
        {projects.map((project, i) => (
          <div className="projectListCs" key={i}>
            <img className="projectListCsImgs" src={project.img}></img>
          </div>
        ))}
      </div>
    );
  }
}
