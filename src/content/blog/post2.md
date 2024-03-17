---
title: "Human Robot Interaction"
description: "Lecture notes the history, key concepts and personal thoughts about human-robot interaction from a robotic perspective."
pubDate: "Sep 11 2022"
tags: ["robotics", "HRI"]
---

<p align="justify"> 
The term <em>Robot</em> (adapted from Czech <em>Roboti</em>) was first used in 1920 during the fictional play R.U.R (Rossum's Universal Robots). However, proto-robots have existed since ancient times. From Atlas, the iron giant of Greek mythology, to the earliest service robots, these machines were originally created to replace physical tasks. 
In modern times, humans have not only adopted technology to reduce physical labor but also to enhance and satisfy our social needs. Increasing, in consequence, the development of so-called social robotics.
</p>

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Capek_play.jpg/375px-Capek_play.jpg">
Actual <em>Robotis</em> during a R.U.R play.
</p>

<p align="justify"> 
<b>Human-robot interaction (HRI) refers to an interdisciplinary study of interactions between humans and robots. </b> However, now that the obvious has been clarified (supposedly), what exactly is an interaction? What kinds of robots are considered, and which ones are not? And even further, why do research in this area?.
</p>

<a id="item-one"></a>
### About whom we are talking

<p align="justify"> 
It was a matter of time before large robotic systems faced their biggest challenge; dealing with human behavior. Today robots are not only present in large industrial processes but also in various cafes, airports, shopping malls and school campuses around the world. These kinds of robots take a step away from heavy industrial arms or traditional assembly lines because they are not used to working in controlled environments and require perceiving human behavior.

There are many models of robots, but what makes them relevant in HRI is not their locomotion nor the environment in which they move, but their ability to detect, analyze and respond to the people around them. Using these abilities, robots can emulate behaviors involved in human society, these robots have been called social robots.
</p>

> -- Social robots need the ability recognize, understand, and predict human behavior in terms of the underlying mental states such as beliefs, intents, desires, feelings, etc.
> -- <cite>B. Sicilliano</cite>.

<p align="center">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nao_Robot_%28Robocup_2016%29.jpg/270px-Nao_Robot_%28Robocup_2016%29.jpg" height="280">
NAO, a social robot.
</p>

<p align="justify"> 
Social robots have certain characteristics in common; a humanoid body, cameras for human detection, a size no larger than a person, etc. However, there also exists a category called service robots. Although they can be confused and even used as a synonym with social robots, these do not stand out for their aesthetics but for being designed exclusively to fulfill their service tasks. Both have been used in the study of human-robot interaction; but service robots usually sacrifice humanoid aesthetics in favor of optimizing their functionalities to fulfill the purpose for which they were designed.
</p>

<p align="center">
<img src="https://cdn.sanity.io/images/7p2whiua/production/4d87abeb9717993e461845fbe556916b6f064e14-1200x1000.jpg" height="280">
PR2, a service robot.
</p>

<p align="justify"> 
What is learned in HRI can (and must) be extended to other areas. In autonomous vehicles, for example, path planning in pedestrian-free spaces is no longer a significant challenge and the focus has shifted to problems involving the human factor. Autonomous vehicles are not typically classified as robots as many other vehicles based on Ackerman geometry. In any case, when talking about human-robot interaction, we are referring to service or social robots that can move in a crowded environment without disturbing the social dynamics and with the potential to emulate their behavior.
</p>

### About how we are interacting

<p align="justify"> 
The study of robotics involves many areas (e.g. mathematics, physics, mechatronics, etc), you can open any robotics book and read about classical mechanics, geometry and control theory, topics that cut across these areas. In contrast, there is not the same amount of information about HRI. This happens because many concepts used are not properly defined or there is not a consensus about them. Even if areas like psychology or phlosfy 


In traditional motion planning, neither feedback nor dynamics are considered.   Most path-planning algorithms that work well for navigating around obstacles will result in socially inappropriate behavior when tried around people. How a robot should maintain appropriate interpersonal distance, follow or approach a person?
</p>

References.

- Breazeal, C., Dautenhahn, K., & Kanda, T. (2016). Social robotics. Springer handbook of robotics, 1935-1972.
- Leichtmann, B., & Nitsch, V. (2020). How much distance do humans keep toward robots? Literature review, meta-analysis, and theoretical considerations on personal space in human-robot interaction. Journal of environmental Psychology, 68, 101386.
- Kruse, T., Pandey, A. K., Alami, R., & Kirsch, A. (2013). Human-aware robot navigation: A survey. Robotics and Autonomous Systems, 61(12), 1726-1743.
- Wikipedia contributors. (2023, November 6). R.U.R.. In Wikipedia, The Free Encyclopedia.