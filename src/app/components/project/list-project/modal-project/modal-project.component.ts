import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Project } from '../models/project';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.scss']
})
export class ModalProjectComponent implements OnInit {

  formProject: FormGroup;
  tittle: string;

  constructor(public dialogRef: MatDialogRef<ModalProjectComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) {
    this.setForm();
  }

  ngOnInit(): void {
    this.setValue();
    this.tittle = this.data.action;
  }

  setForm(): void {
    this.formProject = this.fb.group({
      id: 0,
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      website: ''
    });
  }

  save(): void {
    this.formProject.markAllAsTouched();
    if (this.formProject.valid) {
      this.dialogRef.close(this.formProject.value);
    }
  }

  setValue(): void {
    if(this.data.action === 'Editar') {
      this.formProject.patchValue(this.data.project);
    }
  }

  get id(): AbstractControl | null { return this.formProject.get('id') }
  get name(): AbstractControl | null { return this.formProject.get('name') }
  get username(): AbstractControl | null { return this.formProject.get('username') }
  get email(): AbstractControl | null { return this.formProject.get('email') }
  get company(): AbstractControl | null { return this.formProject.get('company') }
  get website(): AbstractControl | null { return this.formProject.get('website') }
  get address(): AbstractControl | null { return this.formProject.get('address') }
}
