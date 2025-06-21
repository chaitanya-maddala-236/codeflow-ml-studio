
import { Clock, Code, Database, Share, Play, Users } from "lucide-react";

export const ActivityFeed = () => {
  const activities = [
    {
      id: '1',
      type: 'code_edit',
      user: 'You',
      action: 'edited model.py',
      project: 'Image Classification',
      timestamp: '2 minutes ago',
      icon: Code,
      color: 'text-blue-600'
    },
    {
      id: '2',
      type: 'training',
      user: 'System',
      action: 'completed model training',
      project: 'NLP Sentiment Analysis',
      timestamp: '1 hour ago',
      icon: Play,
      color: 'text-green-600'
    },
    {
      id: '3',
      type: 'collaboration',
      user: 'Sarah Chen',
      action: 'shared project with team',
      project: 'Sales Prediction',
      timestamp: '3 hours ago',
      icon: Share,
      color: 'text-purple-600'
    },
    {
      id: '4',
      type: 'data',
      user: 'You',
      action: 'uploaded new dataset',
      project: 'Fraud Detection',
      timestamp: '5 hours ago',
      icon: Database,
      color: 'text-orange-600'
    },
    {
      id: '5',
      type: 'collaboration',
      user: 'Marcus Rodriguez',
      action: 'joined project',
      project: 'Time Series Forecasting',
      timestamp: '1 day ago',
      icon: Users,
      color: 'text-teal-600'
    },
    {
      id: '6',
      type: 'code_edit',
      user: 'Emily Watson',
      action: 'committed changes',
      project: 'Computer Vision',
      timestamp: '2 days ago',
      icon: Code,
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
        <Clock className="h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {activities.map(activity => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`p-2 rounded-full bg-gray-50 ${activity.color}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm">
                <span className="font-medium text-gray-900">{activity.user}</span>
                <span className="text-gray-600"> {activity.action} in </span>
                <span className="font-medium text-blue-600">{activity.project}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">{activity.timestamp}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View all activity
        </button>
      </div>
    </div>
  );
};
