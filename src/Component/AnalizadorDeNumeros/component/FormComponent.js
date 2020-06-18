import React, { useState } from 'react';
import { Input, Button  } from 'antd';

function FormComponent ( {onSave} )
{
    const [ valueInput,setValueInput ] = useState( );

    return (
        <>
            <div >
                <Input style={{ width: '50%' }}  onChange={ e => setValueInput( e.currentTarget.value ) } />
                <Button type="primary" onClick={ () => onSave( valueInput, setValueInput ) }>Adicionar</Button>
            </div>
        </>
    );
};

export default FormComponent;