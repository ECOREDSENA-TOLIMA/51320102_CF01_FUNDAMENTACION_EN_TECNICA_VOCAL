export default {
  global: {
    componenteFormativo: 'La higiene y la preparación de la voz',
    descripcionCurso:
      'El desconocimiento del uso de la técnica vocal, como una conducta vocal sana para prevenir enfermedades del aparato vocal-fonador, hace necesario conocer la normativa de higiene vocal, bucal y ergonómica, además de los factores de riesgo y la prevención y autocuidado de la voz, así como los elementos fundamentales presentes en esta técnica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normas de higiene',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Hábitos saludables y cuidados de la voz',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Factores de riesgo y prevención',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Calentamiento vocal y preparación de la voz',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Respiración',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Mecanismos de respiración fonatoria',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Modos de respiración',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Características de sonido y voz',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Características de la emisión de sonido',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Rutinas de calentamiento y preparación de la voz',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Proyección de la voz',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Proyección vocal',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Técnicas de moldes vocálicos',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Normas de higiene',
      referencia:
        'Consumer. (2013). <em>Higiene bucal: dientes con salud.</em>',
      tipo: 'Revista web',
      link:
        'https://revista.consumer.es/portada/higiene-bucal-dientes-con-salud-2.html',
    },
    {
      tema: '4. Calentamiento vocal y preparación de la voz',
      referencia: 'Gustems, J. (s.f.). <em>La respiración en el canto.</em>',
      tipo: 'Libro web',
      link:
        'http://diposit.ub.edu/dspace/bitstream/2445/11533/1/respiracion_canto.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Afonía',
      significado:
        'es la alteración máxima de la disfonía, es la pérdida total de la voz.',
    },
    {
      termino: 'Caries',
      significado:
        'es un complejo proceso producto del desequilibrio fisiológico, entre los minerales del tejido dental y la presencia de los fluidos generados por la actividad metabólica de las bacterias, que se acumulan en la biopelícula (placa bacteriana), cuando esta permanece por periodos prolongados sin ser removida.',
    },
    {
      termino: 'Disfonía',
      significado:
        'es la alteración de una o más de las características acústicas de la voz, que son el timbre, la intensidad y la altura tonal. Esta alteración puede ser percibida por el paciente o por el entorno. Puede ser temporal o permanente y es causada por una alteración de los mecanismos de adaptación y coordinación de las diferentes estructuras que intervienen en la producción de la voz.',
    },
    {
      termino: 'Edema de Reinke o laringitis crónica:',
      significado:
        'se trata de una transformación edematosa del corion o espacio de Reinke, localizado entre el epitelio y el ligamento vocal, que deforma la cara superior y el borde libre del repliegue vocal. Los agentes etiológicos más frecuentes son el abuso vocal y, en gran medida, el tabaquismo. Se han descrito otros agentes que pueden facilitar dicha bilateralidad como el etilismo, el reflujo gastro-esofágico y el hipotiroidismo, en el contexto de una infiltración mixedematosa.',
    },
    {
      termino: 'Enfermedad periodontal',
      significado:
        'son lesiones que se presentan en los tejidos que rodean y sostienen los dientes en su posición. Generalmente se inician como una gingivitis (inflamación de la encía con enrojecimiento y sangrado) en respuesta a la infección de las encías causada por diversos microorganismos, que al no tener manejo y control generan una infección más generalizada y crónica, destruyendo progresivamente los tejidos de soporte del diente.',
    },
    {
      termino: 'Nódulos vocales',
      significado:
        'son pequeñas tumoraciones simétricas y bilaterales, localizadas en la unión del tercio anterior con los tercios posteriores de las cuerdas vocales y se relacionan con un mal uso de la voz en determinadas profesionales.',
    },
    {
      termino: 'Pólipos vocales',
      significado:
        'son seudotumores benignos del repliegue vocal. El término seudotumor indica que no es el resultado de un proceso de proliferación celular, sino de un proceso inflamatorio. Son, por lo general unilaterales, desarrolladas en el corion y que se localizan en el borde libre del tercio medio de la cuerda vocal. Se producen, habitualmente, por abuso vocal y mal uso vocal, por factores irritantes (tabaco) y en las laringitis crónicas.',
    },
    {
      termino: 'Técnica vocal',
      significado:
        'es la utilización consciente de todos los recursos de que dispone el cuerpo humano, para reproducir una voz cantada bella, extensa, con volumen suficiente, ductibilidad, tanto en el fuerte como en el piano, buena dicción y dominio en toda la extensión vocal. La técnica no es el fin, sino el medio para poder expresar y comunicarse a través de ese instrumento maravilloso que es la voz.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias, S., Azócar, M., Edwards, B., Ortega, F. & Wulf, F. (2008). Caracterización de la técnica de apoyo respiratorio utilizada por cantantes líricos y actores de teatro. ',
      link:
        'https://repositorio.uchile.cl/tesis/uchile/2008/arias_s/sources/arias_s.pdf',
    },
    {
      referencia:
        'Biurrún, O. (s.f.). <em>Enfermedades del aparato fonador.</em> ',
      link: 'http://www.medicinadelcant.com/cast/4.pdf',
    },
    {
      referencia:
        'Bustos, I. (2003). <em>La voz. La técnica y expresión.</em> Editorial Paidotribo. Barcelona, España. ',
      link: '',
    },
    {
      referencia:
        'CCOO. (2009). <em>Enfermedades de la voz.</em> Federación estatal de enseñanza CCOO. Editorial Paralelo SA. ',
      link: '',
    },
    {
      referencia:
        'Jiménez, R. (2011). Cómo mantener una salud e higiene vocal en buen estado, para mantener nuestra capacidad comunicativa, libre de alteraciones. Revista digital para profesionales de la enseñanza Nº 13. ',
      link: '',
    },
    {
      referencia:
        'Martín, L. (s.f.). <em>Taller de voz y vocalización.</em> Grupo de Formación en Narración Oral de la Universidad Nacional. Editorial Normas tejedores de historia. ',
      link: '',
    },
    {
      referencia:
        'MinSalud Colombia. (2014). <em>ABECÉ sobre lV Estudio Nacional de Salud Bucal “Para saber cómo estamos y saber qué hacemos”</em>. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/ENT/abc-salud-bucal.pdf ',
    },
    {
      referencia: 'Sauca, A. (2000). <em>Higiene Vocal</em>. ',
      link:
        'https://orientacionsanvicente.files.wordpress.com/2012/04/higiene-vocal.pdf',
    },
    {
      referencia:
        'Soto, M. (2004). <em>Manual de técnica vocal, cultura general y ética profesional.</em> Conservatorio Nacional de Música. CONAMU.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Claudia Rocío Varón Buitrago',
          cargo: 'Senior equipo de adecuación',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ángela Rocío Ortegón Merchán',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ángela Patricia Frasser Castaño',
          cargo: 'Asesora pedagógica',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Genny Carolina Mora Rojas',
          cargo: 'Guionista',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jesús Bernardo Nova Ortiz',
          cargo: 'Guionista',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'PENDIENTE ASIGNAR',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
