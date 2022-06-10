import React from 'react';


const HandleSendInfo = (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const twitter = document.getElementById('tw').value
    console.log({name, twitter});
}

const handleCheckBox = (e) => {
    if (e.target.checked) {
        document.getElementById('send').removeAttribute('disabled');
    } else {
        document.getElementById('send').setAttribute("disabled", "true");
    }
}

const Formularios = () => {
    return (
        <div>
            <h1>Formularios</h1>
            <div>
                <form>
                    <p>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" name="userName" id="name" />
                    </p>
                    <p>
                        <label htmlFor="tw">Twitter:</label>
                        <input type="text" name="twitterAccount" id="tw" />
                    </p>
                    <p>
                        <label>
                            <input type="checkbox" name="terminos" id="terminos" onChange={handleCheckBox} /> 
                        Accepto terminos y condiciones</label>
                    </p>
                    <button onClick={HandleSendInfo} id="send" disabled>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Formularios;
