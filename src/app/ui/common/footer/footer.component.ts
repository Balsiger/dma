import { ChangeDetectorRef, Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink, MatButtonModule, MatTooltipModule, MatIconModule],
})
export class FooterComponent {
  constructor(private readonly changeDetector: ChangeDetectorRef) {}

  refresh() {
    this.changeDetector.detectChanges();
  }
}
