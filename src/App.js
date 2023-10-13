import { useState } from 'react';
import Input from './components/form/Input';
import Select from './components/form/Select';

export default function App() {
  const [data, setData] = useState({
    firstName: document.getElementById("firstName"),
    lastName: document.getElementById("lastName"),
    date: document.getElementById("date"),
    street: document.getElementById("street"),
    number:document.getElementById("number"),
    neighborhood: document.getElementById("neighborhood"),
    city:document.getElementById("city"),
    postalCode:document.getElementById("postalCode"),
    state:document.getElementById("state"),
    })

    function handleSubmit(){
      return(
        alert(`
        Nome Completo: ${data.firstName} ${data.lastName},
        Data de Nascimento: ${data.date}
        Endereço: Rua ${data.street}, número ${data.number}
        Bairro: ${data.neighborhood}
        Cidade: ${data.city}
        CEP: ${data.postalCode}
        Estado: ${data.state}
        `)
      )
    }

      return (
        <div className="container mx-auto">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

        
          <Input type="text" name="firstName" text="Nome" data={data} setData={setData}/>

          <Input type="text" name="lastName" text="Sobrenome" data={data} setData={setData}  />

          <Input type="date" name="date" text="Data de nascimento" data={data} setData={setData} />
            
          <Input type="text" name="street" text="Rua" data={data} setData={setData} />

          <Input type="number" name="number" text="Número" data={data} setData={setData} />

          <Input type="text" name="neighborhood" text="Bairro" data={data} setData={setData} />

          <Input type="text" name="city" text="Cidade" data={data} setData={setData} />

          <Input type="number" name="postalCode" text="CEP" data={data} setData={setData} />

          <Select data={data} setData={setData} />
        </div>
          <br/>
          <button className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-slate-700 text-white text-sm font-medium rounded-md" onClick={handleSubmit}>
          Salvar
          </button>
        </div>
    </div>
  )
}