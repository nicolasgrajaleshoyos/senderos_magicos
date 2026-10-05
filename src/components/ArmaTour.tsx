import { useMensajeTour } from '../hooks/useMensajeTour'
import { construirEnlaceWhatsApp } from '../lib/whatsapp'
import { interesesTour, opcionesDias } from '../data/tours'

/** Formulario de dos pasos que arma el mensaje de WhatsApp. El visitante puede editarlo a mano. */
export function ArmaTour() {
  const tour = useMensajeTour()

  return (
    <section id="arma-tu-tour" className="arma">
      <div className="wrap">
        <div className="encabezado">
          <span className="kicker">Arma tu tour</span>
          <h2>Dinos qué te gusta</h2>
          <p className="lead">Elige cuántos días tienes y lo que te interesa. Te escribo por WhatsApp con tu propuesta.</p>
        </div>
        <div className="arma-caja">
          <div className="paso">
            <span className="paso-num">1</span>
            <div className="paso-cuerpo">
              <h3>¿Cuántos días tienes?</h3>
              <div className="opciones-dias">
                {opcionesDias.map((opcion) => {
                  const activa = tour.dias === opcion.valor
                  return (
                    <button
                      key={opcion.valor}
                      type="button"
                      className={`opcion ${activa ? 'activo' : ''}`}
                      onClick={() => tour.elegirDias(opcion.valor)}
                      aria-pressed={activa}
                    >
                      <strong>{opcion.titulo}</strong>
                      <small>{opcion.sub}</small>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="paso">
            <span className="paso-num">2</span>
            <div className="paso-cuerpo">
              <h3>¿Qué te interesa? <small>Puedes elegir varios</small></h3>
              <div className="chips">
                {interesesTour.map((interes) => {
                  const elegido = tour.intereses.includes(interes)
                  return (
                    <button
                      key={interes}
                      type="button"
                      className={`chip ${elegido ? 'activo' : ''}`}
                      onClick={() => tour.alternarInteres(interes)}
                      aria-pressed={elegido}
                    >
                      {elegido ? '✓ ' : ''}{interes}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
          <div className="resumen">
            <div className="resumen-head">
              <span>Tu mensaje</span>
              {tour.esEditado && <button type="button" className="resumen-reset" onClick={tour.restaurar}>Restaurar</button>}
            </div>
            <textarea value={tour.mensaje} onChange={(e) => tour.editarMensaje(e.target.value)} rows={3} aria-label="Mensaje para WhatsApp" />
            <small>Puedes cambiar el texto antes de enviarlo.</small>
          </div>
          <a className="btn btn-principal arma-enviar" href={construirEnlaceWhatsApp(tour.mensaje)} target="_blank" rel="noopener">Enviar por WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
