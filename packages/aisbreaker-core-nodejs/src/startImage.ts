#!/usr/bin/node

import { api, services } from 'aisbreaker-api-js'

import { services as coreServices } from './index.js' /* 'aisbreaker-core-nodejs' */


//
// simple test to see if the API is working:  generate an image
//

// define prompt(s)
const prompt = "Give me a cute teddy bear sitting in the forest."

// select and initialize API
const serviceId: 'TrivialAssistant' | 'OpenAIImage' | 'StabilityAIText2Image' | string = 'TrivialAssistant'
let apiProps: api.AIsProps
switch (serviceId) {
    case 'TrivialAssistant':
        apiProps = new services.TrivialAssistant({extraMsg: 'start-trivial'})
        break
    case 'OpenAIImage':
        apiProps = new coreServices.OpenAIImage({
            //openaiApiKey: "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        })
        break
    case 'StabilityAIText2Image':
        apiProps = new coreServices.StabilityAIText2Image({
            //stabilityApiKey: "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        })
        break
    default:
        throw new Error(`Unknown serviceId: ${serviceId}`)
}
const aiService: api.AIsService = api.AIsBreaker.getInstance().createAIsService(apiProps)

// helper
function veryLongStringReplacer(key: any, value: any) {
    // Filtering out properties
    if (typeof value === "string") {
        if (value.length > 512) {
            return value.substring(0, 100) + ` ... (truncated from len=${value.length})`
        } else {
            return value
        }
    }
    return value;
}

// use the function with "async/await"
async function actionWithAsync() {
    console.log("")
    console.log("================================= started")

    let requestMedia = {}
    if (serviceId === 'StabilityAIText2Image') {
        requestMedia = {
            image: {
                width: 512,
                height: 512,
            },
        }
    }

    console.log("----- Request")
    const response1 = await aiService.sendMessage({
        inputs: [ {
            text: {
                role: 'user',
                content: prompt,
            },
        } ],
        requestMedia: requestMedia,
        requestOptions: {
            numberOfAlternativeResponses: 2,
        }
    })
    console.log("-- Response:")
    console.log(JSON.stringify(response1, veryLongStringReplacer, 2))
}
actionWithAsync()
