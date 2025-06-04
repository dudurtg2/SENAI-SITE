import React, { useState, useEffect } from 'react';
import { Notification } from '../../types/types-queries';
import NotificationCard from '../../components/notification-card';
import { useNotifications } from '../../contexts/notification-context';

const NotificationsPage: React.FC = () => {
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [filterOption, setFilterOption] = useState<string>('Mais recentes');
  const [filteredNotifications, setFilteredNotifications] = useState<Notification[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Usando o contexto de notificações
  const { 
    notifications, 
    loading: isLoading, 
    deleteNotification, 
    markAsRead,
    markAllAsRead,
    refreshNotifications
  } = useNotifications();
  
  useEffect(() => {
    // Atualiza as notificações quando a página é carregada
    refreshNotifications();
  }, [refreshNotifications]);
  
  useEffect(() => {
    if (notifications) {
      let filtered = [...notifications];
      
      // Aplicando filtros de data
      if (startDate) {
        const startDateTime = new Date(startDate).getTime();
        filtered = filtered.filter(notif => 
          new Date(notif.createdAt).getTime() >= startDateTime
        );
      }
      
      if (endDate) {
        const endDateTime = new Date(endDate).getTime() + 86400000; // + 1 dia
        filtered = filtered.filter(notif => 
          new Date(notif.createdAt).getTime() <= endDateTime
        );
      }
      
      // Aplicando filtro de pesquisa
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(notif => 
          notif.project.name.toLowerCase().includes(term) || 
          notif.project.description.toLowerCase().includes(term) ||
          notif.project.creator.toLowerCase().includes(term)
        );
      }
      
      // Aplicando filtros de ordenação/status
      if (filterOption === 'Mais recentes') {
        filtered.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (filterOption === 'Mais antigas') {
        filtered.sort((a, b) => 
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      } else if (filterOption === 'Não lidas') {
        filtered = filtered.filter(notif => !notif.read);
      } else if (filterOption === 'Lidas') {
        filtered = filtered.filter(notif => notif.read);
      }
      
      setFilteredNotifications(filtered);
    }
  }, [notifications, startDate, endDate, filterOption, searchTerm]);

  const handleDeleteNotification = (id: string) => {
    deleteNotification(id);
  };
  
  const handleMarkAsRead = (id: string) => {
    markAsRead(id);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterOption(event.target.value);
  };
  
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  
  const handleMarkAllAsRead = () => {
    markAllAsRead();
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Notificações</h1>
        
        <button 
          onClick={handleMarkAllAsRead}
          className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Marcar todas como lidas
        </button>
      </div>
      
      {/* Filtros */}
      <div className="flex flex-wrap gap-4 mb-6 items-center bg-gray-100 p-4 rounded-lg">
        <div className="flex items-center">
          <span className="mr-2 text-sm font-medium text-gray-700">Período:</span>
          <div className="flex gap-2 items-center">
            <div className="flex items-center">
              <span className="mr-2 text-xs text-gray-500">De:</span>
              <input 
                type="date" 
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
                className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-xs text-gray-500">Até:</span>
              <input 
                type="date" 
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
                className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center ml-auto">
          <select 
            value={filterOption}
            onChange={handleFilterChange}
            className="p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="Mais recentes">Mais recentes</option>
            <option value="Mais antigas">Mais antigas</option>
            <option value="Não lidas">Não lidas</option>
            <option value="Lidas">Lidas</option>
          </select>
          
          <div className="relative ml-2">
            <input 
              type="text"
              placeholder="Pesquisar"
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth={1.5} 
              stroke="currentColor" 
              className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Lista de notificações */}
      <div className="space-y-4">
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredNotifications.length === 0 ? (
          <div className="p-8 text-center bg-gray-50 border border-gray-200 rounded-md">
            <p className="text-gray-500 font-medium">Nenhuma notificação encontrada</p>
          </div>
        ) : (
          filteredNotifications.map(notification => (
            <NotificationCard
              key={notification.id}
              notification={notification}
              onDelete={handleDeleteNotification}
              onMarkAsRead={handleMarkAsRead}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
