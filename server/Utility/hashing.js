const bcrypt = require('bcrypt');

const hashing = async(pass)=>{
    console.log(pass);
    try{
        const hashVal = await bcrypt.hash(pass, 10 );
        return hashVal;
        console.log(hashVal);
        
    }
    catch(err){
        console.log(err);
        
    }
}

module.exports = {
    hashing,
}