import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider-observable',
  templateUrl: './slider-observable.component.html',
  styleUrls: ['./slider-observable.component.css']
})
export class SliderObservableComponent implements OnInit {

  path='gomycode.png';
  paths=['gomycode.png','img_avatar_man.png','img_avatar_woman.png'];

  SliderObservable = new Observable<string>(

    (observer)=> {

      let i = 0;
      setInterval(
        ()=> {
          if (i=== this.paths.length){
            i=0;
          }
          else (observer.next(this.paths[i++]))
        }, 1000
      )
    } 

  );

  constructor() { }

  ngOnInit(): void {

    this.SliderObservable.subscribe(

      (path)=> {this.path = path;
        console.log(this.path)}
 




    )
  }

}
