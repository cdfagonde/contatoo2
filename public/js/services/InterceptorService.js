// public/js/services/InterceptorService.js

angular.module( 'contatoo2' )
.factory( 'meuInterceptor',
	function( $location, $q ) {
		var interceptor = {

			responseError : function( resposta ) {
				if ( resposta.status == 401 ) {
					$location.path( '/auth' );
				}
				return $q.reject( resposta );
			}

		}
		return interceptor;
	}
);