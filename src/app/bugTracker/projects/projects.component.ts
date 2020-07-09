import { Component, Output, EventEmitter} from '@angular/core';
import { Project } from '../models/Project';
import { ProjectOperationsService } from '../services/projectOperations.service';


@Component({
	selector : 'app-projects-edit',
	templateUrl :  './projects.component.html'

})

export class ProjectsEditComponent{
	projects : Project[] = [];
	newProjectName : string = '';

	 @Output()
	newProjectCreated : EventEmitter<Project> = new EventEmitter<Project>();

	constructor(private projectOperations : ProjectOperationsService){
		this.projectOperations
		.getAll()
		.subscribe(projects => this.projects = projects);
	}

	
	onRemoveClick(projectToRemove){
		this.projectOperations.remove(projectToRemove)
		.subscribe( () => this.projects = this.projects.filter(p => p !== projectToRemove));
	}

}