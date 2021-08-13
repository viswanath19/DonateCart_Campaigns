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
        const activeCampaign = campaignList.filter((item)=>new Date()<=new Date(item.endDate));
        console.log("activeCampaigns count>>>",activeCampaign.length);
        res.send(JSON.stringify(activeCampaign));
    })
    .catch(function (error) {
        console.log(error);
    });
});

export {router as activeCampaigns}