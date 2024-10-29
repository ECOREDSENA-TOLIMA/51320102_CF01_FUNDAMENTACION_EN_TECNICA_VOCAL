<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-4(data-aos="fade-right") ¡Toda profesión requiere una preparación!
    
    p.mb-4(data-aos="fade-right") Este componente formativo, detalla la importancia de una adecuada higiene en todos los procesos relacionados con la técnica vocal, incluyendo factores a tener en cuenta en el uso de la voz. Por tal motivo, para iniciar este proceso y conocer más al respecto, analice el siguiente video introductorio:

    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/JvF_l5rx5Ps" title="La higiene y la preparación de la voz" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
