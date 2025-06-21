
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Folder, 
  FolderOpen, 
  File, 
  Clock, 
  Template, 
  Users, 
  Trash, 
  ChevronRight,
  ChevronDown,
  Plus,
  Menu
} from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const DashboardSidebar = ({ collapsed, onToggle }: SidebarProps) => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['projects']);

  const toggleFolder = (folderId: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderId) 
        ? prev.filter(id => id !== folderId)
        : [...prev, folderId]
    );
  };

  const projects = [
    { id: '1', name: 'Image Classification', type: 'folder', children: [
      { id: '1-1', name: 'model.py', type: 'file' },
      { id: '1-2', name: 'data_preprocessing.py', type: 'file' },
      { id: '1-3', name: 'training_results.ipynb', type: 'file' }
    ]},
    { id: '2', name: 'NLP Sentiment Analysis', type: 'folder', children: [
      { id: '2-1', name: 'bert_model.py', type: 'file' },
      { id: '2-2', name: 'data_cleaning.py', type: 'file' }
    ]},
    { id: '3', name: 'Time Series Forecasting', type: 'folder', children: [] }
  ];

  const recentFiles = [
    { name: 'model.py', project: 'Image Classification', modified: '2 hours ago' },
    { name: 'bert_model.py', project: 'NLP Analysis', modified: '1 day ago' },
    { name: 'data_viz.ipynb', project: 'Sales Prediction', modified: '2 days ago' }
  ];

  if (collapsed) {
    return (
      <aside className="fixed left-0 top-16 h-full w-16 bg-white border-r border-gray-200 z-40">
        <div className="p-4 space-y-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="w-8 h-8"
          >
            <Menu className="h-4 w-4" />
          </Button>
          <div className="space-y-2">
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Folder className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Clock className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Template className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="w-8 h-8">
              <Users className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </aside>
    );
  }

  return (
    <aside className="fixed left-0 top-16 h-full w-80 bg-white border-r border-gray-200 z-40 overflow-y-auto">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Workspace</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onToggle}
            className="w-8 h-8"
          >
            <Menu className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation Sections */}
        <nav className="space-y-6">
          {/* Projects */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <button 
                onClick={() => toggleFolder('projects')}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {expandedFolders.includes('projects') ? 
                  <ChevronDown className="h-4 w-4" /> : 
                  <ChevronRight className="h-4 w-4" />
                }
                <Folder className="h-4 w-4" />
                <span>Projects</span>
              </button>
              <Button variant="ghost" size="icon" className="w-6 h-6">
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            
            {expandedFolders.includes('projects') && (
              <div className="ml-6 space-y-1">
                {projects.map(project => (
                  <div key={project.id}>
                    <button 
                      onClick={() => toggleFolder(project.id)}
                      className="flex items-center space-x-2 w-full text-left p-2 rounded-md hover:bg-gray-100 text-sm"
                    >
                      {project.children.length > 0 ? (
                        expandedFolders.includes(project.id) ? 
                          <FolderOpen className="h-4 w-4 text-blue-500" /> : 
                          <Folder className="h-4 w-4 text-blue-500" />
                      ) : (
                        <Folder className="h-4 w-4 text-gray-400" />
                      )}
                      <span className="truncate">{project.name}</span>
                    </button>
                    
                    {expandedFolders.includes(project.id) && project.children.length > 0 && (
                      <div className="ml-6 space-y-1">
                        {project.children.map(file => (
                          <button 
                            key={file.id}
                            className="flex items-center space-x-2 w-full text-left p-2 rounded-md hover:bg-gray-100 text-sm"
                          >
                            <File className="h-4 w-4 text-gray-400" />
                            <span className="truncate">{file.name}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent Files */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Recent Files</span>
            </div>
            <div className="ml-6 space-y-1">
              {recentFiles.map((file, index) => (
                <button 
                  key={index}
                  className="flex flex-col items-start w-full text-left p-2 rounded-md hover:bg-gray-100"
                >
                  <div className="flex items-center space-x-2 w-full">
                    <File className="h-4 w-4 text-gray-400" />
                    <span className="text-sm truncate">{file.name}</span>
                  </div>
                  <div className="ml-6 text-xs text-gray-500 truncate w-full">
                    {file.project} • {file.modified}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Templates */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Template className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Templates</span>
            </div>
            <div className="ml-6 space-y-1">
              <button className="flex items-center space-x-2 w-full text-left p-2 rounded-md hover:bg-gray-100 text-sm">
                <span>Image Classification</span>
              </button>
              <button className="flex items-center space-x-2 w-full text-left p-2 rounded-md hover:bg-gray-100 text-sm">
                <span>NLP Processing</span>
              </button>
              <button className="flex items-center space-x-2 w-full text-left p-2 rounded-md hover:bg-gray-100 text-sm">
                <span>Time Series Analysis</span>
              </button>
            </div>
          </div>

          {/* Shared with Me */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <Users className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Shared with Me</span>
            </div>
            <div className="ml-6 space-y-1">
              <button className="flex items-center space-x-2 w-full text-left p-2 rounded-md hover:bg-gray-100 text-sm">
                <span>Team ML Project</span>
              </button>
            </div>
          </div>

          {/* Trash */}
          <div>
            <div className="flex items-center space-x-2">
              <Trash className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium text-gray-700">Trash</span>
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};
