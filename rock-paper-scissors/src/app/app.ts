import { Component, signal } from '@angular/core';
import { RspGame } from './rsp-game/rsp-game';

@Component({
  selector: 'app-root',
  imports: [RspGame],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
