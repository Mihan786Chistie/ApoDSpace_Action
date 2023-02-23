const express = require("express");
const {dialogflow,
    BasicCard,
    Button,
    Image,
    SimpleResponse,
    Suggestions,
    Carousel} = require("actions-on-google");
const bodyParser = require("body-parser")
const fetch = require("node-fetch");
var urls;
const { Suggestion } = require("dialogflow-fulfillment");
const app = dialogflow({debug:true});
const url = "https://api.nasa.gov/planetary/apod?api_key=<apiKey>";
const url2 = "https://api.nasa.gov/planetary/apod?api_key=<apiKey>&count=10";
const port = process.env.PORT || 3000

app.intent("Default Welcome Intent", (conv) => {
    return fetch(url)
    .then(res => res.json())
    .then(data => {
        urls = data.url
        if(urls.charAt(0)=='/'){
            urls = "http:"+urls
        }
        if(urls.charAt(0)=='h'){
            urls = urls
        }
        if(!conv.screen){
            conv.ask(new SimpleResponse({
                speech: "Today's NASA Daily: "+data.title,
                text: "Today's NASA Daily: "+data.title,
            }));
            conv.ask(new SimpleResponse({
                speech: data.explanation+"Now, do you want me to repeat or exit?",
                text: data.explanation
            }));
            return;
        }
        conv.ask(new SimpleResponse({
            speech: "Today's NASA Daily: "+data.title,
            text: "Today's NASA Daily: "+data.title,
        }));
        if(data.media_type == "image"){
        conv.ask(new BasicCard({
            text: data.explanation,
            title: data.title,
            subtitle: data.date,
            image: new Image({
                url: data.url,
                alt: data.title,
            }),
            display: 'WHITE',
        }));
        conv.ask(new SimpleResponse({
            speech: data.explanation,
        }));
    }
    if(data.media_type == "video"){
        conv.ask(new BasicCard({
            text: data.explanation,
            title: data.title,
            subtitle: data.date,
            buttons: new Button({
                title: "Check the Video",
                url: urls
            }),
            image: new Image({
                url: "https://i.pinimg.com/originals/cc/98/ee/cc98eee389f51e826aaa6c98feaf8906.gif",
                alt: data.title,
            }),
            display: 'WHITE',
        }));
        conv.ask(new SimpleResponse({
            speech: data.explanation,
        }));
    }
    conv.ask(new Suggestions(["Gallery", "I want to Leave"]));
    });
});

app.intent("gallery", (conv) => {
    return fetch(url2)
    .then(res => res.json())
    .then(data => {
        conv.ask(new SimpleResponse({
            speech:"Opening Gallery!",
            text: "Opening Gallery!",
        }));
        console.log(data[0].date),
        conv.ask(new Carousel({
            items:{
                'SELECTION_KEY_ZERO':{
                    synonyms:[
                        data[0].title,
                    ],
                    title: data[0].title,
                    description: data[0].date,
                    image: new Image({
                        url: data[0].url,
                        alt: data[0].title
                    }),
                },
                'SELECTION_KEY_ONE':{
                    synonyms:[
                        data[1].title,
                    ],
                    title: data[1].title,
                    description: data[1].date,
                    image: new Image({
                        url: data[1].url,
                        alt: data[1].title
                    }),
                },
                'SELECTION_KEY_TWO':{
                    synonyms:[
                        data[2].title,
                    ],
                    title: data[2].title,
                    description: data[2].date,
                    image: new Image({
                        url: data[2].url,
                        alt: data[2].title
                    }),
                },
                'SELECTION_KEY_THREE':{
                    synonyms:[
                        data[3].title,
                    ],
                    title: data[3].title,
                    description: data[3].date,
                    image: new Image({
                        url: data[3].url,
                        alt: data[3].title
                    }),
                },
                'SELECTION_KEY_FOUR':{
                    synonyms:[
                        data[4].title,
                    ],
                    title: data[4].title,
                    description: data[4].date,
                    image: new Image({
                        url: data[4].url,
                        alt: data[4].title
                    }),
                },
                'SELECTION_KEY_FIVE':{
                    synonyms:[
                        data[5].title,
                    ],
                    title: data[5].title,
                    description: data[5].date,
                    image: new Image({
                        url: data[5].url,
                        alt: data[5].title
                    }),
                },
                'SELECTION_KEY_SIX':{
                    synonyms:[
                        data[6].title,
                    ],
                    title: data[6].title,
                    description: data[6].date,
                    image: new Image({
                        url: data[6].url,
                        alt: data[6].title
                    }),
                },
                'SELECTION_KEY_SEVEN':{
                    synonyms:[
                        data[7].title,
                    ],
                    title: data[7].title,
                    description: data[7].date,
                    image: new Image({
                        url: data[7].url,
                        alt: data[7].title
                    }),
                },
            },
        }));
        conv.ask(new Suggestions([data[0].date,data[1].date,data[2].date,data[3].date,data[4].date,data[5].date,data[6].date,data[7].date]));
    });
});

app.intent("gallery - custom", (conv) =>{
    return fetch("https://api.nasa.gov/planetary/apod?api_key=<apiKey>&date="+conv.parameters.date)
    .then(res => res.json())
    .then(data => {
        urls = data.url
        if(urls.charAt(0)=='/'){
            urls = "http:"+urls
        }
        if(urls.charAt(0)=='h'){
            urls = urls
        }
        conv.ask(new SimpleResponse({
            speech: data.title,
            text: data.title,
        }));
        if(data.media_type == "image"){
        conv.ask(new BasicCard({
            text: data.explanation,
            title: data.title,
            subtitle: data.date,
            image: new Image({
                url: data.url,
                alt: data.title,
            }),
            display: 'WHITE',
        }));
        conv.ask(new SimpleResponse({
            speech: data.explanation
        }));
    }
    if(data.media_type == "video"){
        conv.ask(new BasicCard({
            text: data.explanation,
            title: data.title,
            subtitle: data.date,
            buttons: new Button({
                title: "Check the Video",
                url: urls
            }),
            image: new Image({
                url: "https://i.pinimg.com/originals/cc/98/ee/cc98eee389f51e826aaa6c98feaf8906.gif",
                alt: data.title,
            }),
            display: 'WHITE',
        }));
        conv.ask(new SimpleResponse({
            speech: data.explanation
        }));
    }
    conv.ask(new Suggestions(["Gallery", "I want to Leave", "Today's NASA Daily"]));
    });
});

const expressApp = express().use(bodyParser.json());
expressApp.post('/webhook', app);

expressApp.listen(port);