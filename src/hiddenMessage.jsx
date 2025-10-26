avaScript 
import React from 'react'; 
function HiddenMessage() { 
return ( 
<div style={{ padding: '20px', border: '1px solid #ccc', margin: 
'20px', backgroundColor: '#e0ffe0' }}> 
<h2>You found the hidden message!</h2> 
<p>This message is conditionally rendered.</p> 
</div> 
); 
} 
export default HiddenMessage; 