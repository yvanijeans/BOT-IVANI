import bot from "@bot-whatsapp/bot";
import { typing, delay, sendReaction } from '../utils/utils.js';
const regexEnvio = `/^e1$/i`;

export const flowEnvio = bot .addKeyword(regexEnvio, {regex: true})
.addAction(async (ctx, {flowDynamic, provider}) =>{  

  await sendReaction(provider, ctx, "❤️");
  await typing(provider, ctx, 2000);
  await flowDynamic([{
    body: `*${ctx.pushName}*\n_Nuestro proceso de envíos.: por la tarde estamos enviando los pedidos y en la noche alas 9am. estamos mandando las boletas. Por favor  Los envíos son diarios_ "GRACIAS POR CONFIAR EN IVANI"\n`,
    media: 'https://atubot.net.pe/chatbots/ivani-jeans/video-milena-zarate.mp4'
   }])

})