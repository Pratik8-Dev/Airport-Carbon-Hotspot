import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RemoteView } from '@acp/contracts';
import { ReactHostComponent } from '../shell/react-host.component';

@Component({
  selector: 'app-remote-page',
  imports: [ReactHostComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-react-host [view]="view()" />`,
})
export class RemotePageComponent {
  readonly view = input.required<RemoteView>(); // bound from route data via withComponentInputBinding
}
