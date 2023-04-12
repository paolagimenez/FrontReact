
export default function Persona({info}) {
    return(
        <div className="d-flex align-items-center justify-content-center">
            <p className="col-5">{info.IdPersona}</p>
            <p className="col-5">{info.PerRSoc}</p>
            <p className="col-5">{info.Alias}</p>
            <p className="col-5">{info.DomicilioNro}</p>
            <p className="col-5">{info.IdLocalidad}</p>
            <p className="col-5">{info.IdDocumento}</p>
            <p className="col-5">{info.NroDocumento}</p>
            <p className="col-5">{info.IdIngBrutos}</p>
            <p className="col-5">{info.Observaciones}</p>
           

            <div className="col-6 d-flex my-3">
                <button className="btn btn-secondary me-2">Mas info..</button>
                <button className="btn btn-primary">Eliminar Persona</button>            
            </div>

        </div>
    )
}