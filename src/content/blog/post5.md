---
title: "To Evolutionary Computation and Beyond"
description: "Lecture notes on the history and paradigms of CE."
pubDate: "May 12 2024"
tags: ["artificial intelligence", "evolutionary computation"]
---

<p align="justify"> 
El conocimiento científico se caracteríza por la sistematización del proceso de aprendizaje y la verificicación de sus resultados. En particular, los enfoques "Buttom-up" y "Top-down" distinguen dos tipos de aprendizaje.
</p>

> -- Bottom-up processing […] refers to processes that take a lower-level representation as input and create or modify a “higher-level” representation as output. Top-down processing […] refers to processes that operate in the opposite direction, taking a “higher-level” representation as input and producing or modifying a lower-level representation as output.
> -- <cite> Palmer, 1999 </cite>

<p align="justify"> 
El enfoque Top-down parte de una teoría o conocimiento bien establecido del fenómeno, seguido de un proceso de interpretación y descomposición en problemas menos complejos (divide y vencerás). El enfoque Buttom-up parte de la observación y generación de hipótesis del fenónemo, seguido de un proceso de verificación y formulación de la teoría.
</p>

<p align="center">
<img src="/learning.jpg" height="360" width="360">
Esquema de ambos enfoques.
</p>

<p align="justify"> 
En la IA el enfoque Top-down permite emular el comportamiento inteligente al resolver tareas humanas mediante la descomposición de los problemas en algoritmos computacionales de menor complejidad. El enfoque Buttom-up, por otro lado, buscar hacer emerger el comportamiento inteligente necesario para resolver tareas complejas mediante algoritmos que emplean mecanismos de adaptación.

El término "cómputo inteligente" (CI) se usa en ciencias computacionales para referirse a aquellos algoritmos con capacidades adaptativas relacionadas con la inteligencia. 
</p>

> -- El cómputo inteligente es el estudio de mecanismos adaptativos para generar o facilitar el comportamiento inteligente en ambientes complejos, inciertos y cambientes.
> -- <cite>...</cite>

Los paradigmas del CI son:

- <b>Redes neuronales</b>
- <b>Algoritmos evolutivos</b>
- <b>Inteligencia colectiva</b>
- <b>Sistemas inmunes artificiales</b>
- <b>Sistemas difusos</b>

## Sobre el inicio

<p align="justify"> 
Inicialmente, el área surge de una idea propuesta en 1939, cuando Wright establece una relación entre un sistema evolutivo y un modelo matemático. Más tarde, Friedman (1956) y Friedberg (1959) proponen modelos computacionales inspirados en esta clase de sistemas.
</p>

<iframe frameborder="0" style="width:100%;height:408px;" src="https://viewer.diagrams.net/?tags=%7B%7D&edit=_blank&layers=1&nav=1#R1VfbbpwwEP0apPYhFcFAto97S1olaSMlaZpHa5mAK8Mg492Ffn0HMAss2W3SNFnlBXmOZ3w5Zzw2FpvG%2BZniaXSJAUjLsYPcYjPLcU4Yo28JFDXg%2Bl4NhEoENXTcAtfiNxjQNuhSBJD1HDWi1CLtgwtMEljoHsaVwnXf7QFlf9aUhzAArhdcDtE7EejIoL7nth1fQISRmdphzK97Yt54m61kEQ9w3YHY3GJThajrVpxPQZbkNcTUcac7ejcrU5DopwSc392Kqx%2Ff7QuRR%2FnoshBfb86PzGIzXTQ7hoAIMCYqHWGICZfzFp0oXCYBlKPaZLU%2BF4gpgccE%2FgKtC6MmX2okKNKxNL2QC%2F2zDP%2FkGeu%2B0zPLzciVUTRGolXRCSrN%2B25fG1ZZTVy9v3JTO2kzUIZLtYA9XDX5x1UIeo8f24hLpwIwBloPxSmQXItVfx3c5Ge48WsVpIYR8RmCjg4h6NNJ%2Fit57gvJM6FXKGhmxzZ1yLPNITRlyGnsZohafBPVSjBWihcdt7R0yJ4xz%2FaZ3PL3%2Fb3%2B1KhX0ObDhpN%2FT5Gmtr7xoX8%2FB9j7Hzn42qnD3EOkTj3lisuloWFqTZk1YXFaCk46rVAuiSRq%2B5I4ngRiRc2wbH74BngUcLUWichi%2FNi40Eo6XsPclJJu%2BzIH15HQcJ3ySuQ1vTf6GfYgpGySOENZbqTCpihRVWMx%2F2Q8%2BXy6mWUFSkO%2BP6%2BGeWAC3C0BjpuLft15KDRY1HkjjOzdqfOi2s8G6pyBijGVPIv5Y4LcAQnBk1dRosP6zJuPZu4OhV5BCcc9tBLuQIkLKOgdSw9hoI%2Fk1UJofwvxqDCXSMVWvndd%2FO2SdnBdvIEuj7B%2FA0QQVbXxjPcEq2rbQtQFL9mlzVDMWVXy3ruYG1HeQEwy2%2F%2Bi%2Bu5q%2Fy7Z%2FA8%3D"></iframe>

<p align="justify"> 
Sin embargo, el actualmente conocido como Cómputo Evolutivo (CE) atravesó cuatro periodos importantes durante los años 60 y 90.

Inicialmente, el área fue impulsada por tres grupos de investigación durante los años 60 (<b>los catalíticos</b>): 
</p>

- El grupo de Lawrence Jerome Fogel en la Universidad de California.

- El grupo de Ingo Rechenberg y Hans-Paul Schwefel en la Universidad Técnica de Berlín.

- El grupo de John Hanry Holland en la Universidad de Michigan.

<p align="justify"> 
Durante los años 70 (<b>los explorativos</b>) y de la mano de los grupos anteriores se consolidaron los siguientes paradigmas:
</p>

- La programación evolutiva

- Las estrategias evolutivas

- Los algoritmos genéticos

<p align="justify"> 
Seguido de esto, durante los años 80 (<b>los explotativos</b>) se diversificaron las aplicaciones del CE y se desarrollaron variantes especializadas como la programación genética y la evolución diferencial, además, surgieron los primeros congresos.
Mas tarde, durante los años 90 (<b>los unificadores</b>) se consolida el área del CE y surge el primer journal especializado.
</p>

<iframe frameborder="0" style="width:100%;height:568px;" src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R7VhRb5swEP41PG5KMBD6mJB007RKnfLQ9amywAFXhkPGSWC%2FfjaYYMLKNnVdipSXyPfdnfF99%2BHosFCQlp84zpM7iAiz7FlUWmht2fYCIfmrgKoBHM9tgJjTqIHmHbClP4gGZxrd04gUvUABwATN%2B2AIWUZC0cMw53Dsh%2B2A9Z%2Ba45gMgG2I2RB9oJFINOq5Tuf4TGic6EfbCHmNJ8VttC6lSHAERwNCGwsFHEA0q7QMCFPktcQ0ebcveE8n4yQTf5LwpXSensj24S7NvW%2BFXz0ngftBt%2BeA2V5XvCkEx4LEFBfSQQ7A9oIelFEXIaqWGrm77II0VseECrLNcag8R6kDiSUiZdKay%2BWOMrbVeQUwdZ4aC4ABr%2FdCa3fjrx2J6%2BMQLkj5Yp3zE3tSdgRSInglQ3SCM9OEa8nZrX00Gtg2JTF652sMa83Ep607VuVCE%2FsXJDsDku85xBynOKRWgKwVykyqJ8O0%2Fe6Yns%2BH5EXyhdYmcJFADBlmmw5dcdhnEVHbzqTVxXwFyDWxz0SISt9OeC%2BgTzspqfiu0j%2B62no0POtS71wbVWtksl4jSZmPpq9Lq602r6lPFTXeNMkB7HlIRsjSN7HAPCbid3fEUAScMCzl2j%2FHv%2B%2BofZGOTqc73iu7U6cuOceVEZADzURh7HyvAOOO9fpv%2Fnxx9t9zFu%2BNx8tFc4JOJ6dSXiEddJXOqHScKUjHvoh0nKt0RqWzmIJ00EWk416lMyodfwrScS8hHc2gOSdgjiMap288fnmL5erm9m3GL%2F%2FSM4E3YHXJYuBUpKAm3JhkagZb3ggawnSmXO%2FdzV6LoXp%2FMeWadE9n0kXnbF9c1f6A7Y36fmBSHdEdkQWGFLPJEO3%2BR6Kl2X19a%2B7w7hsm2vwE"></iframe>

<p align="justify"> 
Actualmente el CE se emplea para resolver problemas de búsqueda u optimización que sean difíciles de replicar experimentalmente o que no sea plausible resolverlos mediante una búsqueda exahustiva.
</p>

## Sobre la computación evolutiva

<p align="justify"> 
Un algoritmo evolutivo es un modelo computacional basado en el proceso de evolución y el principio de supervivencia del más apto. Se compone escencialmente de  los siguientes seis elementos:
</p>

- Representación de soluciones
- Función de aptitud
- Población de soluciones
- Selección de padres
- Operadores de variación
- Mecanismo de reemplazo

Estos elementos integran un proceso iterativo de adaptación.

<iframe frameborder="0" style="width:100%;height:444px;" src="https://viewer.diagrams.net/?tags=%7B%7D&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R3Vhdk5owFP01PLYjRBAfd9V226nTduzMrk87KdyFOIEwMSrur2%2BA8GVcta0W7YvDPSEhOefcy0UDjaL0I8dJOGU%2BUMPq%2BamBxoZluW5P%2FmbAtgBs2y2AgBO%2FgMwamJFXUKCaF6yID8vWjYIxKkjSBj0Wx%2BCJFoY5Z5v2bS%2BMtp%2Ba4AA0YOZhqqOPxBehQh27Xw88AAlC9WgLIacYiXB5tzrKMsQ%2B2zQgNDHQiDMmiqsoHQHNyCuJKeZ9eGO02hmHWJwy4XPaf36G2eM0SpzvS3e7CEf2O8tWmxPb8sjgSwZUyLgIWcBiTCc1es%2FZKvYhW7Yno%2FqeL4wlEjQluAAhtkpOvBJMQqGIqBqVO%2Bbbp2z%2Be7sM52q5PBinrWhbRikRT43reb2EjOpJWVDOKc6XHepN3hS0ZCvuwQGyTCWtwDwAcYhVs9JXJgawCOQp5EQOFAuybu8EK4sG1X21iPJC6fg7mg661bSlaC3wMU0rHedNGa9GU3PQpablNteYrtSjvrGfFHvEGCHjHsVZjYX8wHTlERbLorlrglriTK9NSATMEpyzs5HFuy3nC6G0dIxcM9tcjo0YZTxfD43tiTvuV3KsgQtIDwui06cmWOWLQr0nzIGKN42qW1bSsFFwnd6lsmjYSRbtzQbzYDb8aTU9ZxYNTs0it9MsGuhZhH1%2BY7liWzu50us8V9xr6iLMf%2Bh791TfO5363tV8%2F0AW7LZtb%2FU7t33%2Fmhot61indU7fD2%2FD90PN959iItsjTTdpS9GmGVMSxPLak%2BSAtPN9Zl4ivwzv1EBEfD9XdF%2BatFU%2BR4OE2u4f6uZ39ngfXcz7pkbtj6wVvRvyiMT%2FAcFVR9oZw3rLPwMKntbyJ%2FtbmKtnHDlHLb23nl%2BMcaR7%2BmsCHPss57dge405aX523Rrrdm%2Bne3Ttbn2O%2BhrrU%2FBwTJYRK0nnAFFC8esN1hWE7KN1pfra%2FUvCZVj%2Fn5iPNf6VRZNf"></iframe>

### Algoritmos genéticos

<p align="justify"> 
Para emplear dicho paradigma se debe escoger una representación de soluciones, ya sea del tipo binaria, entera, real o mediante permutaciones. Después, se debe seleccionar uno de los siguientes operadores de mutación.
</p>
 
- <b>Mutación simple:</b> se altera un bit (flip) de información.

- <b>Mutación uniforme:</b> se aplica la mutación simple a n-bits, ya sea mediante el flip (caso binario) o mediante una distribución de probabilidad uniforme (caso real).

- <b>Mutación por readenamiento:</b> se selecciona una subcadena de bits y se desplaza a otro extremo de la cadena.

<p align="justify"> 
Además, se debe seleccionar un operador de cruza, para ello se denomina punto de cruza a la separación entre los bits de una cadena. Los operados disponibles tienen aridad dos y son los siguientes.
</p>

- <b>Cruza uniforme:</b> se construye el cromosoma hijo a partir de la selección aleatoriamente uniforme de uno de los genes de los padres.  

- <b>Cruza intermedia:</b> se genera un coeficiente a, se selecciona un punto de cruza k y apartir de los padres ordenados se aplica una ecuación de cruza.

- <b>Cruza aritmética simple:</b> se aplica la ecuación de cruza anterior, se selecciona un punto de cruza y se calcula el coeficiente a en función de los límites de las variables.

- <b>Cruza aritmética completa:</b> se aplica la cruza aritmética simple todos los genes del cromosoma.