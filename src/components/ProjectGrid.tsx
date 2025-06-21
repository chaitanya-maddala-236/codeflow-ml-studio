
import { Button } from "@/components/ui/button";
import { MoreVertical, Calendar, Users, Play, Share } from "lucide-react";

export const ProjectGrid = () => {
  const projects = [
    {
      id: '1',
      name: 'Image Classification Model',
      description: 'CNN model for classifying product images with 94.2% accuracy',
      lastModified: '2 hours ago',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop',
      collaborators: [
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      ],
      status: 'active',
      progress: 85
    },
    {
      id: '2',
      name: 'NLP Sentiment Analysis',
      description: 'BERT-based model for analyzing customer feedback sentiment',
      lastModified: '1 day ago',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop',
      collaborators: [
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face'
      ],
      status: 'training',
      progress: 45
    },
    {
      id: '3',
      name: 'Sales Prediction Dashboard',
      description: 'Time series forecasting model with interactive visualizations',
      lastModified: '3 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop',
      collaborators: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
      ],
      status: 'completed',
      progress: 100
    },
    {
      id: '4',
      name: 'Fraud Detection System',
      description: 'Anomaly detection model for financial transaction monitoring',
      lastModified: '5 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=200&fit=crop',
      collaborators: [],
      status: 'draft',
      progress: 20
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'training': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-purple-100 text-purple-800';
      case 'draft': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Recent Projects</h3>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map(project => (
          <div key={project.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Thumbnail */}
            <div className="relative h-48 bg-gray-100">
              <img 
                src={project.thumbnail} 
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <Button variant="ghost" size="icon" className="bg-white/80 hover:bg-white">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-2">{project.name}</h4>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

              {/* Progress */}
              {project.status === 'training' && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Training Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span>{project.lastModified}</span>
                  </div>
                  
                  {project.collaborators.length > 0 && (
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4 text-gray-400" />
                      <div className="flex -space-x-2">
                        {project.collaborators.slice(0, 3).map((avatar, index) => (
                          <img
                            key={index}
                            src={avatar}
                            alt="Collaborator"
                            className="w-6 h-6 rounded-full border-2 border-white"
                          />
                        ))}
                        {project.collaborators.length > 3 && (
                          <div className="w-6 h-6 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-600">
                            +{project.collaborators.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
