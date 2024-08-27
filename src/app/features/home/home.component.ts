import { Component } from '@angular/core';
import { HeaderComponent } from "../../core/header/header.component";
import { FooterComponent } from "../../core/footer/footer.component";
import { CurrentSprintComponent } from "../current-sprint/current-sprint.component";
import { PreviousSprintComponent } from "../previous-sprint/previous-sprint.component";
import { BacklogComponent } from "../backlog/backlog.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CurrentSprintComponent, PreviousSprintComponent, BacklogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
