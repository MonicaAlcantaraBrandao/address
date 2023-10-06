import './index.css'
import Header from './components/Header'
import { useState } from 'react';

function App(){
  const [data, setData] = useState({
  name: document.getElementById("first-name"),
  lastName: document.getElementById("last-name"),
  date: document.getElementById("date"),
  street: document.getElementById("street"),
  number:document.getElementById("number"),
  neighborhood: document.getElementById("neighborhood"),
  city:document.getElementById("city"),
  postalCode:document.getElementById("postal-code"),
  state:document.getElementById("state"),
  })
 
  function handleSubmit(e){
    return(
      alert(`Nome Completo: ${data.name} ${data.lastName}
      Data de Nascimento: ${data.date}
      Endereço: ${data.street}, ${data.number}
      Bairro: ${data.neighborhood}
      Cidade: ${data.city}
      CEP: ${data.postalCode}
      Estado: ${data.state}
      `)
    )
  }

  return(
    <div>
    <Header title="Informações do visitante"/>
    <form>
    <div className="border-b border-gray-900/10 pb-12">
          
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Nome:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setData({...data, name: e.target.value})}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Sobrenome:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setData({...data, lastName: e.target.value})}
                />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
                Data de nascimento:
              </label>
              <div className="mt-2">
                <input
                  id="date"
                  name="date"
                  type="date"
                  autoComplete="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setData({...data, date: e.target.value})}
                />
              </div>
            </div>

            

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
               Rua:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="street"
                  id="street"
                  autoComplete="street"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setData({...data, street: e.target.value})}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
               Número:
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="number"
                  id="number"
                  autoComplete="number"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setData({...data, number: e.target.value})}
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="neighborhood" className="block text-sm font-medium leading-6 text-gray-900">
                Bairro:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="neighborhood"
                  id="neighborhood"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setData({...data, neighborhood: e.target.value})}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Cidade:
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="city"
                  id="city"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setData({...data, city: e.target.value})}
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                CEP:
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setData({...data, postalCode: e.target.value})}
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="state" className="block text-sm font-medium leading-6 text-gray-900">
                Estado:
              </label>
              <div className="mt-2">
                <select
                  id="state"
                  name="state"
                  autoComplete="state"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6" onChange={(e) => setData({...data, state: e.target.value})}
                >
                  <option>Selecione</option>
                  <option>Minas Gerais</option>
                  <option>São Paulo</option>
                  <option>Rio de Janeiro</option>
                  <option>Mato Grosso</option>
                  <option>Santa Catarina</option>
                  <option>Rio Grande do Sul</option>
                  <option>Paraná</option>
                </select>
              </div>
            </div>
            
          </div>
          <br/>
          <button onClick={handleSubmit}>Salvar</button>
        </div>
        
        </form>
        
        </div>
  )
}

export default App;