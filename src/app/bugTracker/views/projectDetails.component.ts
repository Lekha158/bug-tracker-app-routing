import { Component } from '@angular/core';
import { ProjectOperationsService } from '../services/projectOperations.service';
import { Router } from '@angular/router';

@Component({
	selector : 'project-details-app',
	template : `<div class="details">
                    <section class="edit">
                    <label for="">Project Name :</label>
                    <input type="text" (input)="newProjectName =$event.target.value">
                    <span> [ {{newProjectName.length}} ] </span>
                    <input type="button" value="Add Project" (click)="onAddNewClick()">
                     <span class="details">  
                     <a [routerLink]="['/list']"> View Projects </a>
                      </span>
                    </section>
                </div>
        	`
})


export class ProjectDetailsComponent {

	newProjectName : string = '';

	constructor(private projectOperations : ProjectOperationsService,
		private router : Router){

	}
    
    
	onAddNewClick(){
		this.projectOperations
			.createNew(this.newProjectName)
			.subscribe(() => {
				this.router.navigate(['list']);	
			});
	}


}
