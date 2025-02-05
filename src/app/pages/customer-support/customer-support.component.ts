import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-support',
  templateUrl: './customer-support.component.html',
  styleUrl: './customer-support.component.css'
})
export class CustomerSupportComponent {
  messagePhone(){
    alert('+55 (84) 99999-9999')
  }
  messageMail(){
    alert('padaria@gmail.com')
  }
  messageSocial(){
    alert('Instagram: @Padaria \n Facebook: Padaria' )
  }
  messageFAQ(){
    alert('O FAQ funciona entre 08:00 e 22:00')
  }
}
