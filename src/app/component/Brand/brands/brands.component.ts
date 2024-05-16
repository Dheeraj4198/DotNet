// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-brands',
//   templateUrl: './brands.component.html',
//   styleUrls: ['./brands.component.css']
// })
// export class BrandsComponent {

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandServiceService } from 'src/app/Services/brand-service.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands: any;
  constructor(private router: Router, private brandService: BrandServiceService) { }

  ngOnInit(): void {
    this.brandService.GetBrands().subscribe((res: any) => {
      console.log(res);
      if (Array.isArray(res)) {
        this.brands = res
      }
    });
  }
}