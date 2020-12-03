var  CACHE_NAME  =  'covid19-pwa' ;
var  urlsToCache  =  [
  '/'
] ;

// Instale um service worker
eu . addEventListener ( 'instalar' ,  evento  =>  {
  evento . waitUntil (
    caches . aberto ( CACHE_NAME )
      . então ( função ( cache )  {
        console . log ( 'cache aberto' ) ;
         cache de retorno . addAll ( urlsToCache ) ;
      } )
  ) ;
} ) ;

// Cache e solicitações de retorno
eu . addEventListener ( 'fetch' ,  event  =>  {
  evento . respondWith (
    caches . corresponder ( evento . solicitação )
      . então ( função ( resposta )  {
        if  ( resposta )  {
           resposta de retorno ;
        }
        return  fetch ( event . request ) ;
      }
    )
  ) ;
} ) ;

// Atualizar um trabalhador de serviço
eu . addEventListener ( 'ativar' ,  evento  =>  {
  var  cacheWhitelist  =  [ 'pwa-task-manager' ] ;
  evento . waitUntil (
    caches . chaves ( ) . então ( cacheNames  =>  {
       promessa de retorno . todos (
        cacheNames . map ( cacheName  =>  {
          if  ( cacheWhitelist . indexOf ( cacheName )  ===  - 1 )  {
             caches de retorno . delete ( cacheName ) ;
          }
        } )
      ) ;
    } )
  ) ;
} ) ;