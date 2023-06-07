import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  students: string[] = [];

  addStudent(student: string) {}

  constructor() {}
}
