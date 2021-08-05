import { Service } from '@/model/service.model';

export const ListServices : Service[] = [
    {
        title: 'Cambio de Aceite',
        duration: '60 min',
        price: 2000,
        image: '/services/cambioaceite.jpg',
        text: 'Cambio de aceite sintetico o semisintetico segun el recorrido de tu auto + filtro de aire,aceite',
        description:"El intervalo de cambio de aceite para los motores de 4 tiempos puede oscilar entre 5.000 y 15.000 km, dependiendo de las condiciones de uso. Señales que necesitas  el cambio de aceite, La indicación en el tablero no es el único indicador,como tambien el aspecto y textura,  si es opaco y granuloso, está saturado de contaminantes y debe cambiarse."
    },
    {
        title: 'Alineación Y Balanceo',
        duration: '60 min',
        image:'/services/alineacionybalanceo.jpg',
        text: 'Alineación y balanceo 3D con rotación y diagnostico de tren delantero y frenos',
        description:'Se recomienda alinear los autos cada 10,000 kilómetros o dos veces al año. Se recomiendan alinear ambos ejes del vehículo, es decir la parte delantera y la trasera. De esta manera tu vehículo será más seguro y el desgaste más parejo en tus llantas.'
    },
    {
        title: 'Kit Embrague',
        image: '/services/kitembrague.jpg',
        duration:'Hasta dia y medio',
        text: 'Mano de obra de reparación Kit de Embrague,repuestos segun auto a coordinar.',
        description:'la media generalizada y orientativa para un cambio de embrague se sitúa en torno a los 150.000 km, algunos síntomas: \n -	El motor se revoluciona sin aumentar la velocidad \n-    El recorrido del pedal de embrague es más corto de lo habitual o se ha endurecido\n-    Olor a quemado (que puede deberse a cualquier otra avería, por lo que en este caso no debemos eludir ir al taller de confianza más cercano)'
    },
    {
        title: 'Rectificado de Discos',
        image: '/services/rectificadodediscos.jpg',
        duration:'Hasta medio dia',
        text: 'Rectificado de Discos y Tambores con cambio de pastillas segun su desgaste.',
        description:'La acción de frenar nunca es regular, ya sea porque se tuvo que variar la intensidad de la fuerza sobre el pedal de freno durante una emergencia, o porque sencillamente no siempre se va al mismo ritmo (lo cual es normal) y entonces el modo de frenar no es igual. \n Cabe recordar que los discos y los tambores, al igual que las balatas y pastillas de freno, sufren algo de desgaste con el paso del tiempo y también por las exigencias del estilo de conducción de cada persona.'
    },
    {
        title: 'Tren Delantero',
        image: '/services/trendelantero.jpg',
        duration:'Hasta un dia',
        text: 'Mano de Obra reparacion y cambio de Tren delantero, repuestos segun auto a coordinar.',
        description:'Es importante revisar el tren delantero cada 20000 km y reemplazar las piezas en mal estado para que el vehículo se mantenga en buenas condiciones.\nDentro de las piezas a revisar tenemos los axiales o articulaciones, los terminales, las rotulas, las barras link o estabilizadores, los platos de suspensión, los bocines del mismo, también incluye la revisión de los espirales y amortiguadores, las bases de los amortiguadores, puntas de eje, rulemanes.'
    },
    {
        title: 'Reparación de Llantas',
        image: '/services/llantareparacion.jpg',
        duration: 'Desde 3 a 5 dias',
        text: 'Reparacion de Llantas con daños leves y autos tipo sedan o pickup.',
        description:' las reparaciones de llantas son adecuadas solo en el caso de que los daños sean superficiales. En este caso deben limitarse al lijado, reparación de daños leves y la sustitución de recubrimientos de pintura.'
    },
    {
        title: 'Aire Acondicionado',
        duration:'60 min',
        image: '/services/AireAcondicionado.jpeg',
        text: 'Recarga Gas de Aire Acondicionado y diagnostico.',
        description:' Enciende tu vehículo y deja que se caliente lo suficiente. En ese momento deberás encender el aire acondicionado y llevarlo a la temperatura más fría. Al hacerlo deberás escuchar el ruido del compresor encenderse. Si esto no ocurre, apaga el coche y espera un poco a que el motor se enfríe.'
    },
    {
        title: 'Reparación Electrica',
        duration:'Medio dia',
        image: '/services/ventanaselectricas.jpeg',
        text: 'Engrase y rectificado de mecanismo de elevación, revision de fusibles y cables.',
        description:' El cristal lateral es una pieza del coche, a la que no se le suele dar mucha importancia. Cumple su función durante años sin incidencias. Pero puede llegar el día en el que el cristal desaparece en la puerta y todos los intentos de subirlo acaban en un desagradable crujido. Lo que aquí suena muy dramático es generalmente fácil de arreglar. En este artículo le explicaremos todo lo que debería saber sobre la reparación de su cristal lateral.'
    }
]   