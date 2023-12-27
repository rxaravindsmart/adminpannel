import { Directive ,ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private el:ElementRef) {   }

  @HostListener('click')
  nextfunction(){
    var elm =this.el.nativeElement.parentElement.parentElement.parentElement.children[1].children[1].children[0].children[0].children[0].children[0].children[0]
    var item=elm.getElementsByClassName("item-wrap")
    console.log(elm);
    console.log(item);


    elm.append(item[0])
  }
}
