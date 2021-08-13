import express,{Request,Response,NextFunction} from 'express';
const router = express();
const axios = require('axios');
router.get('/',(req:Request,res:Response,next:NextFunction)=>{
    axios({
        method:'get',
        url:"https://testapi.donatekart.com/api/campaign",
    })
    .then(function (response) {
        const campaignList = response.data;
        const closedCampaign = campaignList.filter((item)=>new Date()>new Date(item.endDate));
        console.log("closedCampaigns count>>>",closedCampaign.length);
        res.send(JSON.stringify(closedCampaign));
    })
    .catch(function (error) {
        console.log(error);
    });
});

export {router as closedCampaigns}