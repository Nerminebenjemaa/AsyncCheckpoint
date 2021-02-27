import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-oberservable',
  templateUrl: './oberservable.component.html',
  styleUrls: ['./oberservable.component.css']
})
export class OberservableComponent implements OnInit {

  monObersvable = new Observable <number>(
    (observer  : any) =>{
      let i=5;
      setInterval(
        () => {
          if(!i){ observer.complete();}

          observer.next(i--);
        }, 1000
      );
    }
  );

  constructor() { }

  ngOnInit(): void {
    this.monObersvable.subscribe(

      (data)=>{ console.log(data);},
      // (error)=>{console.log(error);},
      // ()=> console.log('operation completed'),
      );
//1ere methode
      this.monObersvable.subscribe(

        (data)=>{ console.log(data*2);},
        // (error)=>{console.log(error);},
        // ()=> console.log('operation completed'),
        );

        //2eme methode
        this.monObersvable.pipe(
          map ((data) => data * 2 ),
          filter((data)=> data % 2 !== 0)
          
          ).subscribe(

          (data)=>{ console.log(data);},
          // (error)=>{console.log(error);},
          // ()=> console.log('operation completed'),
          );
  }

}
