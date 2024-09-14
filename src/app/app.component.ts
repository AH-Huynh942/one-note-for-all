import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { TestTableComponent } from './test-table/test-table.component';
import { TestDashboardComponent } from './test-dashboard/test-dashboard.component';
import { TestTreeComponent } from './test-tree/test-tree.component';
import { TestDragDropComponent } from './test-drag-drop/test-drag-drop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToolBarComponent, TestTreeComponent, TestTableComponent, TestDragDropComponent,TestDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'one-note-for-all';
}
