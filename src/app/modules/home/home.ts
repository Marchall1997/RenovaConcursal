import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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

  acordeonItems = [
    {
      titulo: 'Cancelar todas las deudas',
      contenido: 'Con la Ley de Segunda Oportunidad se pueden llegar a eliminar todo tipo de deudas. Es importante contar con la asistencia de un especialista que pueda analizar tu caso para brindarte la mejor estrategia legal.',
      lista: [],
      abierto: false
    },
    {
      titulo: 'Máximo de 18 meses para el proceso',
      contenido: 'El proceso concursal tiene una duración máxima de 18 meses, durante los cuales nuestro equipo gestiona todos los trámites necesarios para la cancelación de tus deudas.',
      lista: [],
      abierto: false
    },
    {
      titulo: 'Más rápido y más sencillo',
      contenido: 'La nueva ley simplifica considerablemente el proceso, reduciendo la burocracia y permitiendo una resolución más ágil de tu situación financiera.',
      lista: [],
      abierto: false
    },
    {
      titulo: 'Mayor protección para la vivienda',
      contenido: 'La ley incluye mecanismos de protección para que puedas mantener tu vivienda habitual durante y después del proceso de cancelación de deudas.',
      lista: [],
      abierto: false
    },
    {
      titulo: 'Cancela 20.000€ de deuda pública',
      contenido: 'Es posible cancelar hasta 20.000€ de deuda pública, incluyendo deudas con Hacienda y la Seguridad Social, gracias a las últimas modificaciones legislativas.',
      lista: [],
      abierto: false
    },
    {
      titulo: 'Más económico para el deudor',
      contenido: 'Nuestro proceso está diseñado para ser accesible. Trabajamos con cuotas asequibles y sin necesidad de adelantar grandes cantidades para iniciar el procedimiento.',
      lista: [],
      abierto: false
    }
  ];

  toggleItem(index: number): void {
    this.acordeonItems[index].abierto = !this.acordeonItems[index].abierto;
  }

  acordeonItems2 = [
    {
      titulo: '¿Cuándo necesito un abogado experto en Ley de Segunda Oportunidad?',
      contenido: 'Siempre es aconsejable la presencia de un abogado experto en Ley de Segunda Oportunidad pues es quien puede reunir la documentación necesaria para presentar la mejor estrategia legal. Te mostramos algunos casos:',
    lista: [
      'Para salir del Asnef.',
      'Cuando tienes deudas de menos de 5 millones de euros.',
      'Cuando tienes 10.000 euros o menos de deuda con Hacienda y la Seguridad Social.',
      'Cuando quieres librarte de tus deudas y conservar tu propiedad.',
      'Cuando eres insolvente y no llegas a fin de mes por las deudas que tienes.'
    ],
    abierto: false
  },
    {
      titulo: 'Requisitos para acogerse a la Ley de Segunda Oportunidad',
        contenido: '',
  lista: [
    'Ser residente en España.',
    'No tener una deuda superior a los cinco millones de euros.',
    'No haberse acogido a la Ley de Segunda Oportunidad en los últimos 5 años.',
    'No haber cometido infracciones administrativas graves. En caso de tenerlas, hay que abonarlas antes de solicitar la cancelación de deudas.',
    'Tener una deuda con dos o más entidades (bancos, financieras, entidades públicas).',
    'Ser insolvente.',
    'No tener antecedentes penales por delitos socioeconómicos, de falsedad documental, contra el patrimonio, Hacienda o la Seguridad Social o contra los derechos de los trabajadores.'
  ],
  abierto: false
},
    {
  titulo: 'Cómo te ayudaremos',
  contenido: 'Desde <strong>Renova Concursal</strong> intentamos abarcar los temas más importantes para nuestros usuarios e intentar resolver sus dudas al respecto de una forma muy simple:',
  lista: [
    'Nos ponemos en contacto contigo.',
    'Realizamos preguntas para asegurarnos que cumples con los requisitos básicos para acogerte a la ley.',
    'Te asesoramos y explicamos cómo funciona el proceso de Ley de Segunda Oportunidad.',
    'Te ayudamos a eliminar todas tus deudas.'
  ],
  abierto: false
},
  ];

  toggleItem2(index: number): void {
    this.acordeonItems2[index].abierto = !this.acordeonItems2[index].abierto;
  }

} // ← única llave de cierre, aquí al final