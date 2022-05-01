import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  Input,
  QueryList,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'dui-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements AfterContentInit, AfterViewInit {
  tabs: string[] = [];
  @Input() tab: string = '';

  @ViewChild('content', { static: false }) out!: ElementRef;
  @ContentChildren('tabItem') contents!: QueryList<ElementRef>;

  constructor(private renderer: Renderer2) {}

  ngAfterContentInit(): void {
    this.contents.forEach((item) => {
      const el = item.nativeElement as HTMLElement;
      this.tabs.push(el.dataset['tab']!);
    });

    if (this.tabs.indexOf(this.tab) === -1) {
      this.tab = this.tabs.map((v) => v).shift() || '';
    }
  }

  ngAfterViewInit(): void {
    this.setTab(this.tab);
  }

  setTab(name: string): void {
    this.contents.forEach((item) => {
      const el = item.nativeElement as HTMLElement;
      if (el.dataset['tab']! === name) {
        this.out.nativeElement.childNodes.forEach((child: any) => {
          this.renderer.removeChild(this.out.nativeElement, child);
        });
        this.renderer.appendChild(this.out.nativeElement, el);
        this.tab = name;
      }
    });
  }
}
