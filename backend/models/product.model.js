import mongoose from mongoose;

 const productScheme=new mongoose.Scheme({
    description:{
        required:true,
        type:String
    },
    name:{
        required:true,
        type:String

    },
    productImage:{
        type:String,

    },
    price:{
        type:Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Scheme.Types.ObjectId,
        ref:"Category",
        required:true
    },
    owner:{
        type:mongoose.Scheme.Types.ObjectId,
        ref:"User"
    }
 },{timeStamps:true})

 export const Product= mongoose.model("Product",productScheme)