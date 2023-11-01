import bot from "@bot-whatsapp/bot";
import QRPortalWeb from "@bot-whatsapp/portal";
import BaileysProvider from "@bot-whatsapp/provider/baileys";
import JsonFileAdapter from "@bot-whatsapp/database/json";
import linkPreview from 'link-preview-js';

import { flowWelcome } from "./flows/flowWelcome.js";
import { flowMenu } from "./flows/flowMenu.js";
import { flowGrupo } from "./flows/flowGrupo.js";
import { flowEnvio } from "./flows/flowEnvio.js";
import { flowCuentas } from "./flows/flowCuentas.js";
import { flowCalidad } from "./flows/flowCalidad.js";
import { flowPromo } from "./flows/flowPromo.js";
import { flowPrueba } from "./flows/flowPrueba.js";



const main = async () => {
    const adapterDB = new JsonFileAdapter()
    const adapterFlow = bot.createFlow([
        flowWelcome,
        flowMenu,
        flowGrupo,
        flowEnvio,
        flowCuentas,
        flowCalidad,
        flowPromo,
        flowPrueba

    ])
    const adapterProvider = bot.createProvider(BaileysProvider)

    bot.createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
