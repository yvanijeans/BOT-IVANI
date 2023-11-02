import bot from "@bot-whatsapp/bot";
import { typing, delay, sendReaction } from '../utils/utils.js';
const regexCuentas = `/^c1$/i`;

export const flowCuentas = bot .addKeyword(regexCuentas, {regex: true})
.addAction(async (ctx, {flowDynamic, provider}) =>{  
    
    await sendReaction(provider, ctx, "❤️");
    await typing(provider, ctx, 2000);
    await flowDynamic(` *${ctx.pushName}*\n📛 Cuentas para depocito y tranferencias  ❗❗\n✅ _*YAPE Y PLIN*_  :  930712791 yvan Guillermo Núñez falen.\n✅ _*BCP *_ :   19106896691052  yvan Guillermo Núñez falen\n✅ _*BBVA*_ :  001108140235693696   yvan Guillermo Núñez falen\n✅ _*BANCO DE LA NACION*_ :  04082513642   yvan Guillermo Núñez falen.`)
    await typing(provider, ctx, 2000);
    await flowDynamic('ADJUNTAR SU PAGO Y TBM 👇👇👇👇\n🔱 _*Brindemos sus datos completos*_ :❤\n📛Nombres completos  ✅\n📛DNI: (  _*REVISAR BIEN LOS NÚMEROS. EN CASO SE EQUIVOQUE. LO ENVIAREMOS AL OTRO DÍA SGT*_  )\n📛 "DESTINO*  ✅\n📛TELÉFONO  (OBLIGATORIO)\n📛Agencia de su preferencia (opcional✅)')
     
})