import { agregarTelefono } from '../utils/telefonos.js';
import bot from "@bot-whatsapp/bot";

import { typing, delay, sendReaction } from '../utils/utils.js';
import {flowMenu} from './flowMenu.js'

export const flowWelcome = bot .addKeyword(bot.EVENTS.WELCOME)
.addAction(async (ctx, {flowDynamic, gotoFlow, provider}) =>{

    const id = ctx.from
    const id2 = ctx.key.remoteJid;
    const agregado = await agregarTelefono(id);

if (agregado) {
    await sendReaction(provider, ctx, "❤️");
    await typing(provider, ctx, 2000);
    await flowDynamic([{
        body: 'Puedes hacernos estas consultas:\n\n├1️⃣ _*CATÁLOGO CON PRECIOS*_\n├2️⃣ _*CATÁLOGO EN PDF*_\n├3️⃣ _*DIRECCIÓN DE NUESTRAS TIENDAS*_\n├4️⃣ _*INFORMACIÓN DE NUESTROS ENVÍOS*_\n├5️⃣ _*EJEMPLOS PARA REALIZAR UN PEDIDO*_\n├6️⃣ _*PARA ABSOLVER TUS DUDAS O PREGUNTAS*_\n├7️⃣ _*COMUNICATE CON UN ASESOR*_\n\n◼ _Escribe el número que deseas consultar._\n◼ _Si tu consulta no está en el menú, escríbela directamente._\n◼ _Siempre que quieras ver estas opciones, escribe menú._',
        media: 'https://atubot.net.pe/chatbots/ivani-jeans/BIENVENIDOS.jpg'
       }
    ])
    gotoFlow(flowMenu, 1)
} else {
    gotoFlow(flowMenu)
   
}

}
)