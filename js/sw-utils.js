// Guardar en el cache dimanico

function actualizaCacheDinamico( dynamicCache, req, res ){
    if ( res.ok ) {
        return caches.open( dynamicCache ).then( cache => {
            // Almacena en el cache la req y clona la respuesta
            cache.put( req, res.clone() )
            return res.clone()
        })
    } else {
        return res
    }
}