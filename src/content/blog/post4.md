---
title: "Gazebo environment with custom models"
description: "Notes for the configuration of a ROS package that simulates an environment, with custom models."
pubDate: "March 24 2023"
tags: ["tutorial","robotics", "ROS"]
---

## Motivations

<p align="justify"> 
Multiple environments are pre-defined by the default ROS distribution. However, when it comes to practical examples or specific tasks, there are two main reasons to set up a new environment:
</p>

- To add new models non-included by the default installation.
- Because the amount of unnecessary content may be overwhelming.

Here, my reasons for building a new environment include, also, the following features:

- To add moving actors for detection purposes.
- To add furniture with dynamical properties (e.g., cups, cans and mugs) for manipulation purposes.
- To add custom models

## Key concepts

<p align="justify"> 
First, it is necessary to provide a description to understand the differences between a model, a world and a launch file.

A <b>model</b> is the more basic gazebo object. Initially, it is a 3d object defined by just a .dae (Digital Asset Exchange) file. However, in practise, there is a more sophisticated approach using .obj files.
</p>

    📦model
    ┣ 📂meshes
    ┃ ┣ 3dmodel.obj
    ┃ ┗ model.mtl
    ┣ 📂material
    ┃ ┗ surface.png
    ┣ 📂thumbnails
    ┃ ┗ result.png
    ┣ ━ model.config
    ┗ ━ model.sdf

<p align="justify">
A model path can be configured from the gazebo GUI, and you can manually add each one to an empty world. The resulting environment is exported as a .sdf (Structured Data File) file. This approach is not recommended, because it implies blending all your model descriptions and environmental settings into one unique file. 
</p>

> When it comes to development, the more modular the more handy it is to debug.
>

<p align="justify"> 
There are specific cases when a .dae file is more adequate. If everything is properly configured, there is no need to modify the models' paths to spawn it (whether the approach you are using) with gazebo later on.
</p>

<p align="justify"> 
A <b>world</b> file is a gazebo structure where you can locate your models by just specifying a position. Besides, you can add gazebo plugins like the walking actor plugin used here. Essentially a world file is just an enhanced .sdf file, where you can drop your models in an easy-to-read form. At this point, all you need is gazebo and thus, you can load your world without a ROS package:
</p>

```
user@hostname:~/world_path$ gazebo custom_world.world 
```

<p align="justify"> 
A <b>launch</b> file is a ROS tool to locate and execute packages, load worlds and export robot settings. It basically enables ROS integration.  
</p>

## Implementation

The final package follows the structure:

    📦model
    ┣ 📂models
    ┃ ┣ 📂model_1
    ┃ ┣ 📂model_2
    ┃ ┗ ...
    ┣ 📂worlds
    ┃ ┗ custom_world.world
    ┣ 📂launch
    ┃ ┗ environment.launch
    ┣ ━ CMakeLists.txt
    ┗ ━ package.xml

The .world file should look like this example:

 ```
<?xml version="1.0" ?>
<sdf version="1.5">
  <world name="default">
    <include>
      <uri>model://sun</uri>
    </include>
    <include>
      <uri>model://ground_plane</uri>
    </include>
    <include>
      <uri>model://model_1</uri>
      <pose>-2.25 0.15 0.2 0 0 0</pose>
    </include>
    <include>
      <uri>model://model_2</uri>
      <pose>-2.25 0.15 0.2 0 0 0</pose>
    </include>
  </world>
</sdf>
```

While the .launch file can follow this structure:

```
<?xml version="1.0" encoding="UTF-8" ?>
<launch>
  <arg name="debug" default="false" />
  <arg name="world" default="$(find kitchen_lab)/worlds/kitchen.world" /> 
  <arg name="robot"  default="titanium"/>
  <arg name="gzpose" default="-x 0.0 -y 0.0 -z 0.0 -R 0.0 -P 0.0 -Y 0.0"/>
  <arg name="pause" default="false" />
  <arg name="gui" default="true"/>

  <include file="$(find gazebo_ros)/launch/empty_world.launch">
    <arg name="world_name" value="$(arg world)" />
    <arg name="debug" value="$(arg debug)" />
    <arg name="gui" value="$(arg gui)" />
    <arg name="paused" value="$(arg pause)" />
    <arg name="use_sim_time" value="true" />
  </include>
</launch>
```

It is also necessary to export the models' path in order to find the new ones, modifying the package.xml:

```
  <export>
    <gazebo_ros gazebo_model_path="${prefix}/models"/>
    <gazebo_ros gazebo_media_path="${prefix}/worlds"/>
  </export>
```

Finally, you must add these lines to your CMakeList.txt to install the resulting directories:

```
install(DIRECTORY launch
  DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}
)

install(DIRECTORY models
  DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}
)

install(DIRECTORY urdf
  DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}
)

install(DIRECTORY worlds
  DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}
)
```

Check out my repo for an example implementation:

<p align="center">
<img src="https://github.com/JHermosillaD/kitchen_lab/blob/main/media/demo1.gif?raw=true">
Kitchen environment.
</p>