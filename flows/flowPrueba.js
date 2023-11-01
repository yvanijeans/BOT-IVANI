import bot from "@bot-whatsapp/bot";


export const flowPrueba = bot.addKeyword('mmhvo_mmhvo')
    .addAction(async (ctx, { flowDynamic, provider, state }) => {

        await state.update({ nombre: 'perrop' })
        await console.log(state.getMyState())
        await state.update({ dato2: 'gato' })
        await console.log(state.getMyState())
        await state.clear(ctx.from)
        await console.log(state.getMyState())

    })