import { Component, OnInit } from '@angular/core';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import {FormBuilder, FormGroup, Validators, NgForm, FormControl} from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader'; // Import NgxUiLoaderService

declare let alert: any;
declare let $: any;
declare let swal: any;
declare let  toastr: any;

@Component({
  selector: 'app-centers',
  templateUrl: './centers.component.html',
  styleUrls: ['./centers.component.css']
})
export class CentersComponent implements OnInit {


  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService,
    private formBuilder: FormBuilder,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {

    // generateFake(count: number): Array<number> {
    //   const indexes = [];
    //   for (let i = 0; i < count; i++) {
    //     indexes.push(i);
    //   }
    //   return indexes;
    // }
  }

}
