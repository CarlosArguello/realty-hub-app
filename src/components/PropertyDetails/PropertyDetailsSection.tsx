import { PropertyDetails } from "../../types/property"
import currencyFormat from "../../utils/currencyFormat"

const PropertyDetailsSection: React.FC<Omit<PropertyDetails, "id">> = (property) => (
  <section>
    <dl className="flex flex-col gap-y-7">
      <div>
        <h1 className="text-3xl font-semibold">{property.name}</h1>
        <dd className="text-slate-700">{property.address}</dd>
      </div>

      <div>
        <dt className="text-sm font-semibold">Fecha de construcción:</dt>
        <dd className="text-slate-700">{property.year}</dd>
      </div>

      <div>
        <dt className="text-sm font-semibold">Propietario:</dt>
        <dd className="text-slate-700">{property.owner.name}</dd>
      </div>

      <div>
        <dt className="text-sm font-semibold">Proceso de visita y compra:</dt>
        <p className="leading-7 text-slate-700">
          Elige fecha y hora disponibles, deja tu nombre y contacto y te enviaremos una confirmación
          por WhatsApp y correo. Un asesor te llamará para validar datos y resolver dudas. El día de
          la visita recibirás la ubicación y las indicaciones de acceso. Puedes reprogramar o
          cancelar sin costo hasta 12 h antes.
        </p>

        <p className="mt-4 leading-7 text-slate-700">
          reserva con depósito (1–2 %), estudio de títulos y avalúo (3–5 días hábiles), aprobación
          de crédito o certificación de fondos, firma de la promesa de compraventa, escrituración y
          registro en notaría y, finalmente, entrega del inmueble con acta de recibido.
        </p>
      </div>

      <div className="mt-4">
        <dt className="text-sm font-semibold">Precio:</dt>
        <dd className="text-2xl font-bold">{currencyFormat(property.price)}</dd>
      </div>
    </dl>
    <div className="mt-10">
      <button className="bg-black hover:bg-gray-800 text-white py-4 px-8 rounded-lg cursor-pointer font-semibold">
        Agendar visita
      </button>
    </div>
  </section>
)

export default PropertyDetailsSection
