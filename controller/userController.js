let userEmail = "ziya12@gmail.com"
let userpassword = 1234

const login = async(req,res)=>{

  try {
     
      let v = req.session.isLogin
        if(v){
         res.render('home')
        }else{
         res.render('login')
        }


        

    
        
       
    } catch (error) {
     console.log(error.message);
  } 
    

}

const home = async(req,res)=>{
  

  
     if(userEmail == req.body.email && userpassword ==req.body.password ){
          req.session.isLogin=true
        res.render('home')
     }else{
        
        req.session.isLogin=false  
        res.redirect('/')
     }

    

}

const logout = async(req,res)=>{
    req.session.isLogin=false
      
     res.redirect('/')

    }



module.exports={

    login,
    home,
    logout
}