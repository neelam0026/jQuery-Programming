"use strict";

$( document ).ready( function( )
{
	$( "#AnimateButton" ).click( function( )
	{
		$( "#DarthVader" ).animate(
		{
			left: '200px',
			//opacity: '0.25'
			padding: '10px',
			height: '+=100px'
		}, 4000 );
	} );

	$( "#StopButton" ).click( function( )
	{
		$( "#DarthVader" ).stop( );
	} );
} );











