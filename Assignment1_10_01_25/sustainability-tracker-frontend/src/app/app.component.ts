import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true, // <-- Check if this is present
    imports: [CommonModule], // <-- Add CommonModule here
})
export class AppComponent {
    actions = [
        { id: 1, action: 'Carpooling', date: '2025-01-08', points: 50 },
    ];
}
