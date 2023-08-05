"use client";


import FirebaseConfig from "../FirebaseConfig/FirebaseConfig";
import { get, ref, set, onValue, remove, update, child } from "firebase/database"
import { useState } from "react";
import './Style.css'
import 'bootstrap/dist/css/bootstrap.css';

const database = FirebaseConfig();


function FirebaseCrud() {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState("");


    //validacion de datos
    let isNullOrWhiteSpace = (value) => {
        value = value.toString();
        return (value === null || value.replaceAll(' ', '').length < 1);
    }



    // ----------------- INSERTAR REGISTRO -----------------
    const insertarRegistro = (e) => {

        e.preventDefault();
        if (isNullOrWhiteSpace(nombre) || isNullOrWhiteSpace(apellido) || isNullOrWhiteSpace(telefono) || isNullOrWhiteSpace(email)) {
            alert("Todos los campos son obligatorios");
            return;
        }
        const dbref = ref(database);

        // set(ref(database, 'alumnos/' + nombre), {
        //     apellido: apellido,
        //     telefono: telefono,
        //     email: email
        // });

        // alert("Registro insertado");

        get(child(dbref, `alumnos/${nombre}`)).then((snapshot) => {
            if (snapshot.exists()) { // si existe el registro en la base de datos
                alert("El registro ya existe, intente con otro nombre");
            } else {
                set(ref(database, 'alumnos/' + nombre), {
                    apellido: apellido,
                    telefono: telefono,
                    email: email,
                   edad: edad,
                });

                alert("Registro insertado");
            }
        }).catch((error) => {
            console.error(error);
            alert("Ha ocurrido un error");
        });
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEdad("");

    }

    // ----------------- ACTUALIZAR REGISTRO -----------------
    const actualizarRegistro = (e) => {

        e.preventDefault();
        if (isNullOrWhiteSpace(nombre)) {
            alert("El campo nombre es obligatorio para actualizar el registro");
            return;
        }
        const dbref = ref(database);
        get(child(dbref, `alumnos/${nombre}`)).then((snapshot) => {
            if (snapshot.exists()) { // si existe el registro en la base de datos
                update(ref(database, 'alumnos/' + nombre), {
                    apellido: apellido,
                    telefono: telefono,
                    email: email,
                    edad: edad,

                }).then(() => {
                    alert("El registro se ha actualizado");
                }).catch((error) => {
                    console.error(error);
                    alert("Ha ocurrido un error");
                });
                alert("El registro se ha actualizado");
            } else {
                alert("El registro no existe");
            }
        }).catch((error) => {
            console.error(error);
            alert("Ha ocurrido un error");
        });
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEdad("");

    }


    // ----------------- Eliminar REGISTRO -----------------
    const eliminarRegistro = (e) => {
        const dbref = ref(database);
        e.preventDefault();
        if (isNullOrWhiteSpace(nombre)) {
            alert("El campo nombre es obligatorio para Eliminar el registro");
            return;
        }

        get(child(dbref, `alumnos/${nombre}`)).then((snapshot) => {
            if (snapshot.exists()) { // si existe el registro en la base de datos
                remove(ref(database, 'alumnos/' + nombre), {
                });
                alert("El registro se ha eliminado correctamente");
            } else {
                alert("El registro no existe");
            }
        }).catch((error) => {
            console.error(error);
            alert("Ha ocurrido un error");
        });
        setNombre("");
        setApellido("");
        setTelefono("");
        setEmail("");
        setEdad("");

    }

    // -----------------SELECCIONAR REGISTRO -----------------

    const selecionarDatos = () => {


    const dbref = ref(database);

    if (isNullOrWhiteSpace(nombre)) {
        alert("se requiere nombre de usuario para recuperar los datos");
        return;
    }
    get(child(dbref, `alumnos/${nombre}`)).then((snapshot) => {
        if (snapshot.exists()) {
            alert("Datos recuperados exitosamente");
            setApellido(snapshot.val().apellido);
            setTelefono(snapshot.val().telefono);
            setEmail(snapshot.val().email);
        } else {
            alert("Datos no disponibles");
        }
    }).catch((error) => {
        console.error(error);
        alert("Error al obtener los datos");
    });
}



    return (
        <div className="text-center p-3 mb-2 bg-dark text-white container py-5" >
            <h1>Wilver Antonio Toj Alin&aacute;n </h1>
            <form>
                <label>Nombre</label><br />
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} /><br />
                <label>Apellido</label><br />
                <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} /><br />
                <label>Telefono</label><br />
                <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} /><br />
                <label>Email</label><br />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <label>Edad</label><br />
                <input type="text" value={edad} onChange={(e) => setEdad(e.target.value)} /><br />
                <br />
                <button className="p-2 " onClick={insertarRegistro}>Insertar Registro</button>
                <button className="p-2" onClick={actualizarRegistro}>Actualizar Registro</button>
                <button className="p-2" onClick={eliminarRegistro}>Eliminar Registro</button>
                <button className="p-2" onClick={selecionarDatos}>Seleccionar Registro</button>
            </form>
        </div>


    )


}

export default FirebaseCrud;