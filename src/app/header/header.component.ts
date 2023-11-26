import { Component, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  scrollToAEC(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
  scrollToCT(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
  scrollToGMC(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
  scrollToMM(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
  scrollToNM(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
  scrollToSB(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
  scrollToUC(sectionId: string): void {
    this.viewportScroller.scrollToAnchor(sectionId);
  }
  
}
