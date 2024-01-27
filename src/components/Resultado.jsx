import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Texto = styled.p`
    font-size: 18px;
`

const Scam = styled.p`
    font-size:15px;
    text-align:center;
`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Inagen = styled.img`
    display: block;
    width: 120px;

`

const Resultado = ({resultado}) => {

    const {PRICE, 
        HIGHDAY, 
        LOWDAY, 
        CHANGEPCT24HOUR, 
        IMAGEURL, 
        LASTUPDATE} = resultado

  return (
    <Contenedor>
        <Inagen
            src={`https://cryptocompare.com/${IMAGEURL}`}
            alt='Imagen cripto'
        />

        <div>
            <Precio>Precio actual: <span>{PRICE}</span></Precio>
            <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            <Scam>CRIPTO IS A SCAM</Scam>
        </div>
    </Contenedor>
  )
}

export default Resultado