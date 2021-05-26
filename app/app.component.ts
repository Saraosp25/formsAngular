import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Formulario';
  msg:string='';


  employees=[
    {'name':' Sara',position:'Manager',email:'email@gmail.com'},
    {'name':' Mario',position:'Diseno',email:'email@gmail.com'},
    {'name':' Luis',position:'Secreario',email:'email@gmail.com'}
  ];
  model:any={};
  model2:any={};

  addEmployee(): void{
    this.employees.push(this.model);

  }
  deleteEmployee(i: any): void{
    var ans=confirm('EStas seguro')
    if(ans){
      this.employees.splice(i,1);
    }

  }
  myValue: any;
  editEmployee(i:any): void{
    this.model2.name=this.employees[i].name;
    this.model2.position=this.employees[i].position;
    this.model2.email=this.employees[i].email;
    this.myValue=i;

  }
  updateEmployee(): void{
    let i= this.myValue;
    for(let j=0;j<this.employees.length;j++){
      if(i==j){
        this.employees[i]=this.model2;
        this.model2={};
        
      }

    }


  }
}
