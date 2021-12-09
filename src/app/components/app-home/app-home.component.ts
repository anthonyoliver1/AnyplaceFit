import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss'],
})
export class AppHomeComponent implements OnInit {
  noneFound: boolean = false
  sle: boolean = false
  listPersonals: any = [
    {verify: false, email: "adolfopersonal@outlook.com.br", name: "Adolfo Alves",      sexo: "M", age: 26, number: "(11) 90401-4779", local: "São Paulo - SP",           isWhatsApp: true,  area: 'Aero Dance',        image: "../../../assets/images/prof_adolfo.png"  ,  description: "Olá me chamo Adolfo Alves,      tenho 26 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de Aero Dance com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."       },
    {verify: true, email: "anthony_oliveira@gmail.com.br",  name: "Anthony Oliveira",  sexo: "M", age: 32, number: "(75) 94372-0880", local: "Acajutiba - BA",           isWhatsApp: false, area: 'Muay Thai',         image: "../../../assets/images/prof_anthony.png" ,  description: "Olá me chamo Anthony Oliveira,  tenho 32 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de Muay Thai com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."        },
    {verify: true, email: "fernandesarthur@personal.com",   name: "Arthur Fernandes",  sexo: "M", age: 21, number: "(14) 92792-3269", local: "Bauru - SP",               isWhatsApp: false, area: 'Atletismo',         image: "../../../assets/images/prof_arthur.png"  ,  description: "Olá me chamo Arthur Fernandes,  tenho 21 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de Atletismo com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."        },
    {verify: true, email: "alvespersonal@yahoo.edu",        name: "Fernanda Alves",    sexo: "F", age: 25, number: "(34) 92750-2887", local: "Arapuã - MG",              isWhatsApp: true,  area: 'Karate',            image: "../../../assets/images/prof_fernanda.png",  description: "Olá me chamo Fernanda Alves,    tenho 25 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de Karate com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."           },
    {verify: true, email: "aragaopersonal1@outlook.com.br", name: "Fernando Aragão",   sexo: "M", age: 33, number: "(23) 94326-6568", local: "Bom Despacho - MG",        isWhatsApp: true,  area: 'Judô',              image: "../../../assets/images/prof_fernando.png",  description: "Olá me chamo Fernando Aragão ,  tenho 33 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de Judô com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."             },
    {verify: true, email: "gustavo.stn.pedro@hotmail.com",  name: "Gustavo Santana",   sexo: "M", age: 43, number: "(86) 94234-6385", local: "Alto Longa - PI",          isWhatsApp: false, area: 'Ginástica Rítmica', image: "../../../assets/images/prof_gustavo.png" ,  description: "Olá me chamo Gustavo Santana ,  tenho 43 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de Ginástica Rítmica com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."},
    {verify: true, email: "hhjunior@gmail.com.br",          name: "Hermes Junior",     sexo: "M", age: 29, number: "(24) 99192-3173", local: "Angra Dos Reis - RJ",      isWhatsApp: false, area: 'CrossFit',          image: "../../../assets/images/prof_hermes.png"  ,  description: "Olá me chamo Hermes Junior ,    tenho 29 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de CrossFit com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."         },
    {verify: false, email: "daniprofessora@hotmail.com",    name: "Daniele Melo",      sexo: "F", age: 24, number: "(39) 97151-4960", local: "Veredinha - MG",           isWhatsApp: true,  area: 'Musculação',        image: "../../../assets/images/prof_isabella.png",  description: "Olá me chamo Daniele Mele,      tenho 24 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de Musculação com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."       },
    {verify: false, email: "lucas1921@gmail.com.br",        name: "Lucas Beppu",       sexo: "M", age: 19, number: "(70) 95560-3472", local: "São Pedro - SP",           isWhatsApp: true,  area: 'Natação',           image: "../../../assets/images/prof_lucas.png"   ,  description: "Olá me chamo Lucas Beppu ,      tenho 19 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de Natação com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."          },
    {verify: true, email: "marcosfreitasoliver@ig.com.br",  name: "Marcos Freitas",    sexo: "M", age: 22, number: "(89) 98793-3674", local: "Porto Alegre - BA",        isWhatsApp: true,  area: 'Funcional',         image: "../../../assets/images/prof_marcos.png"  ,  description: "Olá me chamo Marcos Freitas,    tenho 22 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de Funcional com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."        },
    {verify: true, email: "eduardapersonal1@gmail.com",     name: "Maria Eduarda",     sexo: "M", age: 33, number: "(21) 99713-1516", local: "Teresópolis - RJ",         isWhatsApp: true,  area: 'Pedalada',          image: "../../../assets/images/prof_maria.png"   ,  description: "Olá me chamo Maria Eduarda ,    tenho 33 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de Pedalada com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."         },
    {verify: true, email: "vidiassantos@gmail.com",         name: "Victoria Dias",     sexo: "F", age: 20, number: "(39) 90779-9140", local: "Santa Barbara - MG",       isWhatsApp: true,  area: 'Pilates',           image: "../../../assets/images/prof_victoria.png",  description: "Olá me chamo Victoria Dias ,    tenho 20 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de Pilates com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."          },
    {verify: true, email: "niquepersonal@outlook.com.br",   name: "Monique Oliveira",  sexo: "F", age: 28, number: "(41) 93777-1638", local: "Almirante Tamandare - PR", isWhatsApp: true,  area: 'Musculação',        image: "../../../assets/images/prof_monique.png",   description: "Olá me chamo Monique Oliveira,  tenho 28 anos e sou  faixa preta ex judoca representante do Batalhão da Polícia, dou aulas de Musculação com o objetivo de repassar o conhecimento da arte suave para crianças e adultos."       },
  ]

  dataPersonal: any = this.listPersonals

  constructor() { }

  ngOnInit() {}
  
  search(e){
    let dataInput = e.target.value.toUpperCase()
    this.dataPersonal = this.listPersonals.filter(i => i.name.toUpperCase().includes(dataInput))
    this.dataPersonal.length <= 0 ? this.noneFound = true : this.noneFound = false
  }

}
