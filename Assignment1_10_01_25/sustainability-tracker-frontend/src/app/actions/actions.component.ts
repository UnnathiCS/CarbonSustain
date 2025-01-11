import { Component, OnInit } from '@angular/core';
import { ActionsService, Action } from './actions.service';

@Component({
    selector: 'app-actions',
    templateUrl: './actions.component.html',
    styleUrls: ['./actions.component.css'],
})
export class ActionsComponent implements OnInit {
    actions: Action[] = [];
    newAction: Action = { action: '', date: '', points: 0 };

    constructor(private actionsService: ActionsService) {}

    ngOnInit(): void {
        this.fetchActions();
    }

    fetchActions(): void {
        this.actionsService.getActions().subscribe((data) => {
            this.actions = data;
        });
    }

    addAction(): void {
        this.actionsService.addAction(this.newAction).subscribe(() => {
            this.fetchActions();
            this.newAction = { action: '', date: '', points: 0 };
        });
    }
}
