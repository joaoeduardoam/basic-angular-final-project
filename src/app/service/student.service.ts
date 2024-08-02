
// Importar o Injectable para prover a injeção de dependência
import { Injectable } from '@angular/core';

// Importar o HttpClient
import { HttpClient } from '@angular/common/http';

// Importar o modelo de produto
import { Student } from '../model/Student';

// Importar o RxJS
import { Observable, map } from 'rxjs';

// Configuração do @Injectable
@Injectable({
  providedIn: 'root'
})

// Classe
export class StudentService {

  // URL da API
  url:string = 'http://localhost:3000/students';

  // Primeiro método a ser executado quando referenciada a classe de serviço
  constructor(private http:HttpClient) { }

  // Método para selecionar students
  select():Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }

  // selectPerson(index:number):Observable<Student>{
    
  //   let persons: Observable<Student[]> = this.http.get<Student[]>(this.url);
  //   return persons.pipe(map(personArray => personArray[index]));
    
  // }

  // Método para cadastrar students
  save(obj:Student):Observable<Student>{
    return this.http.post<Student>(this.url, obj);
  }

  // Método para alterar students
  update(obj:Student):Observable<Student>{
    return this.http.put<Student>(`${this.url}/${obj.id}`, obj);
  }

  // Método para remover students
  remove(id:number):Observable<any>{
    return this.http.delete<any>(`${this.url}/${id}`);
  }
} 