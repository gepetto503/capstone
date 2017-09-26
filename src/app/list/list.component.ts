import { Component, Input } from '@angular/core';
import { DatabaseInteractionService } from '../database-interaction.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  providers: [DatabaseInteractionService]

})
export class ListComponent {
  @Input() childApiResponse;

  constructor(private databaseService: DatabaseInteractionService) { }

//a function to save selected npos from the list to the database


}
