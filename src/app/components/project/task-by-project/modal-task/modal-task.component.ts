import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.scss']
})
export class ModalTaskComponent implements OnInit {

  formTask: FormGroup;
  tittle: string;

  constructor(public dialogRef: MatDialogRef<ModalTaskComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {
    this.setForm();
  }


  ngOnInit(): void {
    this.setValue();
    this.tittle = this.data.action;
  }

  setForm(): void {
    this.formTask = this.fb.group({
      id: 0,
      title: ['', Validators.required],
      completed: ['']
    });
  }

  save(): void {
    this.formTask.markAllAsTouched();
    if (this.formTask.valid) {
      this.dialogRef.close(this.formTask.value);
    }
  }

  setValue(): void {
    if (this.data.action === 'Editar') {
      this.formTask.patchValue(this.data.task);
    }
  }

  get id(): AbstractControl | null { return this.formTask.get('id') }
  get title(): AbstractControl | null { return this.formTask.get('title') }
  get completed(): AbstractControl | null { return this.formTask.get('completed') }
}
