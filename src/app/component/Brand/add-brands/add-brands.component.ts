import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandServiceService } from 'src/app/Services/brand-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-brands',
  templateUrl: './add-brands.component.html',
  styleUrls: ['./add-brands.component.css']
})
export class AddBrandsComponent implements OnInit {

  userDetailForm!: FormGroup;

  constructor(private userData: BrandServiceService, private router: Router, private formBuilder: FormBuilder) {

  }

  userDetails = {
    id: '',
    name: '',
    category: '',
    isActive: ''
  }

  ngOnInit(): void {
    this.userDetailForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      isActive: ['', Validators.required],
    })
  }

  // onSubmit() {
  //   if (this.userDetailForm.valid) {
  //     //console.log(this.userDetailForm.value)
  //     this.userData.Adduser(this.userDetailForm.value).subscribe((result) => {
  //       this.router.navigate(['/users/user'])
  //     });
  //   }
  //}
}
