import React, { useState } from 'react';
import { Notification } from '../types/types-queries';
import NotificationDetailsModal from './notification-details-modal';

interface NotificationCardProps {
  notification: Notification;
  onDelete: (id: string) => void;
  onMarkAsRead?: (id: string) => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ notification, onDelete, onMarkAsRead }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { project } = notification;
  
  const handleCardClick = () => {
    setShowDetails(true);
    if (!notification.read && onMarkAsRead) {
      onMarkAsRead(notification.id);
    }
  };  return (
    <>
      <div 
        className={`relative bg-white rounded-md shadow-md mb-4 p-4 hover:shadow-lg transition-shadow cursor-pointer ${!notification.read ? 'border-l-4 border-blue-500' : ''}`}
        onClick={handleCardClick}
      >
        <div className="absolute top-4 right-4 flex gap-2 z-10" onClick={e => e.stopPropagation()}>
          {!notification.read && onMarkAsRead && (
            <button 
              onClick={() => onMarkAsRead(notification.id)}
              className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-md p-2 transition-colors"
              aria-label="Marcar como lido"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          )}
          <button 
            onClick={() => onDelete(notification.id)}
            className="bg-red-100 hover:bg-red-200 text-red-600 rounded-md p-2 transition-colors"
            aria-label="Excluir notificação"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
          </button>
        </div>

      <div className="mb-2">
        <span className="text-sm text-red-600 font-medium">Status do projeto</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-1">{project.name}</h3>
      <div className="mb-2 text-sm text-gray-600">
        {project.date}
      </div>
        <div className="mb-2">
        <span className="font-semibold">{project.creator}</span>
        <span className="text-sm text-gray-600"> ({project.creatorRole})</span>
      </div>
      
      <p className="text-gray-700 mb-4 line-clamp-4">{project.description}</p>
        <div className="text-xs text-gray-500">
        Recebido em: {new Date(notification.createdAt).toLocaleString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
      </div>

      {showDetails && (
        <NotificationDetailsModal 
          notification={notification} 
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

export default NotificationCard;
