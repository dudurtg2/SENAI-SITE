import React, { useState, useEffect } from 'react'
import { Search, Send, MessageSquare, Users, Paperclip, Star, Archive, Plus, Phone, Video, MoreVertical, Smile, Image, File, Clock, CheckCircle, Check, User, Bot, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const TeacherMessages = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [selectedConversation, setSelectedConversation] = useState(1)
  const [newMessage, setNewMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [filterType, setFilterType] = useState('all')

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 800)
  }, [])

  const conversations = [
    {
      id: 1,
      type: 'student',
      name: 'João Silva',
      avatar: '👨‍💻',
      class: 'TDS-2024-A',
      lastMessage: 'Professor, tenho uma dúvida sobre o projeto de React...',
      timestamp: '2025-06-10T14:30:00Z',
      unread: 2,
      status: 'online',
      priority: 'high'
    },
    {
      id: 2,
      type: 'student',
      name: 'Maria Santos',
      avatar: '👩‍💻',
      class: 'TDS-2024-A',
      lastMessage: 'Obrigada pelo feedback! Vou implementar as correções.',
      timestamp: '2025-06-10T13:15:00Z',
      unread: 0,
      status: 'offline',
      priority: 'medium'
    },
    {
      id: 3,
      type: 'group',
      name: 'TDS-2024-A',
      avatar: '👥',
      class: 'Turma (28 alunos)',
      lastMessage: 'Lembrete: Entrega do projeto final até sexta-feira.',
      timestamp: '2025-06-10T10:00:00Z',
      unread: 0,
      status: 'active',
      priority: 'high'
    },
    {
      id: 4,
      type: 'student',
      name: 'Pedro Costa',
      avatar: '👨‍🎓',
      class: 'TDS-2023',
      lastMessage: 'Professor, posso agendar uma orientação?',
      timestamp: '2025-06-09T16:45:00Z',
      unread: 1,
      status: 'away',
      priority: 'medium'
    }
  ]

  const messages = [
    {
      id: 1,
      conversationId: 1,
      sender: 'student',
      content: 'Professor, tenho uma dúvida sobre como implementar autenticação no React. Poderia me ajudar?',
      timestamp: '2025-06-10T14:25:00Z',
      type: 'text',
      status: 'read'
    },
    {
      id: 2,
      conversationId: 1,
      sender: 'teacher',
      content: 'Claro! Você pode usar React Context API com hooks. Posso te enviar alguns exemplos.',
      timestamp: '2025-06-10T14:27:00Z',
      type: 'text',
      status: 'delivered'
    },
    {
      id: 3,
      conversationId: 1,
      sender: 'student',
      content: 'Seria ótimo! Obrigado professor 🙏',
      timestamp: '2025-06-10T14:30:00Z',
      type: 'text',
      status: 'read'
    }
  ]

  const stats = {
    totalConversations: conversations.length,
    unreadMessages: conversations.reduce((acc, conv) => acc + conv.unread, 0),
    studentMessages: conversations.filter(c => c.type === 'student').length,
    groupMessages: conversations.filter(c => c.type === 'group').length
  }

  const getConversationTypeColor = (type: string) => {
    switch (type) {
      case 'student':
        return 'bg-blue-100 text-blue-700'
      case 'group':
        return 'bg-purple-100 text-purple-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online':
        return <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
      case 'away':
        return <div className="w-3 h-3 bg-yellow-500 rounded-full" />
      case 'offline':
        return <div className="w-3 h-3 bg-gray-400 rounded-full" />
      case 'active':
        return <div className="w-3 h-3 bg-green-500 rounded-full" />
      default:
        return <div className="w-3 h-3 bg-gray-400 rounded-full" />
    }
  }

  const getMessageStatusIcon = (status: string) => {
    switch (status) {
      case 'sent':
        return <Check className="h-4 w-4 text-gray-400" />
      case 'delivered':
        return <CheckCircle className="h-4 w-4 text-blue-500" />
      case 'read':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-400" />
    }
  }

  const formatTime = (timestamp: string) => {
    return new Date(timestamp).toLocaleTimeString('pt-BR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  const selectedConv = conversations.find(c => c.id === selectedConversation)
  const conversationMessages = messages.filter(m => m.conversationId === selectedConversation)

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         conv.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterType === 'all' || conv.type === filterType
    return matchesSearch && matchesFilter
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-indigo-200 rounded-full animate-spin border-t-indigo-600 mx-auto"></div>
            <MessageSquare className="h-8 w-8 text-indigo-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <p className="mt-4 text-gray-600 font-medium">Carregando mensagens...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <div className="p-6 max-w-7xl mx-auto">
        {/* Header Ultra-Moderno */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-lg">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Mensagens
                  </h1>
                  <div className="flex items-center space-x-2 mt-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-600">Online</p>
                  </div>
                </div>
              </div>
            </div>

            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg flex items-center space-x-2">
              <Plus className="h-5 w-5" />
              <span>Nova Conversa</span>
            </button>
          </div>

          {/* Estatísticas Rápidas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-gray-900">{stats.totalConversations}</div>
                  <div className="text-sm text-gray-600">Conversas</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-red-600">{stats.unreadMessages}</div>
                  <div className="text-sm text-gray-600">Não Lidas</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl">
                  <Star className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-green-600">{stats.studentMessages}</div>
                  <div className="text-sm text-gray-600">Estudantes</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl">
                  <User className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-purple-600">{stats.groupMessages}</div>
                  <div className="text-sm text-gray-600">Grupos</div>
                </div>
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interface de Chat */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 h-[700px]">
            
            {/* Lista de Conversas */}
            <div className="border-r border-gray-200 flex flex-col">
              {/* Header da Lista */}
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-1 relative">
                    <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Buscar conversas..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Filtros */}
                <div className="flex bg-white rounded-xl shadow-sm p-1">
                  {[
                    { key: 'all', label: 'Todos', icon: MessageSquare },
                    { key: 'student', label: 'Alunos', icon: User },
                    { key: 'group', label: 'Grupos', icon: Users }
                  ].map(({ key, label, icon: Icon }) => (
                    <button
                      key={key}
                      onClick={() => setFilterType(key)}
                      className={`flex-1 px-3 py-2 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                        filterType === key
                          ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                          : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Lista de Conversas */}
              <div className="flex-1 overflow-y-auto">
                {filteredConversations.map((conversation) => (
                  <div
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation.id)}
                    className={`p-4 cursor-pointer border-b border-gray-100 hover:bg-gray-50 transition-all duration-300 ${
                      selectedConversation === conversation.id ? 'bg-indigo-50 border-r-4 border-r-indigo-500' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="text-2xl">{conversation.avatar}</div>
                        <div className="absolute -bottom-1 -right-1">
                          {getStatusIcon(conversation.status)}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-gray-900 truncate">{conversation.name}</h3>
                          {conversation.unread > 0 && (
                            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                              {conversation.unread}
                            </span>
                          )}
                        </div>
                        
                        <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                        
                        <div className="flex items-center justify-between mt-1">
                          <span className={`text-xs px-2 py-1 rounded-full ${getConversationTypeColor(conversation.type)}`}>
                            {conversation.class}
                          </span>
                          <span className="text-xs text-gray-500">
                            {formatTime(conversation.timestamp)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Área de Chat */}
            <div className="lg:col-span-2 flex flex-col">
              {selectedConv ? (
                <>
                  {/* Header do Chat */}
                  <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-purple-50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <div className="text-3xl">{selectedConv.avatar}</div>
                          <div className="absolute -bottom-1 -right-1">
                            {getStatusIcon(selectedConv.status)}
                          </div>
                        </div>
                        <div>
                          <h2 className="font-bold text-gray-900">{selectedConv.name}</h2>
                          <p className="text-sm text-gray-600">{selectedConv.class}</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <button className="p-2 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
                          <Phone className="h-5 w-5 text-gray-600" />
                        </button>
                        <button className="p-2 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
                          <Video className="h-5 w-5 text-gray-600" />
                        </button>
                        <button className="p-2 bg-white rounded-xl shadow-sm hover:bg-gray-50 transition-colors">
                          <MoreVertical className="h-5 w-5 text-gray-600" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Mensagens */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-gray-50">
                    {conversationMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === 'teacher' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                            message.sender === 'teacher'
                              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
                              : 'bg-white border border-gray-200 text-gray-900'
                          }`}
                        >
                          <p className="text-sm">{message.content}</p>
                          <div className={`flex items-center justify-between mt-2 text-xs ${
                            message.sender === 'teacher' ? 'text-indigo-100' : 'text-gray-500'
                          }`}>
                            <span>{formatTime(message.timestamp)}</span>
                            {message.sender === 'teacher' && getMessageStatusIcon(message.status)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input de Mensagem */}
                  <div className="p-6 border-t border-gray-200 bg-white">
                    <div className="flex items-center space-x-4">
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Paperclip className="h-5 w-5" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <Image className="h-5 w-5" />
                      </button>
                      
                      <div className="flex-1 relative">
                        <input
                          type="text"
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Digite sua mensagem..."
                          className="w-full px-4 py-3 bg-gray-50 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all duration-300"
                          onKeyPress={(e) => {
                            if (e.key === 'Enter' && newMessage.trim()) {
                              // Lógica para enviar mensagem
                              setNewMessage('')
                            }
                          }}
                        />
                        <button 
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                          onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        >
                          <Smile className="h-5 w-5" />
                        </button>
                      </div>

                      <button 
                        className="p-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={!newMessage.trim()}
                      >
                        <Send className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <MessageSquare className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Selecione uma conversa</h3>
                    <p className="text-gray-600">Escolha uma conversa para começar a enviar mensagens</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherMessages
