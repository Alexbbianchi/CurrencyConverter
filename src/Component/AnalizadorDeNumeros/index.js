import React, { useState } from 'react';
import './style.css'

import FormComponent from './component/FormComponent';
import ListComponent from './component/ListComponent';

function AnalizadorDeNumeros ()
{

    const [ valueList,setValueList ] = useState( [] );
    
    const handlerAddItemToList = ( value ) =>
    {
        setValueList( [
            ...valueList,value
        ] );
    }
    return (
        <>
            <div className="Body">
                <header>
                    <h1 className="title">TodoList</h1>
                </header>

                <section>
                    <label>Digíte seus itens</label>
                    <FormComponent onSave={handlerAddItemToList}/>
                    <ListComponent valueList={valueList} />
                </section>

                <footer>
                    <p>&copy; AlexBianchi</p>
                </footer>
            </div>
        </>
    );
};





export default AnalizadorDeNumeros;

//https://www.youtube.com/watch?v=NoVIe5l1XvE&list=PLpQnvZKeNX4HuwlzMdFpykBLsd_zF82QN