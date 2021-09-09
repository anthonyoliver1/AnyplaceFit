import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss'],
})
export class AppHomeComponent implements OnInit {
  noneFound: boolean = false
  sle: boolean = false
  listPersonals: any = [
    {name: "Adolfo Alves",      area:'Aero Dance',          local: "São Paulo", image: "../../../assets/images/prof_adolfo.png"   },
    {name: "Anthony Oliveira",  area:'Muay Thai',           local: "São Paulo", image: "../../../assets/images/prof_anthony.png"  },
    {name: "Arthur Fernandes",  area:'Atletismo',           local: "São Paulo", image: "../../../assets/images/prof_arthur.png"   },
    {name: "Fernanda Alves",    area:'Karate',              local: "São Paulo", image: "../../../assets/images/prof_fernanda.png" },
    {name: "Fernando Aragão",   area:'Judô',                local: "São Paulo", image: "../../../assets/images/prof_fernando.png" },
    {name: "Gustavo Santana",   area:'Ginástica Rítmica',   local: "São Paulo", image: "../../../assets/images/prof_gustavo.png"  },
    {name: "Hermes Junior",     area:'CrossFit',            local: "São Paulo", image: "../../../assets/images/prof_hermes.png"   },
    {name: "Isabelle Martins",  area:'Musculação',          local: "São Paulo", image: "../../../assets/images/prof_isabella.png" },
    {name: "Lucas Beppu",       area:'Natação',             local: "São Paulo", image: "../../../assets/images/prof_lucas.png"    },
    {name: "Marcos Freitas",    area:'Funcional',           local: "São Paulo", image: "../../../assets/images/prof_marcos.png"   },
    {name: "Maria Eduarda",     area:'Pedalada',            local: "São Paulo", image: "../../../assets/images/prof_maria.png"    },
    {name: "Victoria Dias",     area:'Pilates',             local: "São Paulo", image: "../../../assets/images/prof_victoria.png" },
    {name: "Monique Oliveira",  area:'Musculação',          local: "São Paulo", image: "../../../assets/images/prof_monique.png" },
  ]

  dataPersonal: any = this.listPersonals

  constructor(private router: Router) { }

  ngOnInit() {}
  
  search(e){
    let dataInput = e.target.value.toUpperCase()
    this.dataPersonal = this.listPersonals.filter(i => i.name.toUpperCase().includes(dataInput))
    this.dataPersonal.length <= 0 ? this.noneFound = true : this.noneFound = false
  }

}
