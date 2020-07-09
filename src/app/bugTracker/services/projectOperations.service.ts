import { Injectable } from '@angular/core';
import { Project } from '../models/Project';
import { ProjectServerService } from './projectServer.service';
import { Observable } from 'rxjs';


@Injectable()
export class ProjectOperationsService{
	constructor(private projectServer : ProjectServerService){

	}

	createNew(projectName : string) : Observable<Project>{
		let newProject = {
			id : 0,
			name : projectName,
		};
		console.log('created new')
		return this.projectServer.save(newProject);
	}
    
    getAll(): Observable<Project[]> {
        return this.projectServer.getAll();
    }
    
	remove(project : Project): Observable<Project>{
		 return this.projectServer.remove(project);
		
	}
}