import { HttpClient } from '@angular/common/http';
import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  NgbActiveModal,
  NgbModal,
  NgbModalRef,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-advance-level-popup',
  imports: [ReactiveFormsModule, NgbModule],
  templateUrl: './advance-level-popup.component.html',
  styleUrl: './advance-level-popup.component.css',
  providers: [],
})
export class AdvanceLevelPopupComponent {
  form: FormGroup;
  @ViewChild('advancedPopup') private advanceLevelPopup!: TemplateRef<AdvanceLevelPopupComponent>;
  http: HttpClient = inject(HttpClient);
  userList: any;
  public modalRef!: NgbModalRef;

  constructor(
    private fb: FormBuilder,
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) {
    this.form = this.fb.group({
      name: ['test  ', [Validators.required]],
      email: ['', [Validators.required]],
      user: [''],
    });
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers() {
    this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res: any) => {
        this.userList = res;
        console.log(this.userList);
      });
  }

  submit() {
    if (this.form.valid) {
      this.activeModal.close(this.form.value); // send form data to parent
    }
  }


  open() {
    return new Promise<boolean>((resolve) => {
      this.modalRef = this.modalService.open(this.advanceLevelPopup, {
        centered: true
      });
      this.modalRef.result.then(
        (result) => {
          resolve(true);
        },
        (reason) => {
          resolve(false);
        }
      );
    }
    );
  }
}
