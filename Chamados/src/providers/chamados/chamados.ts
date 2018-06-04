import { HttpClientModule, HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';

/*
  Generated class for the ChamadosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChamadosProvider {

    public chamados = [];
    public filas = [
        {
            'id': 0,
            'name': 'TI'
        },
        {
            'id': 1,
            'name': 'Financeiro'
        },
        {
            'id': 2,
            'name': 'Comercial'
        },
        {
            'id': 3,
            'name': 'Diretoria'
        }
    ];

    constructor(public http: HttpClientModule) {
        console.log('Hello ChamadosProvider Provider');

        this.chamados = [
            {
                'id': 0,
                'fila': 0,
                'titulo': 'chamados para TI',
                'descricao': 'aqui vem a descricao do chamado'
            },
            {
                'id': 1,
                'fila': 0,
                'titulo': 'chamados para TI numero 2 ',
                'descricao': 'aqui vem a descricao do chamado do chamado 2 de TI'
            },
            {
                'id': 2,
                'fila': 2,
                'titulo': 'chamado para comercial',
                'descricao': 'aqui vem a descricao do chamado para po comercial'
            },
            {
                'id': 3,
                'fila': 3,
                'titulo': 'Diretores',
                'descricao': 'aqui vem a descricao do chamado para diretores'
            },
            {
                'id': 4,
                'fila': 3,
                'titulo': 'para gerência',
                'descricao': 'aqui vem a descricao do chamado de gerencia'
            }
        ];

    }


    getChamados(idFila) {
        var rst = [];
        var cc = 0;
        this.chamados.forEach(element => {
            if (element['fila'] == idFila) {
                rst[cc] = element;
                cc++;
            }
        });
        return rst;
    }

    getNameFila(idFila) {
        return this.filas[idFila]['name'];
    }

    getFilas() {
        return this.filas;
    }


}
