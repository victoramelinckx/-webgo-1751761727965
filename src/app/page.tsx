
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Transformamos tu negocio con una web rápida, innovadora y soporte 24/7 para aumentar tus ventas sin complicaciones." cta1="Comienza Ahora" />
<How step1Title="Contacta a WebGo" step1Desc="Explícanos tu negocio en minutos." step2Title="Creamos tu web" step2Desc="Web lista en 24 horas." step3Title="Empieza a vender" step3Desc="Ventas online sin esfuerzo." />
<Aboutus headline="WebGo: Digitaliza y Aumenta Ventas" subheadline="Transformamos tu negocio en línea, sin complicaciones y con resultados comprobados." beneficiotitulo1="Gestión Completa" beneficio1="Nos encargamos de todo por ti." beneficiotitulo2="Ventas Rápidas" beneficio2="Genera ingresos online rápidamente." />
<Services heading="Acelera Tus Ventas Digitales" description="Rapidez, compromiso, innovación. WebGo transforma recomendaciones en ventas online." services={[{"name":"Desarrollo Web Flash","icon":"bolt","description":"Web de ventas lista en 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tu tranquilidad."},{"name":"SEO Personalizado","icon":"search","description":"Atrae más clientes con posicionamiento estratégico."},{"name":"Integración de E-commerce","icon":"shopping-cart","description":"Simplifica ventas online con tecnología avanzada."},{"name":"Gestión de Contenidos","icon":"edit","description":"Contenido atractivo que engancha a tus clientes."},{"name":"Análisis de Datos","icon":"chart-line","description":"Mide y optimiza tus resultados constantemente."}]} />
<BeforeAndAfter subheadline="Proyectos que transforman ideas en éxitos digitales impactantes." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas rápidamente?","respuesta":"WebGo se especializa en crear soluciones de venta online rápidas y efectivas. Entendemos que el tiempo es clave para los emprendedores, por eso te ayudamos a llevar tus productos al mundo digital sin complicaciones."},{"pregunta":"¿Qué beneficios ofrece WebGo para mi negocio que solo vende por recomendación?","respuesta":"Con WebGo, puedes ampliar tus ventas más allá de las recomendaciones. Nuestro enfoque innovador te permite llegar a más clientes online, aumentando tus oportunidades de venta y crecimiento."},{"pregunta":"No tengo tiempo para gestionar un sitio web, ¿cómo puede WebGo ayudarnos?","respuesta":"WebGo se encarga de toda la gestión de tu sitio web, para que tú puedas concentrarte en lo que mejor haces. Nos comprometemos a manejar todo lo técnico, así tú no te preocupas por nada."},{"pregunta":"¿Por qué debería confiar en WebGo para innovar mi negocio online?","respuesta":"WebGo se compromete a mantener tu negocio a la vanguardia con las últimas tendencias digitales. Nuestro equipo experto asegura que tu presencia online esté optimizada y lista para el futuro."},{"pregunta":"¿Es costoso digitalizar mi negocio con WebGo?","respuesta":"WebGo ofrece servicios a precios competitivos, enfocados en rapidez, compromiso e innovación. Invertir en digitalizar tu negocio ahora te brinda acceso a un mercado más amplio, lo que puede significar mayores ganancias."}]} />
<BookAppointment 
                      heading="Transforma Tu Negocio: Digitaliza Tus Ventas Hoy" 
                      description="Con WebGo, experimenta rapidez, compromiso e innovación; lleva tu negocio a la era digital sin complicaciones."
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
