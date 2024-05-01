var timeline1=gsap.timeline();
timeline1.from(".header2",{
     
     y:-50,
     duration: 1,
     opacity:0,
     

})
timeline1.from("header",{
      y:-50,
      opacity:0,
      duration:1,
 })
 timeline1.from(".logoimg",{
      y:-10,
      opacity:0,
      duration:0.5,
 })
 timeline1.from(".sagecontent h1",{
      y:-0,
      fontSize:50,
      opacity:0,
      duration:2,
 
 })
 timeline1.from(".sagecontent p",{
      x:-150,
      duration:1,
      opacity:0,
 
 })
 timeline1.from(".infochat",{
      y:-150,
      duration:1,
      opacity:0,
 
 })

 gsap.to(".header",{
     duration:5,
     position:'sticky',
     top:0,
     backgroundColor:'white',
     color:'black',
     scrollTrigger: {
          trigger: '.promo',
          scroller:"body",
          start: 'bottom 50%',
          end:'top 40',
          scrub: true,
          // markers:true
        }

})
 gsap.to(".header ul li >a",{
     duration:5,
     position:'sticky',
     top:0,
     color:'black',
     scrollTrigger: {
          trigger: '.promo',
          scroller:"body",
          start: 'bottom 60%',
          scrub: true,
          // markers:true
        }

})

gsap.from(".why", {
     y: 100,
     opacity: 0,
     duration: 2,
     scrollTrigger: {
       trigger: ".sageabout",
       scroller: "body",
       start: "top 90%",
       end: "top 80%",
       scrub: 1,
     //   markers:true
     },
   });