import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentSprintComponent } from "./features/current-sprint/current-sprint.component";
import { PreviousSprintComponent } from "./features/previous-sprint/previous-sprint.component";
import { BacklogComponent } from "./features/backlog/backlog.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrentSprintComponent, PreviousSprintComponent, BacklogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Anukrit';
}
