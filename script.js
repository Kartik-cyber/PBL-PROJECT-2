var tl = gsap.timeline()

tl.from('#page1nav1 h4',{
    y:-80,
    duration:0.3,
    delay:0.2,
    opacity: 0,
    stagger: 0.3,
})

tl.from('#page1nav2 h1',{
    // y:-80,
    duration:0.4,
    delay:0.3,
    opacity: 0,
    stagger: 0.2,
    
})
tl.from('#page1nav2 img',{
    // y:-80,
    duration:0.5,
    delay:0.4,
    opacity: 1,
    rotate:360,
    // repeat:-1,
    repeatDelay: 0,    
    ease: 'none',
    
})

tl.from('#page1nav3 h4 ',{
    y:-40,
    duration:0.2,
    opacity: 0,
    stagger: 0.3,
})
tl.from('#page1nav3 button ',{
    y:-40,
    duration:0.2,
    opacity: 0,
    stagger: 0.3,
})
tl.from('.Dearborn h4',{
    x:80,
    duration:0.3,
    delay:0.2,
    opacity: 0,
    stagger: 0.3,
},'same')
tl.from('#shose',{
    x:-80,
    opacity: 0,
    stagger: 0.3,
},'big')


tl.from('#crafting',{
    x:80,
    duration:0.3,
    delay:0.2,
    opacity: 0,
    stagger: 0.3,
},'same')

tl.from('#cosmatix',{
    x:-80,
    opacity: 0,
    stagger: 0.3,
},'big')

tl.from('#Brand',{
    y:-80,
    duration:0.3,
    delay:0.2,
    opacity: 0,
    stagger: 0.3,
},'same')

tl.from('#Brand img',{
    
    duration:0.5,
    delay:0.4,
    opacity: 0,
    rotate:360,
    repeat: 1,      
    
})
tl.from('#profile img',{
    duration:0.5,
    delay:0.4,
    opacity: 0,
    rotate:360,
    repeat: 0,      
},'same')
tl.from('#profile p',{
    duration:0.5,
    delay:0.4,
    opacity: 0,
    // rotate:360,
    repeat: 0,      
},'same')

tl.from('#scroll h4',{
    duration:0.5,
    delay:0.4,
    opacity: 0,
    rotate:360,
    repeat: 0,      
},'same')


tl.from('.page2cardbox i',{
    // y:-80,
    duration:0.5,
    delay:0.4,
    opacity: 1,
    rotate:360,
    repeat: 15, 
    ease:'none',
    repeatDelay:0,     
})


// tl.from('#wecreatelogo img',{
//     // y:-80,
//     duration:0.5,
//     delay:0.4,
//     opacity: 1,
//     rotate:360,
//     repeat:-1,
//     repeatDelay: 0,    
//     ease: 'none',
// })

// tl.from('#page5-text img',{
//     // y:-80,
//     duration:0.5,
//     delay:0.4,
//     opacity: 1,
//     rotate:360,
//     repeat:-1,
//     repeatDelay: 0,    
//     ease: 'none',
// })