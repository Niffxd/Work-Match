import React from "react";
import style from "./terms.module.css";

//CONCEPTOS A CUBRIR:
// 1) PROTEGER LA EMPRESA
// 2) EVITAR ABUSOS
// 3) DESMOSTRAR AUTORIA
// 4) LIMITAR RESPONSABILIDAD

const Terms = () => {
  return (
    <div>
      <h2>Terminos y Condiciones</h2>
      <p>
        Aquí se establecen sus derechos y responsabilidades como usuario de
        Work-Match
      </p>
      <ul>
        <li className={style.term_list}>
          <h4>1. Aceptación de los términos y condiciones</h4>
          <p>
            Esta sección establece los Términos y Condiciones (los "Términos")
            bajo los cuales usted (el “Usuario”) puede utilizar el sitio de
            Internet perteneciente a Work-Match o cualquier applicación móvil
            bajo el control de Work-Match (el “Sitio Web”). Al utilizar este
            Sitio Web y al solicitar cualquiera de los servicios que el Sitio
            Web ofrece, el Usuario manifiesta expresamente su consentimiento con
            relación a las estipulaciones establecidas en estos Términos de Uso.
            El término Usuario, en este documento, comprende a todas las
            personas y/o entidades que acceden al Sitio Web.
          </p>
        </li>
        <li className={style.term_list}>
          <h4>2. Derecho de modificación de los términos y condiciones </h4>
          <p>
            El Usuario reconoce que Work-Match ("Work-Match ") podrá revisar
            estos Términos de Uso en cualquier momento; asimismo, el Usuario
            acepta que Work-Match podrá, en todo momento, modificar las
            estipulaciones que contienen sin previo aviso. En consecuencia, el
            Usuario se obliga a revisar los Términos de Uso periódicamente. Lo
            anterior, en el entendido de que el uso del Sitio Web y/o la
            solicitud de los servicios que ofrece Work-Match a través del Sitio
            Web es considerado como una aceptación expresa a los Términos y
            cualesquiera de estas modificaciones.
          </p>
        </li>
        <li className={style.term_list}>
          <h4>3. Uso del contenido de Work-Match </h4>
          <p>
            Work-Match faculta al Usuario a realizar una reproducción digital y
            a acceder a una copia del Contenido Propiedad de Work-Match que se
            encuentra disponible en, o a través del, Sitio Web; el Usuario se
            obliga a utilizar dichas reproducciones únicamente para uso
            personal.
          </p>
        </li>
        <li>
          <h4>4. Usos autorizados del Sitio Web</h4>
          <ul>
            <li>
              <h5>►4.1 Reglas generales</h5>
              <p>
                Queda prohibido a los Usuario utilizar el Sitio Web o los Sitios
                Web Afiliados a Bolsadetrabajo.com para transmitir, distribuir,
                guardar o destruir material, incluyendo sin limitación, el
                Contenido Propiedad de Bolsadetrabajo.com en los casos en que
                dicho uso: (a) cause la violación de cualquier norma jurídica
                aplicable; (b) infrinja los derechos de autor, marcas
                registradas, secretos industriales u otros derechos de propiedad
                intelectual o industrial de terceros; (c) viole la
                confidencialidad, privacidad u otros derechos de terceros, o;
                (d) resulte en la publicación de material difamatorio, obsceno,
                amenazador, injurioso o despectivo. Bolsadetrabajo.com se
                reserva el derecho de suspender el uso a cualquier Usuario que
                realice actos que contravengan este apartado; asimismo,
                Bolsadetrabajo.com podrá suspender en el uso del Sitio Web a
                cualquier Usuario cuando la suspensión sea ordenada por
                autoridad competente.
              </p>
            </li>
            <li>
              <h5>►4.2 Normas de Seguridad</h5>
              <p>
                Se prohíbe a los Usuarios el violar o intentar violar la
                seguridad del Sitio Web y de los Sitios Web Afiliados de
                Bolsadetrabajo.com; quedan prohibidas al Usuario, entre otras
                acciones: (a) el acceder a datos a los cuales el Usuario no se
                encuentra autorizado para utilizar o iniciar sesión en un
                servidor o en una cuenta para la que el Usuario no tiene acceso
                autorizado; (b) el intentar examinar, escanear o probar la
                vulnerabilidad de un sistema de informática o de una red o
                quebrantar las medidas de seguridad o autenticación sin la
                debida autorización; (c) el intentar interferir con el uso de
                cualquier otro Usuario, servicio de hospedaje o red, incluyendo,
                sin limitación, el transmitir un virus al Sitio Web; causar una
                saturación de dichos sitios mediante "inundación" (flooding),
                "envío de correo no deseado" (spamming), "bombardeo de correo"
                (mailbombing) o "generación de fallas" (crashing); (d) el envío
                de correos electrónicos no solicitados, incluyendo promociones
                y/o publicidad de productos o servicios, o; (e) el falsificar
                cualquier encabezado de paquete TCP/IP o cualquier parte de la
                información del encabezado en cualquier correo electrónico o
                publicación en grupo de noticias. El Usuario reconoce que las
                violaciones del sistema de informática o de la seguridad de la
                red pueden generar responsabilidades civiles o penales.
              </p>
            </li>
            <li>
              <h5>►4.3. Usos específicos prohibidos del Sitio Web.</h5>
              <p>
                El Sitio Web puede utilizarse únicamente para fines que no
                contravengan la legislación aplicable; el Sitio Web puede ser
                utilizado por personas que busquen empleo e información
                profesional, y parte de empresas que busquen contratar personal.
                Work-Match prohíbe específicamente cualquier uso del Sitio Web
                distinto a los referidos.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h4>5. Datos del Usuario</h4>
          <p>
            Al crear una cuenta en el Sitio Web, se le pedirá a cada Usuario que
            aporte a Work-Match cierta información, incluyendo, entre otros
            datos, una dirección válida de correo electrónico. Work-Match puede
            difundir la información que el Usuario aporte de este Sitio Web, en
            el entendido de que el Usuario ha autorizado expresamente esta
            difusión al aceptar estos Términos. Work-Match se reserva el derecho
            de ofrecerle al Usuario los servicios y productos de terceros de
            acuerdo con las preferencias que el Usuario señala al crear una
            cuenta en el Sitio Web y/o en cualquier momento posterior, salvo que
            el Usuario decida no recibir avisos comerciales y así se lo exprese
            a Work-Match; dichos ofrecimientos pueden ser hechos por Work-Match
            o por terceros.
          </p>
        </li>
        <li>
          <h4>6. Contenido aportado por el Usuario</h4>
          <p>
            Como Usuario, usted reconoce ser el único responsable de toda la
            información que aporta a Work-Match en su cuenta de Usuario, perfil,
            contenido, mensajes, audios, videos, fotografías, textos, imágenes,
            compilaciones u otra información (el “Contenido del Usuario”) que
            aporte y/o publique al Sitio Web. El Usuario se obliga a no
            ostentarse como una persona que no es al momento de aportar
            Contenido del Usuario en el Sitio Web; asimismo, se obliga a no
            aportar material falso, impreciso, engañoso, ilegal, o que de
            cualquier otra forma incumpla con estos Términos. El Usuario es
            responsable de las consecuencias legales que se deriven de la
            aportación y/o publicación en el Sitio Web.
          </p>
          <p>
            Al aportar Contenido del Usuario en cualquier área de libre acceso
            del Sitio Web, el Usuario otorga a Work-Match el derecho gratuito,
            perpetuo, irrevocable, (incluyendo cualquier derecho moral) y
            licencia a nivel mundial para utilizar, copiar, reproducir, adaptar,
            publicar, traducir, crear obras derivadas de, distribuir, comunicar
            al público, ejecutar y mostrar el contenido, en su totalidad o en
            parte, y/o incorporarlo en otras obras en cualquier forma, medio o
            tecnología no conocida o desarrollada posteriormente, durante toda
            la vigencia de cualquier derecho que pueda existir en dicho
            Contenido Propiedad del Usuario.
          </p>
        </li>
        <li>
          <h4>7. Registro de Cuenta y Contraseña</h4>
          <p>
            El Usuario es responsable de mantener la confidencialidad de su
            información de sus cuentas (los "Datos"). El Usuario no está
            autorizado para compartir los Datos con otras personas, ya sea de
            forma temporal o permanente. El Usuario será responsable de todos
            los usos de su cuenta, ya sean autorizados o no por el Usuario. El
            Usuario acepta notificar de inmediato a Work-Match sobre cualquier
            uso no autorizado de su cuenta o contraseña.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Terms;
