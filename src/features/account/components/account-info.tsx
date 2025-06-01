import React from 'react'

const AccountInfo = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 space-y-6">
      <h3 className="text-md font-semibold text-gray-700">
        Informações de contato
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <input type="email" placeholder="Email*" className="input-style" />
        <input
          type="tel"
          placeholder="Telefone pessoal*"
          className="input-style"
        />
        <input
          type="tel"
          placeholder="Telefone profissional"
          className="input-style"
        />
        <input
          type="url"
          placeholder="Perfil do LinkedIn"
          className="input-style"
        />
      </div>

      <h3 className="text-md font-semibold text-gray-700 mt-6">Endereço</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <input type="text" placeholder="CEP" className="input-style" />
        <input type="text" placeholder="Logradouro" className="input-style" />
        <input type="text" placeholder="Número" className="input-style" />
        <input type="text" placeholder="Complemento" className="input-style" />
        <input type="text" placeholder="Bairro" className="input-style" />
        <input type="text" placeholder="Cidade" className="input-style" />
        <input type="text" placeholder="Estado" className="input-style" />
        <input type="text" placeholder="País" className="input-style" />
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-gray-100 rounded">Links úteis</button>
          <button className="px-4 py-2 bg-gray-100 rounded">Github</button>
          <button className="px-4 py-2 bg-gray-100 rounded">Site</button>
          <button className="px-4 py-2 bg-gray-100 rounded">Suporte</button>
        </div>
        <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Sair da conta
        </button>
      </div>
    </div>
  )
}

export default AccountInfo
