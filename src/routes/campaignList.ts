import express,{Request,Response,NextFunction} from 'express';
const router = express();
const axios = require('axios');
router.get('/',(req:Request,res:Response,next:NextFunction)=>{
    axios({
        method:'get',
        url:"https://testapi.donatekart.com/api/campaign",
    })
    .then(function (response) {
        console.log("allCampaigns count >>>>",response.data.length);
        res.send(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
});

export {router as campaignList}