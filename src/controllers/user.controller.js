import asyncHandler from '../utils/asynchandler.js'

const userregister = asyncHandler (async (req , res )=>{
    res.status(200).json({
        message:"ok"
    })
})


export {userregister}