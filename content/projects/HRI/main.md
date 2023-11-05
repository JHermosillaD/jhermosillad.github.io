+++
author = 'Jesus Hermosilla'
title = 'Human Robot Interaction'
date = 2023-10-17T18:30:21-06:00
draft = true
+++

<div style="text-align: justify">
The term "robotics" was first coined in 1920, as a result of a a work of fictional play. However, proto-robots have existed since ancient times. From Atlas, the iron giant of Greek mythology, to the earliest robots designed for labor, these machines were created to replace physical tasks.

In modern times, humans have not only adopted technology to alleviate physical labor but also to enhance and meet our intricate social needs. This has led to a surge in the development of so-called social robots.
</div>

> Social robots need the ability recognize, understand, and predict human behavior in terms of the underlying mental states such as beliefs, intents, desires, feelings, etc.
> -- <cite>B. Sicilliano</cite>.

In traditional motion planning, neither feedback nor dynamics is considered. A solution path is considered open loop, which means there is no feedback of information during execution to close the loop.

Research questions guidelines:

- Why (research motivation and application)?
- Who (social units of interaction)?
- What (mode of interaction)?
- Where (location of study)?
- When (temporal context)?

How a robot should maintain appropriate interpersonal distance, follow or approach a person?

> Modelar la interacción de un robot de servicio con humanos puede contribuir al desa rrollo de un comportamiento cortés en espacios públicos?

HRI is multidisciplinary field by nature.

> ... most path-planning algorithms that work well for navigating around obstacles will result in socially inappropriate behavior when tried around people.
> -- <cite>HRI</cite>.

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://d3js.org/d3.v6.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/markmap-view@0.2.0"></script>
</head>

<style>
.mindmap {
  display: block;
}  
</style>

<body>
<svg id="mindmap-test" class="mindmap" width="700" height="250"></svg>
</body>

<script>
((e, lang_json, other_json)=>{
  const{Markmap:r}=e();
  window.mm=r.create("svg#mindmap-test",null,lang_json)
})(()=>window.markmap,
  {"t":"root","d":0,"v":"Interaction types", "c":[
      {"t":"heading","d":1,"v":"Verbal and nonverbal", "c":[
          {"t":"heading","d":2,"v":"Springer, 2013, International Journal of Social Robotics, 10.1007/s12369-013-0199-6"},
          {"t":"heading","d":2,"v":"Elsevier, 2019, Pattern Recognition Letters, 10.1016/j.patrec.2018.03.006"},
          {"t":"heading","d":2,"v":"Elsevier, 2021, Computer Speech & Language, 10.1016/j.csl.2020.101178"},
          {"t":"heading","d":2,"v":"ACM, 2023, ACM Transactions on Human-Robot Interaction, 10.1145/3583743"}
      ]},
      {"t":"heading","d":1,"v":"Emotion", "c":[   
          {"t":"heading","d":2,"v":"MDPI, 2017, Multimodal Technologies and Interaction, 10.3390/mti1030014"},
          {"t":"heading","d":2,"v":"MDPI, 2017, Multimodal Technologies and Interaction, 10.3390/mti1030014"},
          {"t":"heading","d":2,"v":"IASJ, 2020, Iraqi Journal for Electrical and Electronic Engineering, 10.37917/ijeee.16.2.10"},
          {"t":"heading","d":2,"v":"Hrčak, 2020, Journal of computing and information technology, 10.20532/cit.2020.1004841"},
          {"t":"heading","d":2,"v":"Springer, 2021,  International Journal of Social Robotics , 10.1007/s12369-021-00778-6"},
          {"t":"heading","d":2,"v":"MDPI, 2021, Human-Robot Interaction and Sensors for Social Robotics, 10.3390/s21010216"},
          {"t":"heading","d":2,"v":"Springer, 2022, International Journal of Social Robotics, 10.1007/s12369-022-00913-x"}
      ]},
      {"t":"heading","d":1,"v":"Spatial", "c":[
         {"t":"heading","d":2,"v":"Informing users of the robot’s intent", "c":[
            {"t":"heading","d":3,"v":"ACM, 2023, Conference on Human Factors in Computing Systems, 10.1145/3544548.3580857"},
            {"t":"heading","d":3,"v":"Taylor and Francis, 2023, Disability and Rehabilitation: Assistive Technology, 10.1080/17483107.2023.2170477"}
         ]},
          {"t":"heading","d":2,"v":"Socially appropiate positioning", "c": [
            {"t":"heading","d":3,"v":"Elsevier, 2023, Journal of Environmental Psychology, 10.1016/j.jenvp.2019.101386"},
            {"t":"heading","d":3,"v":"Springer, 2023, International Journal of Social Robotics, 10.1007/s12369-021-00811-8"}
          ]},
          {"t":"heading","d":2,"v":"Socially appropiate navigation", "c":[
            {"t":"heading","d":3,"v":"Elsevier, 2013, Robotics and Autonomous Systems, 10.1016/j.robot.2013.05.007"},
            {"t":"heading","d":3,"v":"IEEE, 2015, International Conference on Industrial Instrumentation and Control, 10.1109/IIC.2015.7150956"},
            {"t":"heading","d":3,"v":"Elsevier, 2017, Robotics and Autonomous Systems, 10.1016/j.robot.2017.03.002"},
            {"t":"heading","d":3,"v":"Elsevier, 2021, Robotics and Autonomous Systems, 10.1016/j.robot.2021.103837"}
          ]}
       ]}
  ]});
</script>

<script>
((e, lang_json, other_json)=>{
  const{Markmap:r}=e();
  window.mm=r.create("svg#mindmap-lang",null,lang_json)
})(()=>window.markmap,
  {"t":"root","d":0,"v":"Interaction types", "c":[
      {"t":"heading","d":1,"v":"Verbal", "c":[]},
      {"t":"heading","d":1,"v":"Non-verbal", "c":[]},
      {"t":"heading","d":1,"v":"Emotion based", "c":[]},
      {"t":"heading","d":1,"v":"Spatial", "c":[
          {"t":"heading","d":2,"v":"Socially appropiate mapping"},
   {"t":"heading","d":2,"v":"Socially appropiate path planning"},
   {"t":"heading","d":2,"v":"Socially appropiate positioning"},
   {"t":"heading","d":2,"v":"Informing users of the robot’s intent"}
      ]}
  ]});
</script>
