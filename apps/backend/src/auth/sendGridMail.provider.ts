// import { Injectable } from '@nestjs/common';
// import { ProvedorEmail } from '@projetoequipe2/core';
// import sendgrid from "@sendgrid/mail";

// @Injectable()
// export class SendGridMailProvider implements ProvedorEmail{
//  async enviarEmail(email: string, assunto: string, mensagem: string): Promise<string> {
//     sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

//       const msg = {
//         to: email,
//         from: "no-reply@seudominio.com", // Remetente verificado no SendGrid
//         subject: assunto,
//         html: mensagem, // Corpo da mensagem HTML
//       };

//       try {
//         await sendgrid.send(msg);
//         return `{"mensagem":'E-mail enviado com sucesso!'}`;
//       } catch (error) {
//         console.error("Erro ao enviar e-mail:", error.response?.body || error);
//         throw new Error("Falha ao enviar e-mail.");
//       }   
//   }
// }
