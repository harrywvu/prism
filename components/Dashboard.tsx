import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { MOCK_STUDENT, RECENT_ACTIVITY } from '../constants';

const data = [
  { name: 'Mon', spend: 12 },
  { name: 'Tue', spend: 18 },
  { name: 'Wed', spend: 5 },
  { name: 'Thu', spend: 24 },
  { name: 'Fri', spend: 10 },
  { name: 'Sat', spend: 45 },
  { name: 'Sun', spend: 8 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="w-full bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h3 className="font-alice text-2xl md:text-3xl text-white">Dashboard</h3>
          <p className="font-montserrat text-sm text-gray-400">Welcome back, {MOCK_STUDENT.name}</p>
        </div>
        <div className="bg-prism-primary/20 px-4 py-2 rounded-xl border border-prism-primary/40">
           <span className="text-gray-300 text-sm">Balance: </span>
           <span className="text-2xl font-bold text-prism-accent">${MOCK_STUDENT.balance.toFixed(2)}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <div className="lg:col-span-2 bg-black/20 rounded-2xl p-4 border border-white/5">
          <h4 className="font-montserrat text-sm font-semibold text-gray-300 mb-4">Weekly Spending</h4>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorSpend" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#E17564" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#E17564" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                <XAxis dataKey="name" stroke="#666" fontSize={12} tickLine={false} axisLine={false} />
                {/* Fixed: Replaced invalid 'prefix' prop with 'tickFormatter' to display currency symbol */}
                <YAxis stroke="#666" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#09122C', borderColor: '#872341', color: '#fff' }}
                  itemStyle={{ color: '#E17564' }}
                />
                <Area type="monotone" dataKey="spend" stroke="#E17564" fillOpacity={1} fill="url(#colorSpend)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-black/20 rounded-2xl p-4 border border-white/5 overflow-hidden">
          <h4 className="font-montserrat text-sm font-semibold text-gray-300 mb-4">Recent Activity</h4>
          <div className="flex flex-col gap-4">
            {RECENT_ACTIVITY.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-3">
                   <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.type === 'PAYMENT' ? 'bg-red-500/20 text-red-400' :
                      item.type === 'ACCESS' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                   }`}>
                      {item.type === 'PAYMENT' ? '$' : item.type === 'ACCESS' ? 'ID' : 'Bk'}
                   </div>
                   <div>
                     <p className="font-bold text-sm text-white">{item.location}</p>
                     <p className="text-xs text-gray-500">{item.timestamp}</p>
                   </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold text-sm ${item.type === 'PAYMENT' ? 'text-prism-accent' : 'text-white'}`}>
                    {item.type === 'PAYMENT' ? `-$${item.amount?.toFixed(2)}` : item.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;