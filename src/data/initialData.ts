import { 
  SavingsGoal, 
  ChecklistItem, 
  DocumentItem, 
  MovingItem, 
  HealthCheckItem, 
  PlantGuide 
} from '../types';

export const INITIAL_SAVINGS_GOALS: SavingsGoal[] = [
  {
    id: 'emergencia-1ano',
    title: 'Fondo de Emergencia: 1 Año de Ahorro',
    category: 'emergencia',
    icon: '🛡️',
    targetAmount: 72000,
    currentAmount: 6000,
    targetMonths: 24,
    notes: '¡El escudo que elimina todo el miedo! Con 1 año de gastos básicos guardados, pase lo que pase duermes en total paz.',
    realCosts: [
      { item: '1er paso: Meta de arranque (1 mes de gastos)', cost: 6000, period: 'único', description: 'Tu primer respiro para que una llanta ponchada o gripe no sea tragedia.' },
      { item: '2do paso: Cojín de seguridad (3 meses)', cost: 18000, period: 'único', description: 'Te da tiempo para cambiar de trabajo o resolver emergencias medias.' },
      { item: '3er paso: Respaldo sólido (6 meses)', cost: 36000, period: 'único', description: 'Tranquilidad real para toda la pareja.' },
      { item: '4to paso: Blindaje total (12 meses / 1 año)', cost: 72000, period: 'único', description: 'Libertad absoluta: si ambos se quedan sin trabajo, tienen 1 año completo para reconstruirse sin deudas.' }
    ]
  },
  {
    id: 'moto-coche',
    title: 'Comprar Coche o Moto Confiable',
    category: 'moto-coche',
    icon: '🚗',
    targetAmount: 45000,
    currentAmount: 8500,
    targetMonths: 12,
    notes: 'Para moverte seguro sin endeudarte con mensualidades asfixiantes. Lo importante es que no te deje tirado.',
    realCosts: [
      { item: 'Moto económica nueva (125cc-150cc)', cost: 28000, period: 'único', description: 'Excelente para empezar: gasta casi nada de gasolina y te mueve rápido.' },
      { item: 'Coche seminuevo confiable (Nissan/Toyota/VW)', cost: 95000, period: 'único', description: 'Recomendamos comprar de contado o dar mínimo 40-50% de enganche.' },
      { item: 'Gasolina mensual promedio', cost: 1400, period: 'mensual', description: 'En moto son aprox $400/mes; en auto compacto $1,400 - $2,200/mes.' },
      { item: 'Seguro con cobertura amplia (vital)', cost: 650, period: 'mensual', description: 'Nunca manejes sin seguro. Un choque sin seguro puede quebrar tus finanzas.' },
      { item: 'Mantenimiento preventivo, aceite y frenos', cost: 350, period: 'mensual', description: 'Apartado mensual prorrateado para el servicio cada 6 meses.' },
      { item: 'Tenencia, placas y verificación anual', cost: 180, period: 'mensual', description: 'Aproximadamente $2,000 al año divididos en 12 meses.' }
    ]
  },
  {
    id: 'casa-depto',
    title: 'Enganche para Casa o Departamento',
    category: 'casa',
    icon: '🏠',
    targetAmount: 180000,
    currentAmount: 15000,
    targetMonths: 36,
    notes: 'Tu propio patrimonio. Comprar con calma, revisando papeles y sin que la mensualidad supere el 30% de sus ingresos.',
    realCosts: [
      { item: 'Valor promedio de departamento inicial', cost: 1200000, period: 'único', description: 'Ejemplo representativo de 2 recámaras en zona accesible.' },
      { item: 'Enganche mínimo recomendado (10% a 20%)', cost: 150000, period: 'único', description: 'Entre más enganche des, menos intereses pagarás al banco.' },
      { item: 'Gastos notariales e impuestos (5% a 7%)', cost: 70000, period: 'único', description: '¡Muchos lo olvidan! Las escrituras y avalúo se pagan de contado al firmar.' },
      { item: 'Mensualidad hipotecaria estimada', cost: 10500, period: 'mensual', description: 'Aprox $10,000 por cada millón financiado a 20 años.' },
      { item: 'Mantenimiento de edificio / privada', cost: 800, period: 'mensual', description: 'Vigilancia, limpieza de áreas comunes y recolección.' },
      { item: 'Colchón de reserva para mudanza y detalles', cost: 25000, period: 'único', description: 'Pintura, cerraduras nuevas y adaptaciones iniciales.' }
    ]
  },
  {
    id: 'bebe-familia',
    title: 'Fondo para Bebé y Familia',
    category: 'bebe',
    icon: '👶',
    targetAmount: 35000,
    currentAmount: 5000,
    targetMonths: 10,
    notes: 'Tener un bebé con paz mental. Todo listo para recibirlo con amor y sin prisas financieras.',
    realCosts: [
      { item: 'Atención del parto (IMSS $0 / Clínica $18,000 / Privado $40,000)', cost: 18000, period: 'único', description: 'Fondo reservado para recibir al bebé en clínica privada accesible o ginecólogo de confianza.' },
      { item: 'Cuna básica, carriola y tina (comprar seminuevo ahorra 70%)', cost: 4500, period: 'único', description: 'Los bebés casi no usan la cuna los primeros meses. ¡Lo de segunda mano impecable es sabio!' },
      { item: 'Pañales y toallitas húmedas al mes', cost: 1100, period: 'mensual', description: 'Aprox 6 a 8 pañales diarios en los primeros 6 meses.' },
      { item: 'Fórmula infantil (si no hay lactancia exclusiva)', cost: 1400, period: 'mensual', description: '2 a 3 latas mensuales si requiere complemento.' },
      { item: 'Pediatra y vacunas del primer año', cost: 900, period: 'mensual', description: 'Consulta mensual + vacunas no cubiertas por la cartilla nacional.' },
      { item: 'Ropa básica de algodón', cost: 500, period: 'mensual', description: 'Crecen cada mes, compra mamelucos básicos de algodón, no trajes caros.' }
    ]
  },
  {
    id: 'mascotas',
    title: 'Fondo de Bienestar para Mascotas',
    category: 'mascota',
    icon: '🐾',
    targetAmount: 12000,
    currentAmount: 2400,
    targetMonths: 6,
    notes: 'Nuestros peluditos merecen salud y comida de calidad. Con un pequeño apartado mensual nunca te pesará un imprevisto.',
    realCosts: [
      { item: 'Alimento de buena calidad (sin exceso de cenizas)', cost: 750, period: 'mensual', description: 'Un buen alimento evita piedras urinarias y problemas hepáticos carísimos a futuro.' },
      { item: 'Vacunas anuales (rábica, múltiple) y desparasitante', cost: 120, period: 'mensual', description: 'Aprox $1,200 al año prorrateados.' },
      { item: 'Arena para gato o bolsas ecológicas', cost: 200, period: 'mensual', description: 'Higiene diaria de la casa y del peludito.' },
      { item: 'Fondo de emergencia veterinaria (ahorro constante)', cost: 350, period: 'mensual', description: 'Para consultas de noche, radiografías o medicamentos si come algo indebido.' }
    ]
  }
];

export const INITIAL_CHECKLIST: ChecklistItem[] = [
  // Dormitorio
  { id: 'dorm-colchon', category: 'Dormitorio', text: 'Colchón cómodo, sábanas limpias y 1 almohada por persona', isNeeded: true, checked: false, priority: 'dia1', reason: 'Si no descansas bien, no rindes en el trabajo ni tienes energía para independizarte.' },
  { id: 'dorm-cortina', category: 'Dormitorio', text: 'Cortinas sencillas o sábana colgada para privacidad', isNeeded: true, checked: false, priority: 'dia1', reason: 'Privacidad y poder dormir sin que te dé la luz de la calle en la cara.' },
  { id: 'dorm-perchero', category: 'Dormitorio', text: 'Un perchero sencillo o cajonera económica para ropa', isNeeded: true, checked: false, priority: 'dia1', reason: 'Un perchero de $150-$250 mantiene tu ropa de trabajo lista sin arrugarse.' },
  { id: 'dorm-cama-lujo', category: 'Dormitorio', text: 'Cabecera de lujo tapizada, base de madera cara y alfombras peludas', isNeeded: false, checked: false, priority: 'nunca', reason: 'El colchón sobre una base económica o tarima sirve igual. Guarda ese dinero para emergencias.' },
  { id: 'dorm-espejo-gigante', category: 'Dormitorio', text: 'Espejo gigante de cuerpo entero con marco dorado', isNeeded: false, checked: false, priority: 'nunca', reason: 'Un espejo chico de pared de $80 basta para arreglarte.' },
  { id: 'dorm-closet-enorme', category: 'Dormitorio', text: 'Ropero o clóset armable de 4 puertas carísimo', isNeeded: false, checked: false, priority: 'nunca', reason: 'Muy pesado de mover si vuelven a cambiar de casa. Mejor cajoneras prácticas.' },

  // Cocina
  { id: 'coc-platos', category: 'Cocina', text: '2 platos, 2 vasos y 2 juegos de cubiertos por persona', isNeeded: true, checked: false, priority: '7dias', reason: 'Lo justo para desayunar y cenar sin acumular torres de trastes sucios.' },
  { id: 'coc-sarten-olla', category: 'Cocina', text: '1 sartén antiadherente mediano y 1 olla mediana con tapa', isNeeded: true, checked: false, priority: '7dias', reason: 'Puedes hacer huevos, freír, hacer sopa, arroz y calentar caldos. ¡Cocina el 90% con esto!' },
  { id: 'coc-limpieza', category: 'Cocina', text: 'Esponja, jabón líquido para trastes y 2 trapos de microfibra', isNeeded: true, checked: false, priority: '7dias', reason: 'Mantener la cocina sin grasa desde el día uno evita cucarachas.' },
  { id: 'coc-toppers', category: 'Cocina', text: '3 o 4 recipientes (tuppers) herméticos para guardar comida', isNeeded: true, checked: false, priority: '7dias', reason: 'Cocinas una vez y comes 2 días. El mayor ahorro de dinero en una pareja.' },
  { id: 'coc-vajilla-completa', category: 'Cocina', text: 'Vajilla de 24 piezas de porcelana y copas de cristal', isNeeded: false, checked: false, priority: 'nunca', reason: 'Se rompen fácil y no tienes invitados de gala la primera semana.' },
  { id: 'coc-bateria-12ollas', category: 'Cocina', text: 'Juego de 12 ollas de acero quirúrgico de catálogo', isNeeded: false, checked: false, priority: 'nunca', reason: 'Te endeudas a 18 meses por ollas que nunca vas a usar.' },
  { id: 'coc-licuadora-carisima', category: 'Cocina', text: 'Robot de cocina o licuadora industrial de 10 velocidades', isNeeded: false, checked: false, priority: 'meses', reason: 'Una licuadora básica de 2 velocidades de $350 o de segunda mano hace la misma salsa.' },

  // Baño
  { id: 'bano-toallas', category: 'Baño', text: '2 toallas de baño para cuerpo y 1 para manos', isNeeded: true, checked: false, priority: 'dia1', reason: 'Imprescindible para bañarte seco y no tener malos olores.' },
  { id: 'bano-aseo', category: 'Baño', text: 'Jabón neutro, champú, cepillo y pasta dental', isNeeded: true, checked: false, priority: 'dia1', reason: 'Tu higiene diaria básica.' },
  { id: 'bano-papel', category: 'Baño', text: 'Papel higiénico y toallas sanitarias / higiene femenina', isNeeded: true, checked: false, priority: 'dia1', reason: 'No puedes pasar la primera noche sin papel de baño.' },
  { id: 'bano-cubeta', category: 'Baño', text: 'Cubeta, jerga/trapeador y desinfectante', isNeeded: true, checked: false, priority: '7dias', reason: 'Para mantener el baño impecable y oler a limpio siempre.' },
  { id: 'bano-accesorios-lujo', category: 'Baño', text: 'Juego de cerámica para jabonera y cepillos a juego', isNeeded: false, checked: false, priority: 'nunca', reason: 'Solo se cae y se rompe. Usa un vasito limpio mientras tanto.' },
  { id: 'bano-tapete-peludo', category: 'Baño', text: 'Tapete de baño peludo decorativo', isNeeded: false, checked: false, priority: 'nunca', reason: 'Guarda humedad y hongos. Una toalla vieja doblada funciona mejor y se lava fácil.' },

  // Sala
  { id: 'sala-mesa-sillas', category: 'Sala', text: '1 mesa pequeña con 2 sillas (plegables sirven perfecto)', isNeeded: true, checked: false, priority: '7dias', reason: 'Comer sentados juntos en mesa dignifica el hogar y te da espacio para usar tu laptop.' },
  { id: 'sala-luz', category: 'Sala', text: 'Focos LED ahorradores en cada habitación', isNeeded: true, checked: false, priority: 'dia1', reason: 'Muchos departamentos en renta vienen sin focos. ¡Lleva 3 o 4 focos el día 1!' },
  { id: 'sala-sofa-lujo', category: 'Sala', text: 'Sala modular seccional de 3 piezas nueva de tienda departamental', isNeeded: false, checked: false, priority: 'nunca', reason: 'Cuesta $15,000 - $30,000. Dos cojines grandes o un futón económico son suficientes.' },
  { id: 'sala-pantalla-enorme', category: 'Sala', text: 'Televisión de 65 pulgadas con mueble flotante', isNeeded: false, checked: false, priority: 'nunca', reason: 'Tu celular o laptop te permite ver series. Comprar tele a 24 meses te quita paz.' },
  { id: 'sala-adornos-cuadros', category: 'Sala', text: 'Cuadros caros, floreros de cristal y figuritas de adorno', isNeeded: false, checked: false, priority: 'nunca', reason: 'Las paredes limpias dan sensación de amplitud. Adornarás cuando ya tengas ahorros.' },

  // Patio / Balcón
  { id: 'patio-macetas', category: 'Patio / Balcón', text: 'Macetitas recicladas o económicas para hierbas frescas', isNeeded: true, checked: false, priority: 'meses', reason: 'Tener cilantro y albahaca viva alegra el espíritu y te ahorra mandado.' },
  { id: 'patio-muebles-jardin', category: 'Patio / Balcón', text: 'Muebles de teca para exterior, asador de gas y fuentes', isNeeded: false, checked: false, priority: 'nunca', reason: 'Carísimos y se dañan con la lluvia y el sol. Una silla plegable afuera es igual de relajante.' },

  // Para ti y tu pareja
  { id: 'pareja-comunicacion', category: 'Para ti y tu pareja', text: 'Cuaderno o app para anotar gastos y hablar de dinero sin enojarse', isNeeded: true, checked: false, priority: 'dia1', reason: 'Hablar de dinero una vez al mes con cariño evita el 90% de peleas de pareja.' },
  { id: 'pareja-salidas-caras', category: 'Para ti y tu pareja', text: 'Cenas en restaurantes caros todos los fines de semana', isNeeded: false, checked: false, priority: 'nunca', reason: 'Cocinar juntos en casa una pizza casera con vino barato es más romántico y cuesta un tercio.' },

  // Para el bebé (si aplica)
  { id: 'bebe-basico', category: 'Para el bebé', text: 'Pañales por talla, mamelucos de algodón sencillos, cobijitas térmicas', isNeeded: true, checked: false, priority: 'dia1', reason: 'Lo que el bebé realmente necesita: calor, alimento, pañal seco y mucho amor.' },
  { id: 'bebe-ropa-marca', category: 'Para el bebé', text: 'Zapatos de diseñador para recién nacido y trajecitos incómodos', isNeeded: false, checked: false, priority: 'nunca', reason: 'Los zapatos deforman sus piecitos y la ropa de marca le durará escasas 3 semanas.' },
  { id: 'bebe-calentador-toallitas', category: 'Para el bebé', text: 'Calentador eléctrico de toallitas húmedas y cuna con Bluetooth', isNeeded: false, checked: false, priority: 'nunca', reason: 'Aparatos que terminan acumulando polvo en un rincón.' },

  // Para mascotas
  { id: 'mascota-platos-comida', category: 'Para mascotas', text: 'Platos de acero inoxidable para agua y croquetas buenas', isNeeded: true, checked: false, priority: 'dia1', reason: 'El acero inoxidable no guarda bacterias y las buenas croquetas evitan enfermedades.' },
  { id: 'mascota-ropa-lujo', category: 'Para mascotas', text: 'Disfraces caros, carriola para perros y perfumes caninos', isNeeded: false, checked: false, priority: 'nunca', reason: 'A tu mascota le importa tu cariño, pasear oliendo el pasto y comida rica.' }
];

export const INITIAL_DOCUMENTS: DocumentItem[] = [
  // Para rentar
  {
    id: 'doc-renta-contrato',
    name: 'Contrato de Arrendamiento Firmado',
    category: 'rentar',
    urgency: 'vital',
    cost: 'Gratis (lo redacta el arrendador) o $1,500 - $3,500 si usan póliza jurídica',
    where: 'Lo firman tú y el dueño de la casa/departamento en persona',
    whatIsIt: 'El documento legal donde se especifica cuánto vas a pagar de renta, qué día, cuánto dura el contrato (normalmente 1 año) y las reglas de convivencia.',
    whatIsItFor: 'Protege tu techo. El dueño NO puede subirte la renta a la mitad del año ni sacarte de un día para otro sin justificación legal.',
    friendTip: '¡Lee todo antes de firmar! Revisa que especifique quién paga las reparaciones mayores (fugas de agua ocultas, bomba de agua) que le tocan al dueño. Toma fotos y videos de cómo te entregan el departamento antes de meter tus cosas.'
  },
  {
    id: 'doc-renta-comprobante-dueno',
    name: 'Documentos del Propietario (¡Para que no te estafen!)',
    category: 'rentar',
    urgency: 'vital',
    cost: 'Gratis (debe mostrártelos él)',
    where: 'Pídeselos amablemente al dueño antes de transferir dinero',
    whatIsIt: 'Copia de su INE y última boleta predial o comprobante de que realmente es el dueño o apoderado legal del inmueble.',
    whatIsItFor: 'Evita la estafa más común: personas que rentan un Airbnb por 2 días, lo publican en Facebook como suyo, cobran 2 meses de depósito a 10 personas y desaparecen.',
    friendTip: 'Si te dicen: "Deposítame el apartado ahorita porque hay 5 personas interesadas y luego te muestro el depa", ¡SAL DE AHÍ CORRIENDO! Nunca des un peso sin ver el lugar por dentro con la llave en mano.'
  },
  {
    id: 'doc-renta-deposito',
    name: 'Depósito en Garantía (1 a 2 meses) y Recibo',
    category: 'rentar',
    urgency: 'vital',
    cost: 'Equivalente a 1 o 2 meses de renta (ej. $6,000 - $12,000)',
    where: 'Se entrega al dueño al firmar el contrato',
    whatIsIt: 'Un dinero que el dueño guarda durante todo el año para asegurar que le entregues el departamento pintado y sin daños al terminar el contrato.',
    whatIsItFor: 'Te garantiza el arrendamiento y te lo DEBEN DEVOLVER íntegro al terminar el contrato si entregas el depa limpio y con recibos de luz y agua pagados.',
    friendTip: 'Pide SIEMPRE un recibo firmado que diga textualmente: "Recibí $X por concepto de Depósito en Garantía del inmueble ubicado en...". Guarda comprobante de transferencia con la leyenda clara.'
  },
  {
    id: 'doc-renta-comprobante-ingresos',
    name: 'Comprobante de Ingresos (Nómina o Estados de Cuenta)',
    category: 'rentar',
    urgency: 'vital',
    cost: 'Gratis (los descargas de tu app bancaria o Recursos Humanos)',
    where: 'Tus últimos 3 recibos de nómina timbrados (CFDI) o tus últimos 3 estados de cuenta bancarios',
    whatIsIt: 'La prueba de que recibes dinero suficiente para pagar la renta sin quedarte sin comer.',
    whatIsItFor: 'Los arrendadores y aseguradoras piden que tus ingresos (o los de la pareja juntos) sean de 2.5 a 3 veces el valor de la renta.',
    friendTip: 'Si trabajas por tu cuenta (freelance / negocio propio), los estados de cuenta bancarios donde se vean tus depósitos mensuales sirven perfectamente.'
  },

  // Oficiales de identidad
  {
    id: 'doc-oficial-ine',
    name: 'Credencial para Votar (INE / IFE)',
    category: 'oficial',
    urgency: 'vital',
    cost: '100% GRATIS',
    where: 'Módulo del INE con cita previa en ine.mx',
    whatIsIt: 'Tu identificación oficial con fotografía más aceptada en todo México y el extranjero.',
    whatIsItFor: 'Para todo: firmar contratos, abrir cuentas bancarias, recoger paquetes, trámites del trabajo y votar.',
    friendTip: 'Revisa la fecha de vigencia al frente o al reverso. Si dice que vence este año, saca cita ya porque las citas a veces tardan 2 a 3 semanas.'
  },
  {
    id: 'doc-oficial-rfc',
    name: 'RFC y Constancia de Situación Fiscal (SAT)',
    category: 'oficial',
    urgency: 'vital',
    cost: '100% GRATIS',
    where: 'Portal sat.gob.mx o app SAT Móvil (con tu contraseña o e.firma)',
    whatIsIt: 'Tu Registro Federal de Contribuyentes con homoclave única ante Hacienda.',
    whatIsItFor: 'Obligatorio para que cualquier trabajo formal te pague tu sueldo, para emitir facturas y abrir cuentas bancarias de crédito.',
    friendTip: 'No le tengas miedo al SAT. Si solo eres asalariado, tu patrón retiene tus impuestos automáticamente. Puedes tramitar tu e.firma gratis en oficinas del SAT para hacer trámites desde tu cel.'
  },
  {
    id: 'doc-oficial-curp',
    name: 'CURP Certificada por el Registro Civil',
    category: 'oficial',
    urgency: 'vital',
    cost: '100% GRATIS',
    where: 'En línea en gob.mx/curp',
    whatIsIt: 'Clave Única de Registro de Población. Verifica que abajo a la derecha diga: "CURP Certificada: Verificada con el Registro Civil".',
    whatIsItFor: 'Para darte de alta en el IMSS, escuelas, pasaporte y trámites de gobierno.',
    friendTip: 'Descárgala en PDF a tu celular y guárdala en una carpeta en la nube (Google Drive o iCloud) para tenerla siempre a la mano.'
  },
  {
    id: 'doc-oficial-acta',
    name: 'Acta de Nacimiento Actualizada en Línea',
    category: 'oficial',
    urgency: 'importante',
    cost: 'Aprox $50 a $130 MXN (según tu estado de nacimiento)',
    where: 'gob.mx/actanacimiento (se paga con tarjeta y se descarga de inmediato)',
    whatIsIt: 'La copia certificada digital de tu nacimiento con código QR oficial.',
    whatIsItFor: 'Matrimonio civil, pasaporte, herencias, créditos Infonavit/Fovissste y trámites notariales.',
    friendTip: 'Ya no necesitas ir al Registro Civil de tu pueblo o ciudad natal; la descargas en PDF con código QR y es legalmente válida impresa en papel blanco común.'
  },
  {
    id: 'doc-oficial-imss',
    name: 'Número de Seguridad Social (NSS) y Alta en Clínica UMF',
    category: 'oficial',
    urgency: 'vital',
    cost: '100% GRATIS',
    where: 'App IMSS Digital o portal imss.gob.mx',
    whatIsIt: 'Tu registro único como derechohabiente ante el Seguro Social para recibir atención médica y cotizar semanas para retiro e Infonavit.',
    whatIsItFor: 'Consultas médicas gratuitas, medicamentos, urgencias, incapacidades pagadas por maternidad o enfermedad, y acumulación de puntos para casa.',
    friendTip: 'En cuanto te mudes de casa, entra a la app IMSS Digital y haz tu "Cambio de Clínica" a la UMF (Unidad de Medicina Familiar) más cercana a tu nuevo hogar. Así, si te enfermas, ya estás dado de alta.'
  },

  // Trabajo y Bancos
  {
    id: 'doc-banco-debito',
    name: 'Cuenta de Débito Sin Comisiones',
    category: 'trabajo-banco',
    urgency: 'vital',
    cost: '100% GRATIS (sin saldo mínimo obligatorio)',
    where: 'Cualquier banco digital o tradicional (ej. Nu, Hey Banco, BBVA Libretón Básico, Mercado Pago, Banorte)',
    whatIsIt: 'Tu tarjeta y cuenta digital para recibir tu dinero de manera segura sin cargar efectivo.',
    whatIsItFor: 'Para recibir tu nómina, pagar servicios desde tu celular y hacer transferencias SPEI al instante sin costo.',
    friendTip: 'Nunca aceptes una cuenta que te cobre "comisión por manejo de cuenta" o que te obligue a mantener $4,000 guardados. Por ley, todos los bancos en México deben ofrecer una cuenta básica sin comisiones.'
  },
  {
    id: 'doc-banco-buro',
    name: 'Reporte de Buró de Crédito Especial',
    category: 'trabajo-banco',
    urgency: 'importante',
    cost: '1 reporte GRATIS cada 12 meses en burodecredito.com.mx',
    where: 'Portal oficial burodecredito.com.mx (cuidado con páginas falsas que cobran)',
    whatIsIt: 'El historial que muestra si pagas a tiempo tus tarjetas, plan de celular o préstamos.',
    whatIsItFor: 'Tener buen score crediticio (más de 650 puntos) te permite sacar un coche o casa con las tasas de interés más baratas del mercado.',
    friendTip: 'El Buró no es una lista negra: ¡es tu currículum financiero! Si pagas a tiempo tu plan de celular o una tarjeta garantizada pequeña, tu score sube y los bancos te prestan con gustos.'
  },
  {
    id: 'doc-banco-afore',
    name: 'Localización y Registro de tu AFORE',
    category: 'trabajo-banco',
    urgency: 'importante',
    cost: '100% GRATIS',
    where: 'App AforeMóvil o e-sar.com.mx con tu NSS y CURP',
    whatIsIt: 'La Administradora de Fondos para el Retiro donde se guarda un porcentaje de tu sueldo para cuando seas viejito.',
    whatIsItFor: 'Tu dinero genera rendimientos con interés compuesto. Entre más joven elijas una AFORE con buenos rendimientos, ¡más millones tendrás al jubilarte!',
    friendTip: 'Si empezaste a trabajar y nunca elegiste Afore, el gobierno te asignó una provisional. Descarga la app AforeMóvil y regístrate en una de las que dan mejores rendimientos netos (ej. Profuturo, Sura).'
  },

  // Para comprar casa a futuro
  {
    id: 'doc-casa-escritura',
    name: 'Escritura Pública y Libertad de Gravamen',
    category: 'comprar-casa',
    urgency: 'futuro',
    cost: 'La búsqueda de Libertad de Gravamen cuesta aprox $400 - $800 en el Registro Público',
    where: 'Registro Público de la Propiedad (RPP) de tu ciudad',
    whatIsIt: 'El documento notarial que avala quién es el dueño legal y un certificado que demuestra que la propiedad no tiene deudas pendientes con bancos ni embargos.',
    whatIsItFor: 'Garantiza que nadie te va a quitar tu casa ni vas a heredar pleitos legales de otra persona.',
    friendTip: 'Jamás compres una casa "en contrato privado" o con "papelito firmado entre conocidos". Si no pasa por un Notario Público registrado, legalmente no es tuya.'
  },
  {
    id: 'doc-casa-avaluo',
    name: 'Avalúo Comercial Oficial y Planos',
    category: 'comprar-casa',
    urgency: 'futuro',
    cost: '$2,500 a $6,000 (lo hace un perito valuador autorizado)',
    where: 'A través del banco, Infonavit o despacho de peritos autorizados',
    whatIsIt: 'Un estudio técnico que revisa los metros cuadrados reales, calidad de cimientos, tuberías y precio real de mercado de la casa.',
    whatIsItFor: 'Evita que pagues de más por una propiedad con problemas estructurales o que no vale lo que pide el vendedor.',
    friendTip: 'El valuador revisa si los metros construidos coinciden con el plano municipal. Si hicieron cuartos extras sin permiso, el banco no te dará crédito hasta regularizarlo.'
  }
];

export const INITIAL_MOVING_CHECKLIST: MovingItem[] = [
  // 🔴 DÍA 1 — LO IMPRESCINDIBLE PARA DORMIR Y DESCANSAR
  { id: 'mov-1', phase: 'dia1', category: 'dormitorio', name: 'Colchón, sábanas, cobijas y 1 almohada por persona', isNeeded: true, priceLevel: 'normal', estimatedCost: '$2,500 - $6,000', advice: 'El colchón sobre el suelo limpio o una base económica es suficiente para dormir como reyes la primera noche.' },
  { id: 'mov-2', phase: 'dia1', category: 'dormitorio', name: 'Cortinas o sábana para cubrir la ventana (privacidad vital)', isNeeded: true, priceLevel: 'barato', estimatedCost: '$80 - $250', advice: 'Una sábana sujetada con pinzas o cinta adhesiva funciona perfecto mientras compras cortinas.' },
  { id: 'mov-3', phase: 'dia1', category: 'dormitorio', name: 'Un perchero o cómoda sencilla para la ropa', isNeeded: true, priceLevel: 'barato', estimatedCost: '$180 - $450', advice: 'Mantiene tu ropa de trabajo limpia y evita que vivas entre maletas abiertas.' },
  { id: 'mov-4', phase: 'dia1', category: 'baño', name: 'Papel higiénico, jabón de tocador y toallas secas', isNeeded: true, priceLevel: 'barato', estimatedCost: '$120 - $200', advice: 'Llévalos en una mochila especial de mano para no buscarlos entre cajas sudado al llegar.' },
  { id: 'mov-5', phase: 'dia1', category: 'dormitorio', name: '❌ Cama gigante cara, espejos grandes, alfombras o clóset de lujo', isNeeded: false, priceLevel: 'caro', estimatedCost: '$15,000+', advice: 'NO te endeudes antes de mudarte. Dormirás igual de rico en un colchón básico sin deudas.' },

  // 🟡 PRIMEROS 7 DÍAS — LO BÁSICO PARA VIVIR CÓMODA
  { id: 'mov-6', phase: '7dias', category: 'cocina', name: '2 platos, 2 vasos y 2 juegos de cubiertos por persona', isNeeded: true, priceLevel: 'barato', estimatedCost: '$150 - $300', advice: 'No necesitas una vajilla de 24 piezas. Con esto comen y cenan diario sin acumular platos.' },
  { id: 'mov-7', phase: '7dias', category: 'cocina', name: '1 sartén antiadherente y 1 olla mediana con tapa', isNeeded: true, priceLevel: 'barato', estimatedCost: '$300 - $600', advice: 'Para cocinar huevos, arroz, quesadillas, pastas y caldos. ¡El 90% de sus comidas aquí!' },
  { id: 'mov-8', phase: '7dias', category: 'cocina', name: 'Esponja, jabón para trastes y trapo de cocina', isNeeded: true, priceLevel: 'barato', estimatedCost: '$60 - $100', advice: 'Mantener la tarja limpia diario evita malos olores e insectos.' },
  { id: 'mov-9', phase: '7dias', category: 'cocina', name: 'Basurero pequeño con bolsa y recipientes herméticos (tuppers)', isNeeded: true, priceLevel: 'barato', estimatedCost: '$120 - $250', advice: 'Cocinar en cantidad para 2 días y guardar comida es el secreto para ahorrar dinero.' },
  { id: 'mov-10', phase: '7dias', category: 'cocina', name: '❌ Vajilla completa, juego de 10 ollas, licuadora de lujo, microondas gigante', isNeeded: false, priceLevel: 'caro', estimatedCost: '$6,000+', advice: 'Puedes calentar en el sartén y usar platos básicos. Espera a estabilizar tus gastos.' },
  { id: 'mov-11', phase: '7dias', category: 'baño', name: 'Toallas de cuerpo y manos, jabón, champú, cepillo y pasta', isNeeded: true, priceLevel: 'barato', estimatedCost: '$250 - $450', advice: 'Ten un estuche de aseo para cada quien.' },
  { id: 'mov-12', phase: '7dias', category: 'baño', name: 'Cubeta, jerga, trapeador y desinfectante', isNeeded: true, priceLevel: 'barato', estimatedCost: '$150 - $250', advice: 'Trapear tu departamento antes de meter las cosas da una sensación de hogar fresco inigualable.' },
  { id: 'mov-13', phase: '7dias', category: 'baño', name: '❌ Cortina de baño cara de tela, alfombra peluda y accesorios decorativos', isNeeded: false, priceLevel: 'caro', estimatedCost: '$800+', advice: 'Una cortina de plástico de $45 cumple exactamente la misma función sin pudrirse.' },
  { id: 'mov-14', phase: '7dias', category: 'sala', name: '1 mesa pequeña + 2 sillas (las plegables sirven perfecto)', isNeeded: true, priceLevel: 'barato', estimatedCost: '$600 - $1,200', advice: 'Una mesita pequeña te da lugar para comer juntos, trabajar en la computadora y platicar.' },
  { id: 'mov-15', phase: '7dias', category: 'sala', name: 'Focos ahorradores de luz cálida o blanca', isNeeded: true, priceLevel: 'barato', estimatedCost: '$100 - $200', advice: 'Muchos depas no traen focos. Compra un paquete de 4 focos LED de 9W.' },
  { id: 'mov-16', phase: '7dias', category: 'sala', name: '❌ Sofá grande nuevo, pantalla gigante, mueble de TV y adornos', isNeeded: false, priceLevel: 'caro', estimatedCost: '$18,000+', advice: 'Tu celular o laptop funcionan perfecto para ver películas juntos en la cama.' },

  // 🟢 UNOS MESES DESPUÉS — CUANDO TENGAS DINERO EXTRA
  { id: 'mov-17', phase: 'meses', category: 'patio', name: 'Macetas económicas para tu huerto, palita y regadera sencilla', isNeeded: true, priceLevel: 'barato', estimatedCost: '$150 - $300', advice: 'Tus plantitas te darán comida fresca y aromaterapia natural en tu ventana o balcón.' },
  { id: 'mov-18', phase: 'meses', category: 'patio', name: '❌ Muebles de exterior caros, asador de gas de lujo y fuentes decorativas', isNeeded: false, priceLevel: 'caro', estimatedCost: '$7,000+', advice: 'Una silla plegable al sol te da el mismo relax.' },
  { id: 'mov-19', phase: 'meses', category: 'sala', name: 'Un sofá usado en excelente estado o futón económico', isNeeded: true, priceLevel: 'normal', estimatedCost: '$1,800 - $3,500', advice: 'Busca en grupos locales de segunda mano; la gente vende sillones casi nuevos a mitad de precio.' },
  { id: 'mov-20', phase: 'meses', category: 'sala', name: 'Estantes sencillos o repisas flotantes para organizar libros y cosas', isNeeded: true, priceLevel: 'barato', estimatedCost: '$350 - $800', advice: 'Aprovecha las paredes para ganar espacio sin saturar el piso.' },
  { id: 'mov-21', phase: 'meses', category: 'cocina', name: 'Microondas o licuadora básica confiable', isNeeded: true, priceLevel: 'normal', estimatedCost: '$700 - $1,500', advice: 'Ahora sí, te ahorrarán tiempo para calentar la comida de la semana.' },

  // ⛔ NUNCA AL PRINCIPIO — NO ES URGENTE, PUEDES ESPERAR MESES O AÑOS
  { id: 'mov-22', phase: 'nunca', category: 'extras', name: '❌ Sala completa nueva comprada a meses sin intereses en tienda departamental', isNeeded: false, priceLevel: 'caro', estimatedCost: '$18,000+', advice: 'Con mesa y sillas o futón basta.' },
  { id: 'mov-23', phase: 'nunca', category: 'extras', name: '❌ Cuadros, adornos, espejos gigantes de marco grueso', isNeeded: false, priceLevel: 'caro', estimatedCost: '$3,000+', advice: 'Las paredes limpias se ven bonitas, modernas y no acumulan polvo.' },
  { id: 'mov-24', phase: 'nunca', category: 'extras', name: '❌ Guardarropa o clóset de 4 puertas pesado', isNeeded: false, priceLevel: 'caro', estimatedCost: '$5,000+', advice: 'Un perchero metálico de $200 o cajonera plástica funciona igual.' },
  { id: 'mov-25', phase: 'nunca', category: 'extras', name: '❌ Televisión de 65 pulgadas + teatro en casa', isNeeded: false, priceLevel: 'caro', estimatedCost: '$14,000+', advice: 'Tu cel o compu te sirven para todo los primeros meses.' },
  { id: 'mov-26', phase: 'nunca', category: 'extras', name: '❌ Comedor de 6 sillas para visitas', isNeeded: false, priceLevel: 'caro', estimatedCost: '$8,000+', advice: 'Ocupa muchísimo espacio y casi nunca viene tanta gente a cenar.' },
  { id: 'mov-27', phase: 'nunca', category: 'extras', name: '❌ Cortinas de terciopelo o lujo con cortinero de metal forjado', isNeeded: false, priceLevel: 'caro', estimatedCost: '$2,500+', advice: 'Una tela sencilla o cortinero de tubo plástico de $80 se ve limpio y acogedor.' },
  { id: 'mov-28', phase: 'nunca', category: 'extras', name: '❌ Aspiradora robot o trapeador eléctrico inteligente', isNeeded: false, priceLevel: 'caro', estimatedCost: '$4,500+', advice: 'Trapo, escoba y cubeta de $150 limpian hasta mejor en espacios pequeños.' }
];

export const INITIAL_HEALTH_CHECKS: HealthCheckItem[] = [
  {
    id: 'salud-general',
    name: 'Chequeo General Anual (Química Sanguínea + Biometría + Orina)',
    category: 'general',
    frequency: '1 vez al año (en ayuno de 8 a 12 horas)',
    cheapOption: { place: 'Salud Digna / Centros de Salud Públicos', price: '$220 - $350 MXN' },
    normalOption: { place: 'Laboratorios locales certificados / Chopo / Olarte', price: '$650 - $1,100 MXN' },
    expensiveOption: { place: 'Hospitales privados de prestigio (Ángeles / Médica Sur)', price: '$2,500 - $5,000 MXN' },
    whyImportant: 'Detecta anemia, diabetes temprana, colesterol, triglicéridos, ácido úrico y funcionamiento del riñón e hígado antes de que sientas ningún síntoma.',
    friendAdvice: '¡No le tengas miedo a los piquetes! En Salud Digna puedes agendar por WhatsApp o en su página web pagando con descuento. Te dan los resultados en PDF en tu celular esa misma tarde.'
  },
  {
    id: 'salud-vista',
    name: 'Examen de la Vista y Lentes Graduados',
    category: 'vista',
    frequency: 'Cada 1 o 2 años (o si tienes dolor de cabeza al usar pantallas)',
    cheapOption: { place: 'Salud Digna / Ópticas comunitarias / DIF', price: 'Examen GRATIS + Lentes desde $350 MXN' },
    normalOption: { place: 'Ópticas Devlyn / Lux / Ben & Frank', price: 'Lentes completos $1,200 - $2,200 MXN' },
    expensiveOption: { place: 'Clínicas oftalmológicas de lujo', price: '$4,500 - $9,000 MXN' },
    whyImportant: 'Forzar la vista causa migrañas, cansancio y bajo rendimiento laboral. Ver claro cambia tu vida.',
    friendAdvice: 'No compres lentes de farmacia pre-graduados. En Salud Digna o el DIF el examen computarizado te lo hacen gratis al mandar hacer armazones económicos y bonitos.'
  },
  {
    id: 'salud-dental',
    name: 'Limpieza Dental con Ultrasonido y Revisión de Caries',
    category: 'dental',
    frequency: 'Cada 6 meses (máximo 1 vez al año)',
    cheapOption: { place: 'Clínicas Universitarias de Odontología (UNAM/UAM/Estatales) o IMSS', price: '$100 - $250 MXN' },
    normalOption: { place: 'Consultorio dental privado de colonia', price: '$400 - $700 MXN' },
    expensiveOption: { place: 'Clínicas de estética dental de zona residencial', price: '$1,500 - $3,000 MXN' },
    whyImportant: 'Una caries chiquita se cura con una resina de $400. Si la dejas pasar por miedo, se convierte en endodoncia y corona de $5,000 o pierdes el diente.',
    friendAdvice: 'Dile al dentista: "Tengo un presupuesto medido, ¿puede hacerme un plan de prioridades de lo más urgente a lo que puede esperar?". Un dentista honesto te cuidará el bolsillo.'
  },
  {
    id: 'salud-intima-ella',
    name: 'Papanicolau, Colposcopía y Revisión Ginecológica',
    category: 'intima',
    frequency: '1 vez al año para mujeres con vida sexual activa',
    cheapOption: { place: 'Centros de Salud Públicos (GRATIS) / Salud Digna', price: '$160 - $320 MXN' },
    normalOption: { place: 'Fundación Marie Stopes / Ginecóloga particular', price: '$750 - $1,400 MXN' },
    expensiveOption: { place: 'Hospital Ángeles / San Javier', price: '$2,800 - $4,500 MXN' },
    whyImportant: 'Previene y detecta a tiempo el Cáncer Cervicouterino (VPH) que es 100% curable si se detecta a tiempo.',
    friendAdvice: 'No tengas pena, los médicos ven esto todos los días. En los Centros de Salud de gobierno el Papanicolau es completamente gratuito y también te regalan o aplican métodos anticonceptivos (DIU, implante subdérmico, pastillas).'
  },
  {
    id: 'salud-intima-el',
    name: 'Revisión Urológica / Antígeno Prostático / Exploración Testicular',
    category: 'intima',
    frequency: 'Autoexploración testicular mensual en jóvenes; antígeno después de los 40',
    cheapOption: { place: 'IMSS / Centros de Salud Públicos / Salud Digna', price: '$180 - $280 MXN (sangre)' },
    normalOption: { place: 'Urólogo particular en consultorio', price: '$700 - $1,200 MXN' },
    expensiveOption: { place: 'Hospital privado especializado', price: '$2,200 - $4,000 MXN' },
    whyImportant: 'El cáncer testicular es el más común en hombres jóvenes (de 18 a 35 años) y se detecta fácil tocándose al bañarse. La prostatitis se trata rápido.',
    friendAdvice: 'Chicos: en la regadera con agua tibia, toquen sus testículos suavemente una vez al mes. Si sienten una bolita dura que antes no estaba, no se asusten pero vayan al médico de inmediato.'
  },
  {
    id: 'salud-fertilidad',
    name: 'Estudios de Fertilidad en Pareja (Perfil Hormonal + Espermatobioscopía)',
    category: 'fertilidad',
    frequency: 'Cuando planean tener bebés a futuro o tras 6-12 meses buscando embarazo',
    cheapOption: { place: 'Salud Digna / Laboratorios Chopo con cupón', price: 'Él: $250 - $400 MXN | Ella: $550 - $850 MXN' },
    normalOption: { place: 'Laboratorios clínicos de especialidad', price: 'Él: $700 - $1,100 MXN | Ella: $1,400 - $2,200 MXN' },
    expensiveOption: { place: 'Clínicas privadas de fertilidad (Ingenes / New Hope)', price: '$5,000 - $12,000 MXN paquete completo' },
    whyImportant: 'Quita mitos y angustias. El 50% de las causas de no concebir son del hombre y 50% de la mujer. Saber cómo están sus niveles evita gastar tiempo y dinero innecesario.',
    friendAdvice: 'Para él: el seminograma requiere de 3 a 5 días de abstinencia sexual para dar resultados confiables. Para ella: el perfil ginecológico se toma en días específicos de la regla (día 3 al 5 del ciclo).'
  }
];

export const INITIAL_PLANTS: PlantGuide[] = [
  {
    id: 'planta-cilantro',
    name: 'Cilantro Mexicano',
    difficulty: 'muy fácil',
    sunlight: 'Sol directo o semisombra (mínimo 4 horas de sol)',
    watering: 'Tierra húmeda pero sin encharcar (cada 1 o 2 días)',
    daysToHarvest: '35 a 45 días',
    initialCost: '$25 a $45 MXN (semillas + maceta reciclada)',
    icon: '🌿',
    idealContainer: 'Cualquier maceta rectangular, bote de leche cortado o bote de helado con agujeros abajo para que drene el agua.',
    steps: [
      '1. Machaca suavemente las semillas de cilantro con la mano o un rodillo (tienen 2 semillas adentro cada pelotita).',
      '2. Remójalas en un vasito de agua tibia durante la noche para despertar a la semilla.',
      '3. Siémbralas a 1 cm de profundidad en tierra negra con abono.',
      '4. Riega con rociador suave para no desenterrarlas.',
      '5. Al cosechar, corta las ramitas exteriores con tijera y deja el centro para que siga dando cilantro fresco todo el año.'
    ],
    friendSecrets: '¡Nunca lo arranques de raíz! Si cortas solo las hojas de afuera, una sola plantita te da cilantro para tus tacos y salsas durante 3 a 4 meses.'
  },
  {
    id: 'planta-cebollita',
    name: 'Cebollitas Cambray / Cebollín',
    difficulty: 'muy fácil',
    sunlight: 'Mucho sol (le encanta la luz en ventana)',
    watering: 'Moderado (cuando metas el dedo en la tierra y sientas seco 2 cm abajo)',
    daysToHarvest: '¡Solo 15 a 25 días para empezar a cortar colitas verdes!',
    initialCost: '$0 a $15 MXN (¡con las sobras del súper!)',
    icon: '🧅',
    idealContainer: 'Una taza con agua al inicio, luego una maceta de 15 cm de profundidad.',
    steps: [
      '1. Cuando compres cebollitas cambray para cocinar, ¡no tires la parte blanca de abajo con raíces!',
      '2. Corta dejando unos 3 cm del tallo blanco con sus pelitos de raíz.',
      '3. Ponlo en un vasito con 1 cm de agua en tu ventana soleada.',
      '4. En 3 días verás brotar el tallo verde a gran velocidad.',
      '5. Pásalo a una maceta con tierra y tendrás cebollín verde infinito para picar sobre sopas, huevos y quesadillas.'
    ],
    friendSecrets: 'Es la planta más gratificante para principiantes porque crece casi mágicamente rápido sin gastar un solo peso.'
  },
  {
    id: 'planta-chiles',
    name: 'Chiles Serrano o Jalapeño',
    difficulty: 'fácil',
    sunlight: 'Pleno sol (al menos 5 a 6 horas diarias)',
    watering: 'Cada 2 o 3 días. No encharcar para que los chiles salgan bien picosos.',
    daysToHarvest: '75 a 90 días (pero vive y da frutos por 2 a 3 años)',
    initialCost: '$30 a $60 MXN',
    icon: '🌶️',
    idealContainer: 'Cubeta de 10 a 20 litros (como las de pintura bien lavadas) con 4 orificios en la base.',
    steps: [
      '1. Saca las semillas de un chile serrano fresco maduro de tu cocina.',
      '2. Déjalas secar en una servilleta durante 2 días a la sombra.',
      '3. Siémbralas en un vasito de plástico con tierra húmeda.',
      '4. Cuando la plantita tenga 4 o 5 hojas y mida 10 cm, cámbiala a su maceta o cubeta definitiva.',
      '5. Cuando salgan flores blancas, no las arranques: ¡de ahí nace cada chile!'
    ],
    friendSecrets: 'Dato de abuela que sí es ciencia: si la dejas pasar un poquito de sed justo cuando empiezan a nacer los chiles, la planta produce más capsaicina y tus chiles saldrán más sabrosos y picositos.'
  },
  {
    id: 'planta-tomates',
    name: 'Tomates Cherry en Maceta',
    difficulty: 'medio',
    sunlight: 'Pleno sol directo (mínimo 6 horas)',
    watering: 'Riego constante regular en la base de la tierra (sin mojar las hojas para evitar hongos).',
    daysToHarvest: '60 a 75 días',
    initialCost: '$40 a $70 MXN',
    icon: '🍅',
    idealContainer: 'Maceta profunda de mínimo 25 cm con un palo o varita para amarrar la planta conforme crezca.',
    steps: [
      '1. Corta un tomate cherry por la mitad y pon una rodaja con semillas sobre la tierra.',
      '2. Cubre con medio centímetro de tierra y riega con amor.',
      '3. Brotarán muchos tomatitos; deja los 2 más fuertes y retira los demás.',
      '4. Coloca un tutor (palito de madera) y sujeta el tallo con un pedacito de tela suave.',
      '5. Cosecha cuando estén rojos brillantes y bien dulces.'
    ],
    friendSecrets: 'Los tomates cherry en maceta son súper productivos; una sola maceta en tu balcón puede darte más de 40 a 60 tomatitos dulces para tus ensaladas.'
  },
  {
    id: 'planta-menta',
    name: 'Menta / Hierbabuena',
    difficulty: 'muy fácil',
    sunlight: 'Luz brillante indirecta o semisombra',
    watering: 'Le gusta la humedad constante (regar cada 2 días en clima templado)',
    daysToHarvest: 'Cosecha continua desde el día 20',
    initialCost: '$25 a $40 MXN',
    icon: '🌱',
    idealContainer: 'Maceta ancha e independiente (es invasiva, ponla en su propia maceta).',
    steps: [
      '1. Consigue una ramita fresca del mercado.',
      '2. Quita las hojas de abajo y pon el tallo en agua 5 días hasta que saque raíces blancas.',
      '3. Planta en tierra suave y húmeda.',
      '4. Crece rapidísimo y huele riquísimo al pasar rozándola.',
      '5. Corta las puntitas para hacer té digestivo, agua fresca con limón o calmar cólicos.'
    ],
    friendSecrets: '¡Peligro amistoso! La menta y hierbabuena son invasoras: si las pones junto a otra planta se adueñarán de toda la tierra. Tenlas siempre en su propia maceta solita.'
  },
  {
    id: 'planta-albahaca',
    name: 'Albahaca Aromática',
    difficulty: 'fácil',
    sunlight: 'Sol matutino o ventana muy iluminada',
    watering: 'Riego por abajo (pon un platito con agua 15 minutos debajo de la maceta y luego retira el agua restante).',
    daysToHarvest: 'Cosecha continua cortando las hojas superiores',
    initialCost: '$30 a $50 MXN',
    icon: '🍃',
    idealContainer: 'Maceta mediana de 15 a 20 cm.',
    steps: [
      '1. Siémbrala a partir de semillas o esqueje en agua.',
      '2. Le encanta el calorcito; no la dejes en corrientes de aire frío.',
      '3. Cuando quiera sacar flores arriba, córtalas de inmediato con tijeras para que siga produciendo hojas grandes y dulces.',
      '4. Úsala para pastas, pizzas caseras y salsas frescas.'
    ],
    friendSecrets: 'Además de deliciosa, la albahaca funciona como repelente natural de moscas y mosquitos si la pones cerca de la ventana de tu cocina.'
  }
];
