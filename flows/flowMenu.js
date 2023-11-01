import bot from "@bot-whatsapp/bot";
import { agregarTelefono } from '../utils/telefonos.js';
import { typing, delay, sendReaction } from '../utils/utils.js';
const regexMenu = `/^men[uú]$/i`;

export const flowMenu = bot .addKeyword(regexMenu, {regex: true})
.addAction(async (ctx, {flowDynamic, provider}) =>{  

    const Menu = /^men[uú]$/i;
    const id2 = ctx.from

    if (Menu.test(ctx.body)) {
      await sendReaction(provider, ctx, "❤️");
      agregarTelefono(id2);
      await typing(provider, ctx, 2000);
      await flowDynamic([
        `*${ctx.pushName}*\nPuedes hacernos estas consultas:\n\n\n├1️⃣ _*CATÁLOGO CON PRECIOS*_\n├2️⃣ _*CATÁLOGO EN PDF*_\n├3️⃣ _*DIRECCIÓN DE NUESTRAS TIENDAS*_\n├4️⃣ _*INFORMACIÓN DE NUESTROS ENVÍOS*_\n├5️⃣ _*EJEMPLOS PARA REALIZAR UN PEDIDO*_\n├6️⃣ _*PARA ABSOLVER TUS DUDAS O PREGUNTAS*_\n├7️⃣ _*COMUNICATE CON UN ASESOR*_`,
       '◼ _Escribe el número que deseas consultar._\n◼ _Si tu consulta no está en el menú, escríbela directamente._\n◼ _Siempre que quieras ver estas opciones, escribe menú._'
    ])
    }

})
.addAction({ capture: true }, async (ctx, { flowDynamic, fallBack, gotoFlow, provider }) => {

    const id = ctx.key.remoteJid;

    switch (ctx.body) {
        case '1':
          await sendReaction(provider, ctx, "❤️");
          await typing(provider, ctx, 2000);
          await provider.vendor.sendMessage(id, {
            text: '',
            contextInfo: {
              externalAdReply: {
                title: 'Catalogo Ivani Jeans',
                body: 'Somos Fabricantes Directos',
                mediaType: 'VIDEO', //VIDEO - IMAGE - NONE
                showAdAttribution: false, //Mensaje a partir de un anuncio
                //renderLargerThumbnail: true, 
                mediaUrl: 'https://wa.me/c/51923139054',
                thumbnailUrl: 'https://atubot.net.pe/chatbots/ivani-jeans/logo-ivani.jpg', //url imagen
                sourceUrl: 'https://wa.me/c/51923139054',
              },
            },
          }); 
           await typing(provider, ctx, 2000);
           await flowDynamic([{
            body: `*${ctx.pushName}*\n✅RECUERDA QUÉ NUESTRO PRECIOS SE ENCUENTRAN EN "PEN" O "S/"\n✅SON PRECIOS POR MAYOR\n✅NO VENDEMOS UNIDADES\n✅PEDIDO MÍNIMO 6 PRENDAS A MAS\n✅EN TIENDA PUEDES LLEVAR DESDE 3 und🤗`,
            media: 'https://atubot.net.pe/chatbots/ivani-jeans/2.jpeg'
           }])
           await typing(provider, ctx, 2000);
           await flowDynamic([{
            body: '✅" _*OLVIDATE DE LOS INTERMEDIARIOS ‼️‼️*_\n✅ _*OLVIDATE DE LAS ESTAFAS ‼️‼️‼️*_\n✅ _*SOMOS FABRICA DIRECTA*_ 🤝🚚\n✅ _*ATENDEMOS VIDEOLLADAS DESDE LAS 10 AM TODOS LOS DÍAS*_ 📛📛📛\n_*RUC: 20611689129*_  ( _*CORPORACION IVANI S.A.C.*_ )',
            media: 'https://atubot.net.pe/chatbots/ivani-jeans/4.mp4'
           }])
           fallBack()
          break;
        case '2':
          await sendReaction(provider, ctx, "❤️");
          await typing(provider, ctx, 2000);
          await flowDynamic([{
           body: `*${ctx.pushName}*\n❤️👑 _*ADJUNTAMOS CATÁLOGO EN PDF. LIMPIO SIN LOGOS NI MARCA PARA QUE ENVÍES A TUS CLIENTES DE FORMA DIRECTA*_ 👑❤️?\n\n📝 _*RECUERDA QUE EL PEDIDO MÍNIMO ES DE 6 PRENDAS A MAS.*_\n\n✅ _*SOLO VENDEMOS POR MAYOR*_\n📛  OJO 📛\n✅EN EL CATÁLOGO PDF. TRABAJAMOS CON CÓDIGOS PARA QUE SOLO UDS SEPAN EL PRECIO DE CADA MODELO.\n✅EJEMPLO " CODIGO-66  SIGNIFICA QUE SI LO DIVIDES ENTRE 2 ES IGUAL A S/33 SOLES . QUE SERIAN NUESTROS PRECIOS POR MAYOR❤️❤️❤️`,
           media: 'https://atubot.net.pe/chatbots/ivani-jeans/imagen1.jpg'
          }])
          typing(provider, ctx, 3000);
          const filePath = 'https://atubot.net.pe/chatbots/ivani-jeans/Catálogo-Verano-2024.pdf'
          await provider.sendFile(id, filePath);
          fallBack()
          break;
        case '3':
          await sendReaction(provider, ctx, "❤️");
          await typing(provider, ctx, 2000);
          await provider.sendLocation( id, "-12.0615018", "-77.0156008")
          typing(provider, ctx, 3000);
          await flowDynamic([{
            body: `*${ctx.pushName}*\n✅ _*Ubicanos en galería guisado de av 28 de julio con HUANUCO 2496.❤️PRIMER PISO👉 NUMERO #108*_ 💎💎💎`,
            media: 'https://atubot.net.pe/chatbots/ivani-jeans/tienda2.mp4'
           }])
           typing(provider, ctx, 3000);
           await flowDynamic([{
             body: '✅ _*UBICANOS EN GALERÍA GUISADO DE 28 JULIO CON HUÁNUCO 2496.*_ ❤️\n\n👉Segundo piso #numero 230-A 👑',
             media: 'https://atubot.net.pe/chatbots/ivani-jeans/tienda1.mp4'
            }])
           fallBack()

        break;
        case '4':
          await sendReaction(provider, ctx, "❤️");
          await typing(provider, ctx, 2000);
          await flowDynamic([`*${ctx.pushName}*\n✅ _*RUC: 20611689129*_   ( _*CORPORACION IVANI S.A.C.*_ )\n✅ _*HACEMOS ENVÍOS DIARIOS A CUALQUIER DESTINO  DEL PERÚ Y EXTERIOR*_ 🛵🛵🛵\n✅ _*NUESTRAS PRENDAS SON TALLAS COMPLETAS, SEA EN*_ :\n   📝RIGIDO: QUE NO ESTIRA\n📝STRECH : QUE SON SUPERSTRECH Y               FORMADORES LEVANTACOLA❤️❤️❤️\n✅ PUEDES SEPARAR TU PEDIDO DESDE 50 A 100 SOLES, DEPENDIENDO LA CANTIDAD A SEPARAR 🤗\n✅ _*SI TIENES DUDAS SI LA EMPRESA ES COMFIABLE*_ :\n_TE INVITAMOS A HACERNOS VIDEOLLAMADA PARA LA SEGURIDAD EN TU COMPRA  ATENDEMOS TODOS LOS DÍAS DESDE LAS 10 AM_ 📳📳📳. \n_*TBM PUEDES VISITAR NUESTRA PAGINA EN SECCION CALIFICACION Y VER LA EXPERIENCIA CON NUESTRA MARCA DE ALGUNOS DE NUESTROS CLIENTES*_`
           ])
           typing(provider, ctx, 3000);
           await provider.sendMedia(id, 'https://atubot.net.pe/chatbots/ivani-jeans/edit1.mp4')
           fallBack()
        break;
        case '5':
          await sendReaction(provider, ctx, "❤️");
          await typing(provider, ctx, 2000);
          await flowDynamic([{
            body: `*${ctx.pushName}*\n 📝 _*PRIMER EJEMPLO:*_\n📝_AL FINAL DE CADA CATÁLOGO PONEMOS UNA FOTO CON TODOS LOS COLORES DEL MODELO. SOLO TOMA CAPTURA DE PANTALLA Y COLOCA LA TALLA EN EL COLOR QUE DESEE COMO SE MUESTRA EN LA IMAGEN_  🤗🤗🤗`,
            media: 'https://atubot.net.pe/chatbots/ivani-jeans/5.1.jpeg'
           }])
           await typing(provider, ctx, 2000);
           await flowDynamic([{
            body: '📝 _*SEGUNDO EJEMPLO:*_\n✅ COPIAR EL NOMBRE DEL MODELO Y ADJUNTARLO ASÍ:\n\nJeans strech colorines\nTalla 28:azul(4)\n         Plomo(2)\nTalla 32: hielo(5)\n           Celeste (1)\nshort strech clásico\n  Talla 34: azul (3)\n  Talla 28 hielo (7)\n\n_Y también puedes usar una hoja en blanco Pára que sea más fácil._ 📝🤗🚚 ',
            media: 'https://atubot.net.pe/chatbots/ivani-jeans/5.2.jpeg'
           }])
           fallBack()
        break;
        case '6':
          await sendReaction(provider, ctx, "❤️");
          await typing(provider, ctx, 2000);
          await flowDynamic(`❤️❤️❤️ _*HOLA *${ctx.pushName}* ABSOLVEREMOS SUS DUDAS*_ 🤗👑\n\n✅   CONTAMOS CON _*RUC: 20611689129*_ ( _*CORPORACION IVANI S.A.C.*_ )\n✅ _*CONTAMOS CON TIENDAS FÍSICAS MAYORISTAS*_\n✅ _*LOS PRECIOS SON SOLO POR MAYOR,PEDIDO MÍNIMO 6 PRENDAS 💅📛 OJO 📛EN NUESTRAS TIENDAS  SI PUEDES LLEVAR DESDE 3 PRENDAS A MAS*_ \n✅ _*PUEDES SURTIR LAS PRENDAS A SU GUSTO, CUALQUIER MODELO DE SU PREFERENCIA*_ 🎀\n✅ _*HACEMOS ENVÍOS DIARIOS A CUALQUIER DESTINO  DEL PERÚ Y EXTERIOR*_ 🛵🛵🛵\n_*NUESTRAS PRENDAS SON TALLAS COMPLETAS, SEA EN*_ :\n   📝RIGIDO: QUE NO ESTIRA\n   📝STRECH : QUE SON SUPERSTRECH Y FORMADORES LEVANTACOLA❤️❤️❤️\n✅ _*PUEDES SEPARAR TU PEDIDO DESDE 50 A 100 SOLES, DEPENDIENDO LA CANTIDAD A SEPAR*_ 🤗\n✅ _*SI TIENES DUDAS SI LA EMPRESA ES COMFIABLE :*_\nTE INVITAMOS A HACERNOS VIDEOLLAMADA PARA LA SEGURIDAD EN TU COMPRA  ATENDEMOS TODOS LOS DÍAS DESDE LAS 10 AM 📳📳📳.\n✅ _*TBM PUEDES VISITAR NUESTRA PAGINA EN SECCION CALIFICACION Y VER LA EXPERIENCIA CON NUESTRA MARCA DE ALGUNOS DE NUESTROS CLIENTES*_\n✅TENEMOS TODO EL CATÁLOGO EN STOCK, SI EN CASO NOS FALTA AUN COLOR O TALLA DE SU PEDIDO SE LO HACEMOS SABER AL MOMENTO DE MANDAR SU PEDIDO 🚚🚚🚚\n\n📛📛📛 _SI AUN NO HEMOS ABUSUELTO TODAS TUS DUDAS, TE INVITAMOS A ESCRIBIR EL NUMERO 7 PARA DERIVARTE CON UN ASESOR DE SERVICO_ 🧏🏼‍♀‍🙋🏼‍♀‍ _ESTAMOS DISPONIBLES LAS 24 HORAS DEL DÍA_ 🤗`)
           fallBack()
        break;
        case '7':
          await sendReaction(provider, ctx, "❤️");
          await typing(provider, ctx, 2000);
          await flowDynamic(`*${ctx.pushName}*\nEstamos en proceso de contactar a un asesor y se comunicará contigo en breve. 📞✨😊`)
          const grupo = '120363150726677080@g.us'
          await provider.sendText(grupo, `*¡SOLICITUD DE ASESORÍA!* 🆘\n\nHemos recibido una solicitud de asesoramiento de 🙋‍♂️ ${ctx.pushName}. Por favor, ¡comuníquese con el cliente lo antes posible! Puede hacerlo a través del siguiente enlace de WhatsApp:\n📲 wa.me/${ctx.from}`)
           fallBack()
        break;
        
        default:
              fallBack()
          break;
        }
        
      
  })