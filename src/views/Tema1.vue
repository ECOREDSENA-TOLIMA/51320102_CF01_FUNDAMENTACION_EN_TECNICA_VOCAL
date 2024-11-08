<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Normas de higiene

    p.mb-4(data-aos="fade-right") Antes de iniciar el desarrollo sobre los diferentes actores presentes de las normas de higiene, es necesario dar una breve definición de lo que representa cada uno:
      
    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10.d-none.d-sm-none.d-md-block(data-aos="zoom-in-down")
        ImagenInfografica.color-acento-botones.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/info-1A.svg', alt='')
          .tarjeta.color-primario-a.p-3(x="19%" y="17%" numero="+")
            p Es un estado de los tejidos de la boca y de las estructuras relacionadas que contribuye positivamente al bienestar físico, mental y social, al bienestar y disfrute de las posibilidades de la vida, permitiendo al individuo hablar, comer y socializar sin obstáculos por el dolor, incomodidad o vergüenza.
          .tarjeta.color-primario-a.p-3(x="60%" y="9%" numero="+")
            p Significa una práctica de conductas vocales que no dañan o abusan de la estructura laríngea y que conlleva a reducir la fuerza y/o el contacto de los pliegues vocales, logrando disminuir la irritación de la mucosa.
          .tarjeta.color-primario-a.p-3(x="81.5%" y="53%" numero="+")
            p Es el conjunto de ciencias y técnicas cuyo objetivo es la adecuación entre el puesto de trabajo y la persona. La ergonomía es una disciplina científico-técnica y de diseño que estudia la relación entre el entorno de trabajo (lugar de trabajo), y quienes realizan el trabajo (los trabajadores).
      .col-12.d-block.d-md-none
        .row 
          .col-12.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/info-1B.svg', alt='')

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h3.mb-0 Normas de higiene bucal

    p.mb-5(data-aos="fade-right") Sobre este tipo de normas, se debe considerar lo siguiente:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 1. </b> <i>Normas de higiene bucal</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-1a.svg', alt='Figura que relaciona las normas a tener en cuenta con respecto a la higiene bucal, destacando entre ellas, la forma de cepillarse los dientes, el uso de utensilios en la boca, el tipo de alimentación a consumir y el tiempo de consulta al dentista por año, entre otros aspectos.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-1b.svg', alt='Figura que relaciona las normas a tener en cuenta con respecto a la higiene bucal, destacando entre ellas, la forma de cepillarse los dientes, el uso de utensilios en la boca, el tipo de alimentación a consumir y el tiempo de consulta al dentista por año, entre otros aspectos.') 

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h3.mb-0 Normas de higiene vocal

    p.mb-5(data-aos="fade-right") Ya conociendo lo relacionado con las anteriores normas, es preciso conocer lo que concierne más al aparato vocal o sistema respiratorio:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>Normas de higiene vocal</i>
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema1/fig-2a.svg', alt='Figura que menciona las normas relacionadas con la higiene vocal, estas apuntan más al aparato vocal o sistema respiratorio, donde se destacan el abuso o mal uso vocal y lo que esto ocasiona, así como los hábitos de ingesta no recomendados. Además, es importante tener en cuenta, que el ejercicio físico ayuda a mantener un buen entorno muscular.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema1/fig-2b.svg', alt='Figura que menciona las normas relacionadas con la higiene vocal, estas apuntan más al aparato vocal o sistema respiratorio, donde se destacan el abuso o mal uso vocal y lo que esto ocasiona, así como los hábitos de ingesta no recomendados. Además, es importante tener en cuenta, que el ejercicio físico ayuda a mantener un buen entorno muscular.') 

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h3.mb-0 Principios de higiene ergonómica
    
    p.mb-4(data-aos="fade-right") Dentro de los principios de higiene ergonómica, se destacan los siguientes:

    .row.fondo-1.p-4.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.ps-4
        ul.lista-ul--color.lista-title-b.mb-4
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h4.mb-0 Higiene ergonómica en el trabajo
      .col-12.px-4
        p.mb-4(data-aos="fade-right") Es indispensable tener en cuenta unos principios básicos de diseño ergonómico del puesto de trabajo, tales como:
      .col-12.col-lg-6.px-4.mb-lg-0.mb-4
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 3. </b> <i>Pausas laborales</i>
        figure
          img(src='@/assets/curso/temas/tema1/fig-3a.svg', alt='Imagen que relaciona algunos ejemplos de pausas laborales.')  
      .col-12.col-lg-6.px-4.mb-4
        ul.lista-ul.ul-color-a
          li 
            i.fas.fa-check
            | La carga física del trabajo en relación con las capacidades del individuo.
          li 
            i.fas.fa-check
            | La carga adicional debida a las condiciones ambientales. 
          li 
            i.fas.fa-check
            | El método y el ritmo de trabajo. 
          li 
            i.fas.fa-check
            | La posición del cuerpo, los movimientos y esfuerzos. 
          li 
            i.fas.fa-check
            | Los espacios de trabajo. 
          li 
            i.fas.fa-check
            | El número y distribución de pausas a lo largo de la jornada. 
          li.mb-0
            i.fas.fa-check
            | La posibilidad de modificar el orden de las tareas, cambiar de postura, etc.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12.mb-4
        ul.lista-ul--color.lista-title-b
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h4.mb-0 Higiene ergonómica en el canto 
      .col-12.mb-4
        p.mb-4(data-aos="fade-right") El Ministerio de Salud colombiano, en el IV Estudio Nacional de Salud Bucal, expone los aspectos a tener en cuenta para el adecuado manejo del cuerpo en el trabajo musical, respecto al uso de la voz. Es indispensable reconocer que la mayoría de personas que trabajan con la música, especialmente con el canto y su técnica, necesitan una serie de recomendaciones para poder ejercer una posición ergonómica adecuada, por lo tanto, es necesario que:
      .col-12.col-lg-5.mb-4
        ul.lista-ul.ul-color-a
          li 
            i.fas.fa-check
            p.mb-0 El cuerpo y la mente deben estar relajados, sin tener tensión; por lo tanto, antes de iniciar a cantar, el cuerpo debe estar relajado. No olvidar mirarse en un espejo.
          li 
            i.fas.fa-check
            p.mb-0 Mantener un correcto equilibrio postural, ya que los problemas y vicios posturales pueden afectar a la función vocal. Revisar la postura adoptada, verticalidad, tensiones en cavidades de resonancia, cintura escapular y tronco, así como los vicios respiratorios.
          li 
            i.fas.fa-check
            p.mb-0 Es aconsejable realizar ejercicios de calentamiento corporal y relajación con ayuda de la respiración. 
          li 
            i.fas.fa-check
            p.mb-0 Postura sentada: debe sentarse en una silla lo más relajado posible con los pies apoyados en el suelo, sin cruzar las piernas; la espalda debe estar derecha buscando un apoyo. El mentón debe estar en equilibrio con el cuello, ni muy delante ni muy atrás. 
      .col-10.col-lg-5.mb-lg-0.mb-4
          .titulo-sexto.color-acento-contenido
            p.titulo.pb-0.mb-0 <b>Figura 4. </b> <i>Postura sentada</i>
          figure
            img(src='@/assets/curso/temas/tema1/fig-4a.svg', alt='Imagen que relaciona la postura correcta e incorrecta al momento de sentarse.')  


    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.lista-title-b
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h4.mb-0 Postura de pie

    p.mb-5(data-aos="fade-right") Esta postura es muy importante, ya que se realiza con regularidad y por ello, se deben tener en cuenta las siguientes acciones, para realizarla de manera correcta:

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-lg-10.col-12.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema1/ico-1.svg", alt="alt").img250
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/ico-1A.svg", alt="alt").img100
            .col
              h4 Piernas
              p Se debe tener las piernas y pies separados de acuerdo al ancho de las caderas y hombros, además de estar bien apoyados en el suelo. Los pies no deben estar en puntillas; no tener las piernas muy pegadas, ni muy separadas o cruzadas. Las rodillas deben estar semiflexionadas.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/ico-1B.svg", alt="alt").img100
            .col
              h4 Torso
              p La espalda debe relajada y recta, buscando un equilibrio del cuerpo, no muy atrás ni muy delante.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/ico-1C.svg", alt="alt").img100
            .col
              h4 Cabeza
              p El mentón debe estar en equilibrio con el cuello, ni muy delante ni muy atrás. Asimismo, el cuello debe estar relajado y la mirada al frente.


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
