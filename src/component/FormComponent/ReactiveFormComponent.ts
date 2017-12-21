
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators  } from "@angular/forms";

@Component({
    selector: 'my-form',
    templateUrl: './ReactiveForm.html'
})

export class ReactiveFormComponent implements OnInit {

    formGroup:FormGroup;
    name:string='';
    description:string='';
    post:any;

    constructor(private fb:FormBuilder) {

        this.formGroup=fb.group({
            'name' : [null,Validators.required],
            'description':[null,Validators.required],
            'validate':''
        });
     }

    ngOnInit() { }

    addPost(post:any){
        this.name=post.name;
        this.description=post.description;
    }





    
}