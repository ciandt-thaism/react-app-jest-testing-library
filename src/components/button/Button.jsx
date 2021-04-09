import React from 'react';
import {Button} from '@material-ui/core'


function Botao(){
    return(
        <Button variant="contained" disabled data-testid='botao'>
            Desabilitado
        </Button>
    );
}

export default Botao;
