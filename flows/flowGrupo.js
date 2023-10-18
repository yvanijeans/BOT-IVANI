import bot from "@bot-whatsapp/bot";
import { typing, delay, sendReaction } from '../utils/utils.js';

export const flowGrupo = bot .addKeyword('grupo1')
.addAction(async (ctx, {flowDynamic, provider}) =>{  

    await sendReaction(provider, ctx, "❤️");
    await typing(provider, ctx, 2000);
   await flowDynamic('https://chat.whatsapp.com/Kl4QtAJ8fe32BbG1httJkG *GRUPO DE CLIENTES Y PROSPECTOS. Únase* ☺❤💎🔱')

})