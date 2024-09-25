<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Calentamiento vocal y preparación de la voz

    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-12 
        figure
          img(src='@/assets/curso/temas/tema4/img_1.png', alt='') 

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-12.col-lg-10
        p Todo lo relacionado con la voz y sus procesos, debe tener un calentamiento y una preparación antes de ejecutar estas acciones; destacando la respiración, lo cual es clave para lograr este fin.

    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Respiración

    p.mb-5(data-aos="fade-right") La respiración es un elemento de gran importancia en la emisión de la voz. De ella dependen, en gran parte, la calidad de la voz y la salud vocal, ya sea que se esté cantando, hablando en público o participando en actividades que requieren el uso intensivo de la voz. 

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h3.mb-0 Tipos de respiración

    p.mb-5(data-aos="fade-right") Todos los tipos de respiración, aunque están situados en lugares cercanos del aparato respiratorio, cumplen diferentes funciones, ya que están ubicados en zonas diferentes, tal como se explica a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-10.mb-4.d-none.d-sm-none.d-md-block(data-aos="zoom-in-down")
        ImagenInfograficaB.color-acento-botones
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/info-1A.svg', alt='')
          div.p-3(x="71%" y="14%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Respiración clavicular (zona alta) 
            p Es la que se efectúa aprovechando la parte superior de los pulmones, levantando los hombros y las clavículas al respirar y provocando la contracción de los músculos suspensores de la laringe que dificultan su funcionamiento. Es el modelo clásico de respiración en la gimnasia sueca y la milicia, aunque resulta fatigosa para el canto. Solo consigue una VC de un 25 %, aproximadamente.
          div.p-3(x="5%" y="35%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Respiración costal (zona media)
            p Se practica dilatando el tórax y ensanchando las costillas, con lo que se consigue un descenso parcial del diafragma y un aumento de la cantidad de aire, respecto del tipo anterior. La posición adoptada para ella resulta poco natural y dificulta la emisión de la voz. 
          div.p-3(x="94%" y="83%" numero="+" tooltip="Clic para ver información")
            .h5.mb-2 Respiración diafragmática-abdominal (zona baja) 
            p Moviliza el epigastrio (la parte más baja del tórax y la más alta del abdomen), que es la zona donde radica el mayor control voluntario de la respiración. En este tipo de respiración, el diafragma realiza su máximo descenso empujando las vísceras abdominales hacia abajo y hacia delante, con lo cual se aprecia un aumento de volumen del abdomen y del diámetro torácico que se completa con movimientos costales, por lo que se provoca la máxima dilatación de los pulmones y la máxima VC (hasta del 60 %).  
      .col-12.d-block.d-md-none.mb-4
        figure
          img(src='@/assets/curso/temas/tema4/info-1B.svg', alt='')

    p.mb-5(data-aos="fade-right") Este último tipo de respiración; es decir, la respiración diafragmática-abdominal o costal diafragmática, tiene un proceso específico que se detalla a continuación:

    .row.mb-4.p-4.justify-content-center.align-items-center
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        //- .d-none.d-sm-none.d-md-block
        figure 
          img(src='@/assets/curso/temas/tema4/img_2.png', alt='')
      .col-lg-6.col-12(data-aos="fade-right")
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="El diafragma") Es un músculo que separa la cavidad torácica de la cavidad abdominal y que en reposo tiene forma abovedada. Cuando se inspira, el diafragma se contrae y pasa a tener una forma más plana. Esto permite que la cavidad torácica aumente de volumen y entre el aire en los pulmones. Cuando el diafragma se relaja, presiona los pulmones y el aire es expulsado al exterior. 
          p(numero="2" titulo="La respiración") La decuada para el canto es la costal diafragmática. Fue atribuida a los cantantes italianos del siglo XIX y se denominó “Técnica de <em>Appoggio</em>” o “apoyo”.
          p(numero="3" titulo="Inspiración") Es profunda, nasal, hay un leve ascenso de la pared torácica por obra de la acción de los músculos intercostales externos, elevadores de las costillas, en ese momento el sujeto cierra su glotis, coloca su laringe en posición fonatoria y emite el sonido sin modificar la posición inspiratoria durante toda la emisión.
          p(numero="4" titulo="Proceso") Se realiza por obra de la presión subglotica, por la elevación lenta y progresiva del diafragma bajo la presión intensa y continua de la musculatura abdominal, que se produce desde el pubis hacia arriba. Así el gasto de aire no agota la reserva y provoca una sensación como de cantar sobre un colchón de aire.
          p(numero="5" titulo="El <em>Appoggio</em> de la voz") Se consigue cuando la columna de aire al salir de los pulmones halla resistencia, se agarra de los resonadores y varía según la vocal. 
          p(numero="6" titulo="La técnica del <em>Appoggio</em>") Conduce a técnicas de fuerte resistencia proyectada sobre la laringe, que protegen el mecanismo laríngeo, sobre todo en altas frecuencias y a gran volumen.

    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Mecanismos de respiración fonatoria

    p.mb-5(data-aos="fade-right") Primero que todo, es importante conocer las siguientes apreciaciones que diferencian estos importantes conceptos:

    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-md.tarjeta.color-primario-a.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/img_3.svg', alt='')
        h4.text-center Inspiración
        p Diafragma contraído, el volumen torácico aumenta.
      .col-md.tarjeta.color-secundario-a.p-5
        .row.justify-content-center.mb-4
          .col-6.col-lg-8
            figure
              img(src='@/assets/curso/temas/tema4/img_4.svg', alt='')
        h4.text-center Espiración
        p Diafragma relajado, volumen torácico disminuye.

    p.mb-3(data-aos="fade-right") Ahora bien, la coordinación fono-respiratoria es la habilidad que consiste en poner en práctica, de forma conjunta, todas las funciones que intervienen en la producción de la voz.
    p.mb-3(data-aos="fade-right") Cuando se dominan de manera conjunta la acomodación armónica de la relajación, la respiración y la resonancia y se las adapta al tipo de voz que se desea emitir (hablada o cantada), se está ante una adecuada técnica vocal. 
    p.mb-5(data-aos="fade-right") Se debe regular la respiración, la posición de los órganos articulatorios, la ubicación y movimiento de la lengua y la apertura y posición de los labios; todo esto, sumado a la fuerza del soplo espiratorio, determinan la producción de la voz.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-down")
      .col-12
        ul.lista-ul--color.lista-title
          li.mb-0.px-3.py-1
            i.fas.fa-play
            h3.mb-0 Ejercicios básicos de apoyo y control

    .tarjeta.color-acento-contenido-a.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema4/compliant.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Respiración en el canto
              p Para complementar y enriquecer algunos conceptos sobre respiración y así mismo, ejecutar algunos ejercicios de respiración de apoyo y control, es necesario revisar el siguiente artículo anexo.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_Respiracion_canto.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    //- .row.align-items-center.justify-content-center.mb-4
    //-   .col-md-12.col-lg-10.col-12.tarjeta.color-primario-b.p-4(data-aos="fade-right") 
    //-     .row.align-items-center
    //-       .col-md-3.col-6.justify-content-center.mb-4.mb-md-0
    //-         figure
    //-           img(src='@/assets/curso/temas/tema4/ico-2.svg', alt='')
    //-       .col-md-9.col-12
    //-         p Después de leer este documento, conteste las siguientes preguntas:
    //-         ul.lista-ul.mb-0
    //-           li 
    //-             i.fas.fa-angle-right
    //-             | ¿Para qué es necesario la fase de retención de aire, antes de la espiración?
    //-           li 
    //-             i.fas.fa-angle-right
    //-             | ¿Por qué es importante el control de la espiración?
    //-           li.mb-0
    //-             i.fas.fa-angle-right
    //-             | ¿Qué ejercicios son los más importantes para el control y el apoyo de la respiración?

    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Modos de respiración

    p.mb-5(data-aos="fade-right") Los modos de respiración que se deben tener en cuenta, de acuerdo a su adecuado uso, son los siguientes:

    .tarjeta--container.row.mb-5(data-aos="fade-down")
      .col-lg.tarjeta.color-cn-a.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img_5.svg', alt='')
        h4.text-center Nasal
        p Este modo de respiración indica que el aire ingresa por la nariz, en esta zona el aire es limpiado, calentado y humedecido. Este sería el modo respiratorio favorable para la técnica vocal.
      .col-lg.tarjeta.color-cn-b.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img_6.svg', alt='')
        h4.text-center Bucal
        p En este modo, por el contrario, el aire ingresa por la boca, pero entra sucio, frío y seco, favoreciendo el ingreso de virus y bacterias.
      .col-lg.tarjeta.color-cn-c.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img_7.svg', alt='')
        h4.text-center Mixto
        p Este método es una combinación de los modos respiratorios nasal y bucal.



</template>

<script>
export default {
  name: 'Tema4',
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
