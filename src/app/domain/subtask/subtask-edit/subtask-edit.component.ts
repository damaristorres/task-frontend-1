import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { SubTask } from '../subtask.model';
import { SubtaskService } from '../subtask.service';

@Component({
  selector: 'app-subtask-edit',
  templateUrl: './subtask-edit.component.html',
  styleUrls: ['./subtask-edit.component.css']
})
export class SubtaskEditComponent implements OnInit {


  constructor(

  ) { }

  ngOnInit(): void {
  }

}
