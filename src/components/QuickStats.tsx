
import { TrendingUp, Database, Users, Clock } from "lucide-react";

export const QuickStats = () => {
  const stats = [
    {
      label: 'Total Projects',
      value: '12',
      change: '+2 this week',
      trend: 'up',
      icon: Database,
      color: 'text-blue-600'
    },
    {
      label: 'Models Trained',
      value: '847',
      change: '+23 this month',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600'
    },
    {
      label: 'Collaboration Hours',
      value: '156',
      change: '+12 this week',
      trend: 'up',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      label: 'Compute Time',
      value: '2.4h',
      change: 'Today',
      trend: 'neutral',
      icon: Clock,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className={`text-xs mt-1 ${
                stat.trend === 'up' ? 'text-green-600' : 
                stat.trend === 'down' ? 'text-red-600' : 
                'text-gray-500'
              }`}>
                {stat.change}
              </p>
            </div>
            <div className={`p-3 rounded-full bg-gray-50 ${stat.color}`}>
              <stat.icon className="h-6 w-6" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
