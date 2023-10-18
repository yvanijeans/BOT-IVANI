import bot from "@bot-whatsapp/bot";
import { typing, delay, sendReaction } from '../utils/utils.js';
const regexCuentas = `/^c1$/i`;

export const flowCuentas = bot .addKeyword(regexCuentas, {regex: true})
.addAction(async (ctx, {flowDynamic, provider}) =>{  
    
    await sendReaction(provider, ctx, "❤️");
    await typing(provider, ctx, 2000);
    await flowDynamic('📛💎📛 Cuentas para depocito y tranferencias  ❗❗❗\n✅Bcp:   19106896691052  yvan Guillermo Núñez falen\n✅Bbva :  001108140235693696   yvan Guillermo Núñez falen\n✅Banco de la nación:  04082513642   yvan Guillermo Núñez falen. \n❤❤TBM  plin y yape :  930712791 yvan Guillermo Núñez falen.')
    await typing(provider, ctx, 2000);
    await flowDynamic('ADJUNTAR SU PAGO Y TBM 👇👇👇👇\n🔱 _*Brindemos sus datos completos*_ :❤\n📛Nombres completos  ✅\n📛DNI: (  _*REVISAR BIEN LOS NÚMEROS. EN CASO SE EQUIVOQUE. LO ENVIAREMOS AL OTRO DÍA SGT*_  )\n📛 "DESTINO*  ✅\n📛TELÉFONO  (OBLIGATORIO)\n📛Agencia de su preferencia (opcional✅)')
    await typing(provider, ctx, 2000);
    await flowDynamic([{
      body: 'Únicas cuentas para tranferencias.\nYvan Guillermo Núñez falen',
      media: 'https://atubot.net.pe/chatbots/ivani-jeans/imagen-pagos.jpg'
     }])
     
})