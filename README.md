# Covid-19 Real-time Data

This is an SPA that obtains real-time data of Covid-19 worldwide. Since this is not an access to an official public health organization database (e.g. WHO or Stat Canada) so it may not reflect a very accurate data. The data from some countries on some date are missing so it is not including daily report.

Also, because YouTube has removed the config option `showInfo`, at the beginning of the video you will see the video information which is so far unresolvable. An alternative is downloading the video and add it to the local source.

<hr>

Since this APP involves an encrypted API that fetches Covid-19 data and in `create-react-app` [you cannot hide the API key genuinly](https://create-react-app.dev/docs/adding-custom-environment-variables/) so you have to apply for one to see the data, following this guide:

1. Apply for a free API key on [RapidAPI](https://rapidapi.com/Gramzivi/api/covid-19-data/pricing)
2. In the root directory find the file `.env`
3. In `.env` input Your API key and save
4. The `.env` file should be like `REACT_APP_KEY="sfgfassgsasgdaf"`
5. Remember to restart the project once you modify `.env`

You can however still take a look at the design without the API key.

<hr>

This project is ongoing...

So far the main structure for PC is done. Later on I will mainly work on responsive design and cross-browser adaptation. May add new functions.


