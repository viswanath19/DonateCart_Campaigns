import express from 'express';
import {PORT} from './config';
import {defaultRouter,campaignList,activeCampaigns,closedCampaigns} from './routes';
import path from 'path';
const app = express();

//for handling the incoming request json to destruct and take the params
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use('/assets',express.static(path.join(__dirname, 'assets')));

//call available vendor and admin routes based on the incoming requests
app.use('/', defaultRouter);
app.use('/all', campaignList);
app.use('/active-campaign',activeCampaigns);
app.use('/closed-campaign',closedCampaigns);

app.listen(PORT,()=>{
    console.clear();
    console.log(`App is started and listening to port ${PORT}`);
});