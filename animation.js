
gsap.from(".note",{
    backgroundColor: 'blue',
    duration:1,
    x:50,
    opacity:0,
    delay:0.5,
    rotate:15,
    stagger:0.3
})



gsap.from("#btn i",{
    rotate:1460,
    color:"blue",
    
    duration:2,
    fontSize: 50,
    position: "absolute",
    height: 30,
    yoyo:true,
    repeat:-1
})

