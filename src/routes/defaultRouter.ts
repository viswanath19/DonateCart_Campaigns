import express,{Request,Response,NextFunction} from 'express';


const router = express();

router.get('/',(req:Request,res:Response,next:NextFunction)=>{
    return res.json({msg:"Hello Initial Route DonateCart Campaings"});
});

export {router as defaultRouter}