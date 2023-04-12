export default function AddPersona() {
    return(
        <form className="row card text-white bg-secondary m-3 align-items-center w-50"  action="" method="POST">
            
                <label className="col-sm-2 col-form-label mb-2 w-100" form="IdPersona">Id del Persona:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="IdPersona" id="IdPersona"/>
               
               <label className="col-sm-2 col-form-label mb-2 w-100" form="PerRSoc">Razón Social:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="PerRSoc" id="PerRSoc"/>
                    
                <label className="col-sm-2 col-form-label mb-2 w-100" form="Alias">Alias:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="Alias" id="Alias"/>

                <label className="col-sm-2 col-form-label mb-2 w-100" form="Domicilio">Domicilio:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="Domicilio" id="Domicilio"/>

                <label className="col-sm-2 col-form-label mb-2 w-100" form="IdLocalidad">Localidad:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="IdLocalidad" id="IdLocalidad"/>
                IdLocalidad
                <label className="col-sm-2 col-form-label mb-2 w-100" form="Telefono">Telefono:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="Telefono" id="Telefono"/>

                <label className="col-sm-2 col-form-label mb-2 w-100" form="IdDocumento">Id Documento:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="IdDocumento" id="IdDocumento"/>

                <label className="col-sm-2 col-form-label mb-2 w-100" form="nombre">Nombre del Persona:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="nombre" id="nombre"/>

                <label className="col-sm-2 col-form-label mb-2 w-100" form="NroDocumento">NroDocumento:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="NroDocumento" id="NroDocumento"/>

                <label className="col-sm-2 col-form-label mb-2 w-100" form="IdIva">IdIva:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="IdIva" id="IdIva"/>

                <label className="col-sm-2 col-form-label mb-2 w-100" form="IdIngBrutos">IdIngBrutos:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="IdIngBrutos" id="IdIngBrutos"/>

                <label className="col-sm-2 col-form-label mb-2 w-100" form="Observaciones">Observaciones:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="Observaciones" id="Observaciones"/>

                <label className="col-sm-2 col-form-label mb-2 w-100" form="FechaAlta">Fecha de Alta:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="FechaAlta" id="FechaAlta"/>

                <label className="col-sm-2 col-form-label mb-2 w-100" form="FechaModificacion">FechaModificacion:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="FechaModificacion" id="FechaModificacion"/>

                <label className="col-sm-2 col-form-label mb-2 w-100" form="IdUsuarioAlta">IdUsuarioAlta:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="IdUsuarioAlta" id="IdUsuarioAlta"/>

                <label className="col-sm-2 col-form-label mb-2 w-100" form="IdUsuarioModificacion">IdUsuarioModificacion:</label>
                <input  className="col-sm-10 form-control mb-3" type="text" name="IdUsuarioModificacion" id="IdUsuarioModificacion"/>

            <input type="submit" value="Agregar" className="btn btn-primary w-25"/> 
        </form>
    )
}