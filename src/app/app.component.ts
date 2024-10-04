import {TuiButton, TuiRoot, TuiTitle} from "@taiga-ui/core";
import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TuiProgress} from '@taiga-ui/kit';
import {TuiAppBar} from '@taiga-ui/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TuiRoot, TuiAppBar, TuiButton, TuiProgress, TuiTitle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'house-market';
}
