const URL ='http://localhost:3000';

//esta es mi funcion para loguearme
export async function Login(datos){
    
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/login`, Options);
    const data= await respuesta.json();
    return data
}

//registrooo
//esta es mi funcion para loguearme
export async function Registro(datos){
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/registro`, Options)
    const data= await respuesta.json()
    return data
}
//funcion de get para productos 

export async function getProducto(){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/producto`, Options)
    const data= await respuesta.json()
    return data
}
//////funcion para eliminar un producto 
/// baja de proveedor 
export async function deleteProducto(id_producto){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/producto/${id_producto}`, Options)
    const data= await respuesta.json()
    return data
}


/// get para proveedores 
export async function getProveedor(){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/proveedor`, Options)
    const data= await respuesta.json()
    return data
}
/// baja de proveedor 
export async function deleteProveedor(idproveedor){
    const Options={
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/proveedor/${idproveedor}`, Options)
    const data= await respuesta.json()
    return data
}
//////////////
//agregar un proveedor 
//esta es mi funcion para AGREGAR UN PROVEEDOR
export async function AadProveedor(datos){
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/proveedor`, Options)
    const data= await respuesta.json()
    return data
}


/// get para Marcas 
export async function getMarca(){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/marca`, Options)
    const data= await respuesta.json()
    return data
}


// Inicio de fabricantes

export async function getProveedor(){
    const token = JSON.parse(localStorage.getItem('token'));
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
             Authorization: `Bearer ${token}`,
        }
    }
    const respuesta = await fetch(`${URL}/proveedor`, Options)
    const data= await respuesta.json()

    return data
}

export async function getProveedorByID(idproveedor){
    const Options={
        method:'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/proveedor/${idproveedor}`, Options)
    const data= await respuesta.json();
    return data[0];
}

export async function deleteProveedor(idproveedor){
    const Options={
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/proveedor/${idproveedor}`, Options)
    
}

export async function ActualizarEstadoProveedor(idproveedor, actulizar){
    const Options={
        method:'DELETE',
        body: JSON.stringify(actulizar),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/proveedor/${idproveedor}`, Options)
    const data= await respuesta.json()
    return data;
}

export async function AddProveedor(datos){
    const Options={
        method:'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/proveedor`, Options)
    const data= await respuesta.json()
    return data;
}


export async function EditProveedor(datos, idproveedor){
    const Options={
        method:'PUT',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const respuesta = await fetch(`${URL}/proveedor/${idproveedor}`, Options)
    const data= await respuesta.json()
    return data;
}

// fin de fabricantes
