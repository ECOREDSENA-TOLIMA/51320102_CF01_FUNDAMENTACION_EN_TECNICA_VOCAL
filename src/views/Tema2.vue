<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Hábitos saludables y cuidados de la voz

    p.mb-4(data-aos="fade-right") A continuación, se listan los hábitos saludables recomendados, siempre pensando en el beneficio de la voz, según lo establecido en el IV Estudio Nacional de Salud Bucal del año 2015:

  
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-down")
      .col-12.p-5.fondo-s1 
        SlyderB(:datos="datosSlyder")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'No fumar',
        texto:
          'No fumar o dejar de hacerlo y limitar el consumo de alcohol reducen las manchas en los dientes, el mal aliento, las enfermedades de las encías y el riesgo de padecer enfermedad periodontal, alteraciones en la cicatrización de heridas en boca, el desarrollo de lesiones premalignas y el cáncer de la boca.',
        imagen: require('@/assets/curso/temas/tema2/img_1.png'),
      },
      {
        titulo: 'Ir al odontólogo',
        texto:
          'Acudir al odontólogo mínimo dos veces al año. En la consulta odontológica, el equipo de salud bucal debe orientar sobre todos los cuidados bucales que deben tenerse desde la primera infancia y acorde con las condiciones particulares de las personas, desarrollando sus capacidades para aplicar técnicas con enfoque diferencial.',
        imagen: require('@/assets/curso/temas/tema2/img_2.png'),
      },
      {
        titulo: 'Cuidar la salud bucal',
        texto:
          'El cuidado de la salud bucal es importante en las personas que presentan enfermedades generales, como hipertensión, diabetes, cáncer, VIH, enfermedades respiratorias, entre otras, para reducir el riesgo de que además presenten sobre infecciones de origen en boca.',
        imagen: require('@/assets/curso/temas/tema2/img_3.png'),
      },
      {
        titulo: 'Tener alimentación balanceada',
        texto:
          'La alimentación debe ser balanceada, se debe preferir comer alimentos alcalinos como las verduras y las frutas que los alimentos ácidos como la carne, harinas refinadas y leche. No comer comidas fuertes como picantes y exceso de sal, los cuales irritan la mucosa laríngea.',
        imagen: require('@/assets/curso/temas/tema2/img_4.png'),
      },
      {
        titulo: 'Llevar una vida sana',
        texto:
          'Tener una vida sana, practicar algún deporte, preferiblemente ejercicios aeróbicos, yoga, natación, entre otros. Una buena voz necesita un cuerpo sano.',
        imagen: require('@/assets/curso/temas/tema2/img_5.png'),
      },
      {
        titulo: 'Conocer los límites',
        texto:
          'Se debe conocer sus límites y capacidades vocales con el fin de no sobre esforzar la voz.',
        imagen: require('@/assets/curso/temas/tema2/img_6.png'),
      },
      {
        titulo: 'No tener contaminación excesiva',
        texto:
          'No exponerse a la contaminación excesiva como irritantes u otros agentes ambientales adversos como el polvo y humo.',
        imagen: require('@/assets/curso/temas/tema2/img_7.png'),
      },
      {
        titulo: 'Evitar entornos ruidosos',
        texto:
          'No hablar en entornos ruidosos, eliminar cualquier sonido de fondo o esperar si esto no es posible a que se reduzca.',
        imagen: require('@/assets/curso/temas/tema2/img_8.png'),
      },
      {
        titulo: 'Evitar la tensión',
        texto:
          'Las tensiones generales, así como el ritmo de vida ajetreado, también repercuten en la voz. Si el cuerpo está tenso, la voz también lo está, siendo mayor el esfuerzo para hablar. ',
        imagen: require('@/assets/curso/temas/tema2/img_9.png'),
      },
      {
        titulo: 'Tener autocontrol emocional',
        texto:
          'Un buen autocontrol de las emociones y los sentimientos, es bueno para la vida en general, también lo es para evitar situaciones de descontrol fonatorio. El reposo, dormir bien, masajes, relajación, hidroterapia, son situaciones que favorecen la relajación y la eliminación de tensiones físicas y psíquicas.',
        imagen: require('@/assets/curso/temas/tema2/img_10.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
