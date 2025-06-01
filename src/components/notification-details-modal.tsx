import React from 'react';
import { Notification } from '../types/types-queries';

interface NotificationDetailsModalProps {
  notification: Notification;
  onClose: () => void;
}

const NotificationDetailsModal: React.FC<NotificationDetailsModalProps> = ({ notification, onClose }) => {
  const { project } = notification;
  
  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between border-b p-4 bg-gray-50">
          <h2 className="text-xl font-bold">{project.name}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Fechar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto">
          <div className="mb-6 flex items-center">
            <div className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
              {project.status}
            </div>
            <span className="ml-4 text-sm text-gray-500">
              {project.date}
            </span>
          </div>
          
          <div className="mb-4">
            <span className="font-medium">Criador:</span>
            <span className="ml-2">{project.creator} ({project.creatorRole})</span>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Descrição:</h3>
            <p className="text-gray-700 whitespace-pre-line">
              {project.description}
            </p>
          </div>
          
          <div className="text-sm text-gray-500 mt-8">
            Notificação recebida em: {formatDateTime(notification.createdAt)}
          </div>
        </div>
        
        <div className="border-t p-4 bg-gray-50 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded mr-2"
          >
            Fechar
          </button>
          <a
            href={`/app/projects/${project.id}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded"
          >
            Ver Projeto
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotificationDetailsModal;
