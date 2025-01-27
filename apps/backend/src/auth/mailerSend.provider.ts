import { Injectable } from '@nestjs/common';
import { ProvedorEmail } from '@projetoequipe2/core';
import 'dotenv/config';
import { MailerSend, Recipient, EmailParams, Sender } from "mailersend";

@Injectable()
export class MailerSendProvider implements ProvedorEmail{
 async enviarEmail(assunto: string, mensagem: string, email: string, ): Promise<void> {
    
    // const Recipient = require("mailersend").Recipient;
    // const EmailParams = require("mailersend").EmailParams;
    // const MailerSend = require("mailersend");

    const mailerSend = new MailerSend({
      apiKey: process.env.MAIL_SENDER_API_KEY,
    });     
    
    const recipients = [
      new Recipient(email, "Prezado Usuário")
    ];

    const emailParams = new EmailParams()
      .setFrom(new Sender("MS_zSYFK8@trial-3vz9dleo286gkj50.mlsender.net", "Rafael"))     
      .setTo(recipients)      
      .setSubject(assunto)
      .setHtml(mensagem) 
      .setText(mensagem); 
      console.log(email)
      try {
        await mailerSend.email.send(emailParams);
        console.log(email)
        //return `{"mensagem":'E-mail enviado com sucesso!'}`;
      } catch (error) {  
        console.error("Erro ao enviar o e-mail:", error);   
        throw new Error("Falha ao enviar e-mail.");
      }   
  }
}
