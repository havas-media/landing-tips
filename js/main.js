$(document).ready(function () {
  function sliderResize(slider) {
    window.addEventListener(
      "resize",
      function () {
        //slider.forEach(function(e){
        $(slider).slick("resize");
        //})
      },
      false
    );
  }

  var mq = window.matchMedia("(max-width: 500px)");

  $("#slider_planes").slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

const {
  createApp,
  ref,
  reactive,
  toRef,
  toRefs,
  defineAsyncComponent,
  onMounted,
  computed,
} = Vue;
const { required, email, minLength, sameAs, alpha, numeric, maxLength } =
  VuelidateValidators;
const { useVuelidate } = Vuelidate;
//const { Carousel, Slide, Pagination, Navigation } = VueCarousel
const modal = defineAsyncComponent(() =>
  import("../components/modal/modal.js")
);

//import { useMobileDetection } from "vue3-mobile-detection";
// import vMask from 'https://cdn.jsdelivr.net/npm/v-mask/+esm'

//-const { useVuelidate } = Vuelidate

//import vueMobileDetection from 'https://cdn.jsdelivr.net/npm/vue-mobile-detection@2.0.1/+esm'
//import vueMobileDetection from 'https://cdn.jsdelivr.net/npm/vue3-mobile-detection@1.0.5/+esm'

//console.log("vueMobileDetection",vueMobileDetection)
//console.log(VueMobileDetection.$isMobile());

import {
  isNumber,
} from "./plugins/functions.js";
import {
  validPhone,
  validName,
  validEmail,
} from "./plugins/rules.validation.js";
import { events } from "./data/events.js";

let day = ref({});
//const recaptcha = ref('')

const modal1 = ref(false);
const modal2 = ref(false);
const modal3 = ref(false);

const message = ref(false);
const form1 = ref(null);
const dataModal = ref(null);
// const datamodal = ref({
//   title: "Claro Drive Negocio",
//   sub: "Guarda y comparte tus archivos de la nube.",
//   description:
//     "Es una herramienta de colaboración que permite almacenar sus archivos, compartirlos y acceder a ellos desde cualquier dispositivo de forma fácil y sobretodo segura.",
//   bgDesktop: "https://www.claro.com.pe/assets/havas/cards/card1/card.png",
//   bgTablet: "https://www.claro.com.pe/assets/havas/cards/card1/card-T.png",
//   bgMobile: "https://www.claro.com.pe/assets/havas/cards/card1/card-M.png",
//   structure: [
//     {
//       title: "Características",
//       description: [
//         {
//           tamp: "Libera espacio en tus equipos",
//         },
//         {
//           tamp: "Gestiona y centraliza tu trabajo",
//         },
//         {
//           tamp: "Protección garantizada",
//         },
//       ],
//     },
//     {
//       title: "Beneficios",
//       description: [
//         {
//           tamp: "CAPACIDAD",
//         },
//         {
//           tamp: "SEGURIDAD",
//         },
//         {
//           tamp: "PANEL DE CONTROL",
//         },
//         {
//           tamp: "RESPALDO",
//         },
//         {
//           tamp: "SOPORTE TÉCNICO",
//         },
//       ],
//     },
//   ],
// })

const modales = [
  {
    id: 1,
    icon: "https://www.claro.com.pe/assets/havas/cards/card1/icon.png",
    title: "Claro Drive Negocio",
    sub: "Guarda y comparte tus archivos de la nube.",
    description:
      "Es una herramienta de colaboración que permite almacenar sus archivos, compartirlos y acceder a ellos desde cualquier dispositivo de forma fácil y sobretodo segura.",
    bgDesktop: "https://www.claro.com.pe/assets/havas/cards/card1/card.png",
    bgTablet: "https://www.claro.com.pe/assets/havas/cards/card1/card-T.png",
    bgMobile: "https://www.claro.com.pe/assets/havas/cards/card1/card-M.png",
    structure: [
      {
        title: "Características",
        description: [
          {
            tamp: "Libera espacio en tus equipos",
          },
          {
            tamp: "Gestiona y centraliza tu trabajo",
          },
          {
            tamp: "Protección garantizada",
          },
        ],
      },
      {
        title: "Beneficios",
        description: [
          {
            tamp: "CAPACIDAD",
          },
          {
            tamp: "SEGURIDAD",
          },
          {
            tamp: "PANEL DE CONTROL",
          },
          {
            tamp: "RESPALDO",
          },
          {
            tamp: "SOPORTE TÉCNICO",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    icon: "https://www.claro.com.pe/assets/havas/cards/card2/icon.png",
    title: "Claro Backup",
    sub: "Resguarda información de tu empresa.",
    description:
      "Es un servicio que protege y respalda información sensible de equipos de cómputo y dispositivos móviles, en la nube y permite acceder a ella de forma fácil cuando se necesite. Con Claro Backup puedes realizar copias automáticas o programadas con frecuencia diaria, semanal o mensual de la información de tu empresa como: catálogo de productos, cuentas de correos electrónicos, registros financieros, base de datos y directorio de clientes.",
    bgDesktop: "https://www.claro.com.pe/assets/havas/cards/card2/card.png",
    bgTablet: "https://www.claro.com.pe/assets/havas/cards/card2/card-T.png",
    bgMobile: "https://www.claro.com.pe/assets/havas/cards/card2/card-M.png",
    structure: [
      {
        title: "Características",
        description: [
          {
            tamp: "Garantiza la continuidad de tus operaciones",
          },
          {
            tamp: "Respaldo Continuo",
          },
          {
            tamp: "Restauración ágil",
          },
          {
            tamp: "Protección garantizada",
          },
        ],
      },
      {
        title: "Beneficios",
        description: [
          {
            tamp: "RESPALDO",
          },
          {
            tamp: "RESTAURACIÓN",
          },
          {
            tamp: "PANEL DE CONTROL",
          },
          {
            tamp: "RESPALDO",
          },
          {
            tamp: "SEGURIDAD",
          },
          {
            tamp: "SOPORTE TÉCNICO",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    icon: "https://www.claro.com.pe/assets/havas/cards/card3/icon.png",
    title: "Factura Electrónica",
    sub: "Digitaliza la facturación de tu negocio y emite hasta 60 documentos electrónicos.",
    description:
      "Es la nueva plataforma de Claro Cloud, que le permite a las empresas con RUC 20 y 10 con negocio emitir documentos electrónicos tales como Facturas, Boletas, Notas de Crédito/ Débito y Guías de Remisión, de manera simple y segura. Claro es Proveedor de Servicios Electrónicos (PSE) de acuerdo a la Resolución de Superintendencia 018-005-0004362 que se emitió el 01 de febrero de 2019.",
    bgDesktop: "https://www.claro.com.pe/assets/havas/cards/card3/card.png",
    bgTablet: "https://www.claro.com.pe/assets/havas/cards/card3/card-T.png",
    bgMobile: "https://www.claro.com.pe/assets/havas/cards/card3/card-M.png",
    structure: [
      {
        title: "Beneficios",
        description: [
          {
            tamp: "AHORRO",
          },
          {
            tamp: "SEGURIDAD",
          },
          {
            tamp: "SIMPLICIDAD",
          },
          {
            tamp: "RESPALDO",
          },
          {
            tamp: "SOPORTE TÉCNICO",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    icon: "https://www.claro.com.pe/assets/havas/cards/card4/icon.png",
    title: "Seguridad Empresas",
    sub: "Protege la información de tu negocio.",
    description:
      "Es la solución que proporciona máxima ciberprotección contra todo tipo de amenazas. Incluye protección contra virus, barrera contra intrusos, protección contra software espía, búsqueda segura en Internet, filtrado de contenido web, entre otros. Optimiza la seguridad en los dispositivos protegidos detectando amenazas mediante una administración de seguridad simplificada.",
    bgDesktop: "https://www.claro.com.pe/assets/havas/cards/card4/card.png",
    bgTablet: "https://www.claro.com.pe/assets/havas/cards/card4/card-T.png",
    bgMobile: "https://www.claro.com.pe/assets/havas/cards/card4/card-M.png",
    structure: [
      {
        title: "Características",
        description: [
          {
            tamp: "Detiene en automático amenazas cibernéticas, con enfoque en ransomware y ataques de día cero.",
          },
          {
            tamp: "Prevención de pérdida de datos (DLP) con control de dispositivos.",
          },
          {
            tamp: "Copia de seguridad y recuperación.",
          },
          {
            tamp: "Recuperación automática de datos después de un ataque de ransomware.",
          },
          {
            tamp: "Protección antimalware avanzada.",
          },
          {
            tamp: "Filtrado de URL.",
          },
          {
            tamp: "Prevención de exploits.",
          },
          {
            tamp: "Análisis antimalware.",
          },
          {
            tamp: "Datos forenses en copias de seguridad.",
          },
          {
            tamp: "Supervisión global de amenazas y envío de alertas inteligentes.",
          },
          {
            tamp: "Listas de aplicaciones permitidas globales y locales.",
          },
        ],
      },
      {
        title: "Beneficios",
        description: [
          {
            tamp: "TECNOLOGÍA DE PROTECCIÓN ACTIVA",
          },
          {
            tamp: "PREVENCIÓN DE AMENAZAS EN TIEMPO REAL",
          },
          {
            tamp: "AUTOMATIZACIÓN DE LA SEGURIDAD CIBERNÉTICA",
          },
          {
            tamp: "REPARACIÓN EFICIENTE Y RÁPIDA",
          },
        ],
      }
    ],
  },
  {
    id: 5,
    icon: "https://www.claro.com.pe/assets/havas/cards/card5/icon.png",
    title: "Email Empresas",
    sub: "Personaliza tu email con el nombre de tu empresa.",
    description:
      "Es una herramienta de comunicación que brinda 2 cuentas de correo con la opción de que puedas configurar un dominio personalizado con el nombre de tu empresa. Permite enviar y recibir mensajes, programar en calendario diferentes tareas y reuniones. Cada cuenta de correo tiene 50GB de capacidad de buzón en la nube, con acceso desde cualquier dispositivo con conexión a Internet. Además, cuenta con su propia APP Claro Mail disponible para iOS y ANDROID.",
    bgDesktop: "https://www.claro.com.pe/assets/havas/cards/card5/card.png",
    bgTablet: "https://www.claro.com.pe/assets/havas/cards/card5/card-T.png",
    bgMobile: "https://www.claro.com.pe/assets/havas/cards/card5/card-M.png",
    structure: [
      {
        title: "Características",
        description: [
          {
            tamp: "Productividad en la nube.",
          },
          {
            tamp: "Funciones simplificadas.",
          },
          {
            tamp: "Mejora tu experiencia de correo electrónico con la app móvil.",
          },
        ],
      },
      {
        title: "Beneficios",
        description: [
          {
            tamp: "CONFIANZA",
          },
          {
            tamp: "SEGURIDAD",
          },
          {
            tamp: "MOVILIDAD",
          },
          {
            tamp: "SOPORTE TÉCNICO",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    icon: "https://www.claro.com.pe/assets/havas/cards/card6/icon.png",
    title: "Tienda Virtual",
    sub: "Construye tu página web y crea cuentas de correo con el dominio de tu empresa.",
    description:
      "Es poder mostrar tu empresa al mundo, mediante un sitio web construido de manera rápida y sencilla. Cuentas con una gran variedad de plantillas e imágenes predefinidas de acuerdo al rubro de tu negocio.",
    bgDesktop: "https://www.claro.com.pe/assets/havas/cards/card6/card.png",
    bgTablet: "https://www.claro.com.pe/assets/havas/cards/card6/card-T.png",
    bgMobile: "https://www.claro.com.pe/assets/havas/cards/card6/card-M.png",
    structure: [
      {
        title: "Características",
        description: [
          {
            tamp: "Crea tu sitio web.",
          },
          {
            tamp: "Personaliza con tus propias fotos, logos, textos, entre otros.",
          },
          {
            tamp: "Publica tu sitio web.",
          },
          {
            tamp: "Diseño adaptado para móviles.",
          },
        ],
      },
      {
        title: "Accede a:",
        description: [
          {
            tamp: "Plantillas.",
          },
          {
            tamp: "Dominio.",
          },
          {
            tamp: "Promueve tu negocio.",
          },
          {
            tamp: "Controla tu negocio desde tu Smartphone.",
          },
          {
            tamp: "Diseño de sitios web por expertos.",
          },
        ],
      },
      {
        title: "Beneficios",
        description: [
          {
            tamp: "CREACIÓN.",
          },
          {
            tamp: "CRECIMIENTO.",
          },
          {
            tamp: "CORREO CON DOMINIO PROPIO.",
          },
          {
            tamp: "DIGITALIZA TU NEGOCIO.",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    icon: "https://www.claro.com.pe/assets/havas/cards/card7/icon.png",
    title: "Microsoft 365",
    sub: "Accede a aplicaciones web de office desde donde estes, con el plan Business Basic.",
    description:
      "Permite a los colaboradores de tu empresa trabajar en equipo, contar con las últimas versiones web de las aplicaciones de office como: Outlook, Word, Excel, PowerPoint, Microsoft Teams, Exchange, SharePoint y OneDrive para usarlos en línea desde cualquier dispositivo compatible y con conexión a Internet donde y cuando lo necesiten. Es una herramienta de colaboración por excelencia.",
    bgDesktop: "https://www.claro.com.pe/assets/havas/cards/card7/card.jpg",
    bgTablet: "https://www.claro.com.pe/assets/havas/cards/card7/card-T.png",
    bgMobile: "https://www.claro.com.pe/assets/havas/cards/card7/card-M.png",
    structure: [
      {
        title: "Características",
        description: [
          {
            tamp: "Gestiona tu empresa desde donde estés.",
          },
          {
            tamp: "Tu empresa en cualquier lugar.",
          },
          {
            tamp: "Office en cualquier dispositivo.",
          },
          {
            tamp: "Tus archivos cuando y donde los necesites.",
          },
          {
            tamp: "Reuniones en línea desde cualquier lugar.",
          },
          {
            tamp: "Gestiona tu negocio más fácilmente con Microsoft 365",
          },
        ],
      },
      {
        title: "Beneficios",
        description: [
          {
            tamp: "COMUNICACIÓN",
          },
          {
            tamp: "SEGURIDAD",
          },
          {
            tamp: "PRACTICIDAD",
          },
          {
            tamp: "ORGANIZACIÓN",
          },
          {
            tamp: "INTRANET",
          },
        ],
      },
    ],
  },
];

const app = createApp({
  mounted() {
    //console.log('Mounted from component 1!')
  },
  components: {
    /*carousel: Carousel,
    pagination: Pagination,
    navigation: Navigation,
    slide: Slide*/
  },
  setup() {

    const isMobile = () => screen.width <= 760;

    /* Form */

    const register1 = reactive({
      nombre: "",
      celular: "",
      correo: "",
      empresa: "",
      ruc: "",
      tratamientos: false,
      promociones: false,
    });

    const rules1 = {
      nombre: {
        required,
        name_validation: {
          $validator: validName,
        },
      },
      celular: {
        required,
        numeric,
        name_validation: {
          $validator: validPhone,
        },
        min: minLength(9),
        max: maxLength(9),
      },
      correo: {
        required,
        email,
        name_validation: {
          $validator: validEmail,
        }
      },
      empresa: {
        /*required(val) {
          return val
        }*/
      },
      ruc: {
        /*required(val) {
          return val
        }*/
      },
      tratamientos: {
        required(val) {
          return val;
        },
      },
      promociones: {
        /*required(val) {
          return val
        }*/
      },
    };

    const v1$ = useVuelidate(rules1, {
      nombre: toRef(register1, "nombre"),
      celular: toRef(register1, "celular"),
      correo: toRef(register1, "correo"),
      empresa: toRef(register1, "empresa"),
      ruc: toRef(register1, "ruc"),
      tratamientos: toRef(register1, "tratamientos"),
      promociones: toRef(register1, "promociones"),
    });

    const messageRegister = () => {
      message.value = true;
      setTimeout(function () {
        message.value = false;
      }, 5000);
    };

    const sendRegister = async (params) => {
      try {
        // await axios.post('', params)

        // console.log("response", data)

        // if (data.registro == "ok") {
        //   modal3.value = true
        // } else if (data.registro == true) {
        //   messageRegister()
        // }

        document.getElementById("load_er").classList.remove("over_lay");
      } catch (e) {
        console.log("response error", e);
      }
    };


    const submitForm1 = () => {
      v1$.value.$touch();

      if (v1$.value.$invalid) return;
      document.getElementById("load_er").classList.add("over_lay");
      form1.value.submit();
    };

    const openModal = (id) => {
      dataModal.value = modales.find((e) => e.id === id)
      modal3.value = true;
      setTimeout(() => {
        const accordionItemHeaders = document.querySelectorAll(".clssHV");
        accordionItemHeaders[0].style.borderRadius = "10px 10px 0 0";
        document.querySelectorAll(".cvrDown")[0].classList.add("active");

        accordionItemHeaders.forEach(accordionItemHeader => {
          accordionItemHeader.addEventListener("click", function (e) {
            e.preventDefault();

            accordionItemHeaders.forEach((acs) => {
              acs.style.borderRadius = "10px"
            });
            const arrows = document.querySelectorAll(".cvrDown");
            arrows.forEach((arrow) => {
              arrow.classList.remove("active");
            })
            const panel = this.nextElementSibling;
            if (panel.classList.contains('active')) {
              panel.classList.remove("active");
            } else {
              document.querySelector(".clssDownHV.active")?.classList.remove("active");
              accordionItemHeader.style.borderRadius = '10px 10px 0 0';
              // console.log(accordionItemHeader)
              accordionItemHeader.children[2].classList.add('active')
              panel.classList.add("active");
            }
          });
        });
      }, 100);
    }

    return {
      //...toRefs(state),
      //recaptcha,
      register1,
      submitForm1,
      isNumber,
      form1,
      v1$,
      modal1,
      modal2,
      modal3,
      day,
      message,
      isMobile,
      modales,
      dataModal,
      openModal
    };
  },
});

app.component("custom-modal", modal);
app.mount("#app");
