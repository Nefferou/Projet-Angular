import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  activeLinkIndex = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.getSelectedTabIndex();
    });
  }

  onLinkClick(index: number): void {
    this.activeLinkIndex = index;
    switch (index) {
      case 0:
        this.router.navigateByUrl('/boutique');
        break;
      case 1:
        this.router.navigateByUrl('/clicker');
        break;
      case 2:
        this.router.navigateByUrl('/marchand');
        break;
      default:
        break;
    }
  }

  private getSelectedTabIndex(): number {
    const path = this.router.url;
    if (path.includes('/clicker')) {
      return 1;
    } else if (path.includes('/marchand')) {
      return 2;
    } else {
      return 0;
    }
  }

}
