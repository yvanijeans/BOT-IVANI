import bot from "@bot-whatsapp/bot";
import { typing, delay, sendReaction } from '../utils/utils.js';

const regexCali = `/^cali1$/i`;

export const flowCalidad = bot .addKeyword(regexCali, {regex: true})
.addAction(async (ctx, {flowDynamic, provider}) =>{  

    await sendReaction(provider, ctx, "❤️");
    await typing(provider, ctx, 2000);
   await flowDynamic([{
     body: `*${ctx.pushaName}*\n✅Somos fabricantes directos.\n✅Visite la calificación de la  pagina y  experiencia de nuestras prendas con los clientes ☺☺☺☺n✅ _*RUC: 20611689129*_  ( _*CORPORACION IVANI S.A.C.*_ )`,
     media: 'https://atubot.net.pe/chatbots/ivani-jeans/imagen-promo.jpg'
    }])

})