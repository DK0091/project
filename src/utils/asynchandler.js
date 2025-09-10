

const asyncHandler=(requesthandler) => {
    return (req,res,next)=>{
        Promise.resolve(requesthandler(req,res,next)).catch((err)=>next(err))
        
    }
}
export default asyncHandler;

// const asyncHandler = (fn)=> async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(err){
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }


// const asyncHandler=(fn)=> async (req,res,next)=>{
//     try {
//         await fn(req,res,next)
        
//     } catch (error) {
//         res.status(error.code||500).json({
//             success:false,
//             mess:error.mess
//         })
//     }
// }