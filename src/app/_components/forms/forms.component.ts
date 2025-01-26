import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  nome: string = '';
  sobrenome: string = '';
  email: string = '';

  cadastrar() {
    // Lógica de cadastro aqui, se necessário
    alert('Cadastro realizado com sucesso!');
  }
}
