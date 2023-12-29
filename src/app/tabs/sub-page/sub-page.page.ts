import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-sub-page',
  templateUrl: './sub-page.page.html',
  styleUrls: ['./sub-page.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SubPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
