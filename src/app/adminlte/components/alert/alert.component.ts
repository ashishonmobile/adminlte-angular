import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {addRemoveViewFromContainer, removeView} from '@angular/core/src/render3/node_manipulation';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit , OnDestroy {


  alertType = 'alert-info';
  alertMessage = ' Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my entire\n' +
    '  soul, like these sweet mornings of spring which I enjoy with my whole heart.';
  title = 'Alert!';
  alertIcon = 'fa-ban';

  elementRef: ElementRef;
  renderer: Renderer2;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {

  this.elementRef = elRef;
  this.renderer = renderer;
  }

  ngOnInit() {

    console.log('ngInit');
  }

  removeMe() {
   // console.log(this.elementRef.nativeElement.parentNode.removeAll());

    const parent = this.elRef.nativeElement.parentNode;
    const refChild = this.elRef.nativeElement;
    this.renderer.removeChild(parent, refChild);
  }



  ngOnDestroy() {
      console.log('ngOnDestroy');
  }

}
