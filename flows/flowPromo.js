import bot from "@bot-whatsapp/bot";
import { typing, delay, sendReaction } from '../utils/utils.js';
const regexPromo = `/^promo1$/i`;

export const flowPromo = bot .addKeyword(regexPromo, {regex: true})
.addAction(async (ctx, {flowDynamic, provider}) =>{  

    await sendReaction(provider, ctx, "❤️");
    await typing(provider, ctx, 2000);
    await flowDynamic([{
      body: `*${ctx.pushName}*\nPromoción. 🎊🎊🎊\n❤Las caseras(os) que dején su experiencia con nuestras prendas. (calidad y envío)\n📛Estamos  obsequiado 5!!!! correas❤ de regalo para su próximo pedido💎💎\n😊😊😊No te quedes sin la tuya\nhttps://www.facebook.com/ivanijeans?mibextid=ZbWKwL\n  ‼Ojo‼\n💥Una ves hecho nos manda captura para agendarla 🤗🤗🤗`,
      media: 'https://atubot.net.pe/chatbots/ivani-jeans/imagen-promo.jpg'
     }])

})