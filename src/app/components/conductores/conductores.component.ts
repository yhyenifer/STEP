import { Component, OnInit } from '@angular/core';
import { ConductoresService } from '../../services/conductores.service';
declare var $: any;
declare var M: any;
@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css'],
  providers: [ConductoresService]
})

export class ConductoresComponent implements OnInit {


  constructor(private conductoresService: ConductoresService) { }

  ngOnInit() {
    M.AutoInit();


  }

}
