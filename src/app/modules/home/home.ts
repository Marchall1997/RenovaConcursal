import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ToastrModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  animations: [
    trigger('desplegar', [
      state('cerrado', style({ height: '0', opacity: '0', paddingTop: '0', paddingBottom: '0' })),
      state('abierto', style({ height: '*', opacity: '1', paddingTop: '4px', paddingBottom: '20px' })),
      transition('cerrado => abierto', animate('350ms ease-out')),
      transition('abierto => cerrado', animate('300ms ease-in'))
    ])
  ]
})
export class Home {

  modal!: HTMLElement | null;
  openBtn!: HTMLElement | null;
  closeBtn!: HTMLElement | null;
  successMsg!: HTMLElement | null;
  select!: HTMLElement | null;
  leadForm!: HTMLElement | null;
  toastr = inject(ToastrService);

  constructor() {}

  ngOnInit() {
    this.modal = document.getElementById("leadModal");
    this.openBtn = document.getElementById("openModal");
    this.closeBtn = document.getElementById("closeModal");
    this.successMsg = document.getElementById("successMsg");
    this.select = document.getElementById("deudaSelect");
    this.leadForm = document.getElementById("leadForm");

    this.openBtn!.addEventListener("click", () => {
      this.modal!.classList.add("active");
      this.successMsg!.style.display = "none";
    });

    this.closeBtn!.addEventListener("click", () => {
      this.modal!.classList.remove("active");
    });

    this.modal!.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.modal!.classList.remove("active");
      }
    });

    this.leadForm!.addEventListener("submit", () => {
      setTimeout(() => {
        document.getElementById("leadModal")!.classList.remove("active");
        this.showToast();
        (this.leadForm as HTMLFormElement).reset();
      }, 800);
    });

    this.checkCookies();
  }

  showToast(): void {
    this.toastr.success('Solicitud enviada');
  }

  abrirModal(): void {
    document.getElementById('leadModal')!.classList.add('active');
    document.getElementById('successMsg')!.style.display = 'none';
  }

  checkCookies(): void {
    const cookies = localStorage.getItem('cookiesAceptadas');
    if (!cookies) {
      document.getElementById('cookieBanner')!.style.display = 'flex';
    }
  }

  aceptarCookies(): void {
    localStorage.setItem('cookiesAceptadas', 'true');
    document.getElementById('cookieBanner')!.style.display = 'none';
  }

  rechazarCookies(): void {
    localStorage.setItem('cookiesAceptadas', 'false');
    document.getElementById('cookieBanner')!.style.display = 'none';
  }

  toggleItem(index: number): void {
    this.acordeonItems[index].abierto = !this.acordeonItems[index].abierto;
  }

  toggleItem2(index: number): void {
    this.acordeonItems2[index].abierto = !this.acordeonItems2[index].abierto;
  }

  toggleFaq(index: number): void {
    this.faqItems[index].abierto = !this.faqItems[index].abierto;
  }

  acordeonItems = [
    { titulo: 'Cancelar todas las deudas', contenido: 'Con la Ley de Segunda Oportunidad se pueden llegar a eliminar todo tipo de deudas. Es importante contar con la asistencia de un especialista que pueda analizar tu caso para brindarte la mejor estrategia legal.', lista: [], abierto: false },
    { titulo: 'Máximo de 18 meses para el proceso', contenido: 'El proceso concursal tiene una duración máxima de 18 meses, durante los cuales nuestro equipo gestiona todos los trámites necesarios para la cancelación de tus deudas.', lista: [], abierto: false },
    { titulo: 'Más rápido y más sencillo', contenido: 'La nueva ley simplifica considerablemente el proceso, reduciendo la burocracia y permitiendo una resolución más ágil de tu situación financiera.', lista: [], abierto: false },
    { titulo: 'Mayor protección para la vivienda', contenido: 'La ley incluye mecanismos de protección para que puedas mantener tu vivienda habitual durante y después del proceso de cancelación de deudas.', lista: [], abierto: false },
    { titulo: 'Cancela 20.000€ de deuda pública', contenido: 'Es posible cancelar hasta 20.000€ de deuda pública, incluyendo deudas con Hacienda y la Seguridad Social, gracias a las últimas modificaciones legislativas.', lista: [], abierto: false },
    { titulo: 'Más económico para el deudor', contenido: 'Nuestro proceso está diseñado para ser accesible. Trabajamos con cuotas asequibles y sin necesidad de adelantar grandes cantidades para iniciar el procedimiento.', lista: [], abierto: false }
  ];

  acordeonItems2 = [
    {
      titulo: '¿Cuándo necesito un abogado experto en Ley de Segunda Oportunidad?',
      contenido: 'Siempre es aconsejable la presencia de un abogado experto en Ley de Segunda Oportunidad pues es quien puede reunir la documentación necesaria para presentar la mejor estrategia legal. Te mostramos algunos casos:',
      lista: ['Para salir del Asnef.', 'Cuando tienes deudas de menos de 5 millones de euros.', 'Cuando tienes 10.000 euros o menos de deuda con Hacienda y la Seguridad Social.', 'Cuando quieres librarte de tus deudas y conservar tu propiedad.', 'Cuando eres insolvente y no llegas a fin de mes por las deudas que tienes.'],
      abierto: false
    },
    {
      titulo: 'Requisitos para acogerse a la Ley de Segunda Oportunidad',
      contenido: '',
      lista: ['Ser residente en España.', 'No tener una deuda superior a los cinco millones de euros.', 'No haberse acogido a la Ley de Segunda Oportunidad en los últimos 5 años.', 'No haber cometido infracciones administrativas graves. En caso de tenerlas, hay que abonarlas antes de solicitar la cancelación de deudas.', 'Tener una deuda con dos o más entidades (bancos, financieras, entidades públicas).', 'Ser insolvente.', 'No tener antecedentes penales por delitos socioeconómicos, de falsedad documental, contra el patrimonio, Hacienda o la Seguridad Social o contra los derechos de los trabajadores.'],
      abierto: false
    },
    {
      titulo: 'Cómo te ayudaremos',
      contenido: 'Desde <strong>Renova Concursal</strong> intentamos abarcar los temas más importantes para nuestros usuarios e intentar resolver sus dudas al respecto de una forma muy simple:',
      lista: ['Nos ponemos en contacto contigo.', 'Realizamos preguntas para asegurarnos que cumples con los requisitos básicos para acogerte a la ley.', 'Te asesoramos y explicamos cómo funciona el proceso de Ley de Segunda Oportunidad.', 'Te ayudamos a eliminar todas tus deudas.'],
      abierto: false
    }
  ];

  perfiles = [
    {
      num: '01', tag: 'Particular con varias deudas',
      titulo: 'Tienes deudas en varios sitios y no ves salida',
      intro: 'Banco, financiera, tarjetas, algún recibo atrasado. Llevas meses aplazando y nada mejora. No sabes si lo que te ofrecen tiene base legal o es otro engaño.',
      quote: '"Debo dinero a tres o cuatro sitios distintos. No sé ni por dónde empezar y tengo miedo de que me embarguen."',
      encontraras: 'No tienes que negociar con cada acreedor por separado, la ley agrupa todos tus acreedores en un único procedimiento. Todas las deudas incluidas en el procedimiento quedan sujetas a la misma resolución judicial, independientemente de cuántos acreedores sean.<br><br>Y desde que se apertura el concurso, los embargos individuales se paralizan, es el momento en el que la ley empieza a protegerte de esos embargos.',
      footerText: '¿Tienes deudas en varios sitios y no sabes si tienes salida?', footerCta: 'Cuéntanos tu caso'
    },
    {
      num: '02', tag: 'Autónomo o pequeño empresario',
      titulo: 'Cerraste tu negocio y quedaron deudas sin saldar',
      intro: 'Proveedores, Hacienda, Seguridad Social, préstamos con aval personal. Crees que esta ley no es para ti porque mezclas lo profesional y lo personal.',
      quote: '"Tuve un negocio que no funcionó. Ahora debo a Hacienda, a la Seguridad Social y a varios proveedores. Creo que esta ley es solo para particulares."',
      encontraras: 'La Ley de Segunda Oportunidad no distingue entre particulares y autónomos, ambos son personas físicas y tienen exactamente el mismo acceso al procedimiento, tanto si sigues siendo autónomo como si no.<br><br>La ley permite exonerar deudas con la Agencia Tributaria y con la Seguridad Social hasta un máximo de 10.000 € con cada organismo.',
      footerText: '¿Eres autónomo y no sabes si puedes acogerte?', footerCta: 'Analizamos tu caso'
    },
    {
      num: '03', tag: 'Asalariado con deudas que superan sus posibilidades',
      titulo: 'Tienes trabajo pero tu sueldo no alcanza para pagar todo',
      intro: 'Cobras a fin de mes pero lo que debes es tan elevado que nunca acabarás de pagarlo. Crees que "al tener ingresos" no puedes acogerte.',
      quote: '"Trabajo, pero entre la hipoteca, los préstamos y las tarjetas, no hay manera de llegar. Supongo que esta ley no es para alguien como yo."',
      encontraras: 'La insolvencia que reconoce la ley no significa no tener ningún ingreso. Significa no poder hacer frente regularmente a tus obligaciones de pago.<br><br>Acogerse a la Ley de Segunda Oportunidad no tiene ningún efecto sobre tu contrato de trabajo ni sobre tu relación con tu empresa.',
      footerText: '¿Tienes trabajo pero no puedes con la deuda acumulada?', footerCta: 'Consúltanos sin compromiso'
    },
    {
      num: '04', tag: 'El que ya lo intentó por su cuenta',
      titulo: 'Refinanciaste, pediste esperas, y sigues igual',
      intro: 'Has negociado con el banco, firmado reunificaciones, pedido plazos. Nada funcionó. Llegas convencido de que ya no hay nada más que hacer.',
      quote: '"Ya lo intenté todo. Refinancié, pedí una reunificación y al final acabé debiendo más que antes. No creo que haya solución real."',
      encontraras: 'Cuando refinancias o aceptas una reunificación de deudas, estás alargando el plazo, no exonerándote.<br><br>La Ley de Segunda Oportunidad no aplaza ni renegocia, cuando se concede la Exoneración las deudas incluidas en el procedimiento desaparecen de forma definitiva.',
      footerText: '¿Ya intentaste refinanciar y no funcionó?', footerCta: 'Explícanos tu situación'
    },
    {
      num: '05', tag: 'El que necesita permiso emocional para actuar',
      titulo: 'Llevas tiempo evitando enfrentarte a esto',
      intro: 'Vergüenza, sensación de fracaso, miedo al juicio ajeno. Sabes que necesitas hacer algo, pero no das el paso.',
      quote: '"Llevo meses sin abrir cartas del banco. Sé que tengo que hacer algo pero no sé por dónde empezar y me da vergüenza hablar de esto."',
      encontraras: 'La situación de insolvencia no es un fracaso personal. Es el resultado de circunstancias —económicas, laborales, familiares— que les ocurre a cientos de miles de personas en España.<br><br>El sistema legal reconoce eso y ha creado un mecanismo específicamente diseñado para que puedas salir adelante.',
      footerText: 'Consulta gratuita, sin compromiso, sin papeleo previo', footerCta: 'Quiero empezar'
    }
  ];

  faqItems = [
    { titulo: '¿Quién puede acogerse a la Ley de Segunda Oportunidad?', contenido: 'Cualquier persona física o autónomo.', abierto: false },
    { titulo: '¿Cuánto dura el proceso de la Ley de la Segunda Oportunidad?', contenido: 'Tiene un período de hasta 18 meses máximo para resolverse el caso.', abierto: false },
    { titulo: '¿Cuánto cuesta acogerse a la Ley de la Segunda Oportunidad?', contenido: 'Los costes de la Ley de Segunda Oportunidad pueden oscilar entre los 3.500 y los 8.000 euros, dependiendo de cada caso, situación específica y ciudad.', abierto: false },
    {
      titulo: '¿Cómo afecta la reforma de la Ley Concursal a la Ley de la Segunda Oportunidad?',
      contenido: 'Con la reforma de la ley se introducen cambios significativos. Entre los más importantes, se encuentran:',
      lista: ['Se elimina la figura de mediador concursal y el notario, por lo que el proceso se hace mucho más rápido y se abaratan los costes.', 'Se regula el tema de la vivienda, en este caso se puede o no perder la propiedad según lo que desee el deudor.', 'Se establece un tope de duración del proceso: un máximo de 18 meses.', 'Se incluyen las deudas con Hacienda y Seguridad Social, un máximo de exoneración de 20.000 euros (10.000 euros por cada una respectivamente).'],
      abierto: false
    },
    { titulo: '¿Se puede perder la vivienda con la Ley de Segunda Oportunidad?', contenido: 'La nueva Ley de la Segunda Oportunidad establece que puedes pedir la cancelación de las deudas sin tener que entregar tu vivienda habitual.<br><br>Se podrá pedir directamente al juez la eliminación de deudas sin necesidad de liquidar tu patrimonio. En estos casos, se establecerá un plan de pagos de las deudas restantes de hasta 5 años.', abierto: false },
    { titulo: '¿Cuándo se aplica la Ley de la Segunda Oportunidad?', contenido: 'El procedimiento de L.S.O se aplica cuando cualquier persona física, con o sin actividad empresarial, no puede hacer frente a una situación de deuda, o sea, cuando es insolvente.', abierto: false },
    { titulo: '¿Qué es el EPI?', contenido: 'Es la Exoneración del Pasivo Insatisfecho y es lo que otorga un juez al final del proceso de Ley de Segunda Oportunidad, que exonera de pago, parcial o total, al deudor.', abierto: false },
    {
      titulo: '¿Cuándo prescribe una deuda?',
      contenido: 'Las deudas prescriben en un plazo entre 5 y 20 años, dependiendo del tipo de deuda y siempre y cuando la entidad/organismo a la que se le deba dinero NO manifieste su intención de cobrarla.',
      lista: ['Deuda hipotecaria: 20 años', 'Con Hacienda y Seguridad Social: 4 años', 'Suministros: entre 3 y 5 años', 'Préstamos personales: 5 años', 'Tarjetas de crédito: 5 años', 'Multas: 4 años', 'Alquileres: 5 años'],
      abierto: false
    },
    { titulo: '¿Qué pasa si no puedo pagar una deuda y no tengo bienes?', contenido: 'El tener bienes o no en la Ley de Segunda Oportunidad no es determinante para la exoneración final de las deudas. Al no tener bienes, el juzgado simplemente exonera de pagos al deudor.', abierto: false },
    { titulo: '¿Cuánto me pueden embargar de una nómina?', contenido: 'Pongamos un ejemplo con una nómina de 1.200 euros. Los 1.000 € correspondientes al Salario Mínimo son inembargables. De los 200 euros restantes, se puede embargar el 30% del salario, en este caso 60 € (30% de 200 €).', abierto: false }
  ];

} // ← única llave de cierre