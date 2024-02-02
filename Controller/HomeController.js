exports.Home=((req,res)=>{
    res.render('Home',{
        title:"Home"
    })
})

exports.About=((req,res)=>{
    res.render('About',{
        title:"About page"
    })
})

exports.Service=((req,res)=>{
    res.render('Service',{
        title:"Sit map page"
    })
})



exports.Contact=((req,res)=>{
    res.render('Contact',{
        title:"Contact page"
    })
})