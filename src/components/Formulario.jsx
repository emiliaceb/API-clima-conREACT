import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import Clima from "./Clima";

const Formulario = () => {
  const [ubicacion, setubicacion] = useState("");
  const [pais, setpais] = useState("");
  const [clima, setclima] = useState({});
  const [datosCargados, setDatosCargados] = useState(false);

  const API_KEY = "9e5fe68e0d9e70cc53370625a5fb1765";

  const consultarClima = async (e) => {
    e.preventDefault();
    const [codigoPostal, codigoPais] = pais.split(",");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ubicacion},${codigoPais}&zip=${codigoPostal},${codigoPais}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setclima(data);
        console.log(data);
        setDatosCargados(true)
      } else {
        setclima(null);
        alert("No se pudo encontrar el clima para la ubicación seleccionada.");
        setDatosCargados(true)
      }
    } catch (error) {
      console.error("Error al consultar la API:", error);
      setclima(null);
      setDatosCargados(true)
    }
  };

  return (
    <>
      <Form className="w-50 mt-5" onSubmit={consultarClima}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fw-semibold fs-5">Ubicacion</Form.Label>
          <Form.Control
            required
            minLength={3}
            maxLength={50}
            type="text"
            placeholder="Ej: San Miguel de Tucuman"
            onChange={(e) => setubicacion(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Select
            aria-label="Default select example"
            onChange={(e) => setpais(e.target.value)}
          >
            <option>Selecciona un país</option>
            <option value="1001,AF">Afghanistan</option>
            <option value="1001,AL">Albania</option>
            <option value="16000,DZ">Algeria</option>
            <option value="96799,AS">American Samoa</option>
            <option value="AD500,AD">Andorra</option>
            <option value="1000,AO">Angola</option>
            <option value="AI-2640,AI">Anguilla</option>
            <option value="9900,AQ">Antarctica</option>
            <option value="100,AG">Antigua and Barbuda</option>
            <option value="1000,AR">Argentina</option>
            <option value="375,AM">Armenia</option>
            <option value="1000,AW">Aruba</option>
            <option value="2600,AU">Australia</option>
            <option value="1010,AT">Austria</option>
            <option value="1000,AZ">Azerbaijan</option>
            <option value="1000,BS">Bahamas</option>
            <option value="1010,BH">Bahrain</option>
            <option value="1000,BD">Bangladesh</option>
            <option value="1000,BB">Barbados</option>
            <option value="1000,BY">Belarus</option>
            <option value="1000,BE">Belgium</option>
            <option value="1000,BZ">Belize</option>
            <option value="1000,BJ">Benin</option>
            <option value="1000,BM">Bermuda</option>
            <option value="1000,BT">Bhutan</option>
            <option value="1000,BO">Bolivia</option>
            <option value="71000,BA">Bosnia and Herzegovina</option>
            <option value="1000,BW">Botswana</option>
            <option value="1000,BR">Brazil</option>
            <option value="1000,BN">Brunei Darussalam</option>
            <option value="1000,BG">Bulgaria</option>
            <option value="1000,BF">Burkina Faso</option>
            <option value="1000,BI">Burundi</option>
            <option value="7600,CV">Cabo Verde</option>
            <option value="12207,KH">Cambodia</option>
            <option value="1000,CM">Cameroon</option>
            <option value="1000,CA">Canada</option>
            <option value="1000,KY">Cayman Islands</option>
            <option value="1000,CF">Central African Republic</option>
            <option value="1000,TD">Chad</option>
            <option value="1000,CL">Chile</option>
            <option value="100000,CN">China</option>
            <option value="1000,CO">Colombia</option>
            <option value="1000,KM">Comoros</option>
            <option value="1000,CD">Congo (Congo-Brazzaville)</option>
            <option value="1000,CG">Congo</option>
            <option value="1000,CR">Costa Rica</option>
            <option value="1000,CI">Côte d'Ivoire</option>
            <option value="1000,HR">Croatia</option>
            <option value="1000,CU">Cuba</option>
            <option value="1000,CY">Cyprus</option>
            <option value="1000,CZ">Czechia</option>
            <option value="1000,DK">Denmark</option>
            <option value="1000,DJ">Djibouti</option>
            <option value="1000,DM">Dominica</option>
            <option value="1000,DO">Dominican Republic</option>
            <option value="1000,EC">Ecuador</option>
            <option value="1000,EG">Egypt</option>
            <option value="1000,SV">El Salvador</option>
            <option value="1000,GQ">Equatorial Guinea</option>
            <option value="1000,ER">Eritrea</option>
            <option value="1000,EE">Estonia</option>
            <option value="1000,SZ">Eswatini</option>
            <option value="1000,ET">Ethiopia</option>
            <option value="1000,FJ">Fiji</option>
            <option value="1000,FI">Finland</option>
            <option value="1000,FR">France</option>
            <option value="1000,GA">Gabon</option>
            <option value="1000,GM">Gambia</option>
            <option value="1000,GE">Georgia</option>
            <option value="1000,DE">Germany</option>
            <option value="1000,GH">Ghana</option>
            <option value="1000,GR">Greece</option>
            <option value="1000,GD">Grenada</option>
            <option value="1000,GT">Guatemala</option>
            <option value="1000,GN">Guinea</option>
            <option value="1000,GW">Guinea-Bissau</option>
            <option value="1000,GY">Guyana</option>
            <option value="1000,HT">Haiti</option>
            <option value="1000,HN">Honduras</option>
            <option value="1000,HU">Hungary</option>
            <option value="1000,IS">Iceland</option>
            <option value="1000,IN">India</option>
            <option value="1000,ID">Indonesia</option>
            <option value="1000,IR">Iran</option>
            <option value="1000,IQ">Iraq</option>
            <option value="1000,IE">Ireland</option>
            <option value="1000,IL">Israel</option>
            <option value="1000,IT">Italy</option>
            <option value="1000,JM">Jamaica</option>
            <option value="1000,JP">Japan</option>
            <option value="1000,JO">Jordan</option>
            <option value="1000,KZ">Kazakhstan</option>
            <option value="1000,KE">Kenya</option>
            <option value="1000,KI">Kiribati</option>
            <option value="1000,KP">Korea (North)</option>
            <option value="1000,KR">Korea (South)</option>
            <option value="1000,KW">Kuwait</option>
            <option value="1000,KG">Kyrgyzstan</option>
            <option value="1000,LA">Laos</option>
            <option value="1000,LV">Latvia</option>
            <option value="1000,LB">Lebanon</option>
            <option value="1000,LS">Lesotho</option>
            <option value="1000,LR">Liberia</option>
            <option value="1000,LY">Libya</option>
            <option value="1000,LI">Liechtenstein</option>
            <option value="1000,LT">Lithuania</option>
            <option value="1000,LU">Luxembourg</option>
            <option value="1000,MG">Madagascar</option>
            <option value="1000,MW">Malawi</option>
            <option value="1000,MY">Malaysia</option>
            <option value="1000,MV">Maldives</option>
            <option value="1000,ML">Mali</option>
            <option value="1000,MT">Malta</option>
            <option value="1000,MH">Marshall Islands</option>
            <option value="1000,MR">Mauritania</option>
            <option value="1000,MU">Mauritius</option>
            <option value="1000,MX">Mexico</option>
            <option value="1000,FM">Micronesia</option>
            <option value="1000,MD">Moldova</option>
            <option value="1000,MC">Monaco</option>
            <option value="1000,MN">Mongolia</option>
            <option value="1000,ME">Montenegro</option>
            <option value="1000,MA">Morocco</option>
            <option value="1000,MZ">Mozambique</option>
            <option value="1000,MM">Myanmar</option>
            <option value="1000,NA">Namibia</option>
            <option value="1000,NR">Nauru</option>
            <option value="1000,NP">Nepal</option>
          </Form.Select>
        </Form.Group>
        <Button variant="secondary" type="submit">
          <span className="fw-medium">Consultar clima</span>
        </Button>
      </Form>
      <Clima clima={clima} datosCargados={datosCargados}></Clima>
    </>
  );
};

export default Formulario;
