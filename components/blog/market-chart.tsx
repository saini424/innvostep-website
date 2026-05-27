"use client"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2020', value: 400 },
  { name: '2021', value: 700 },
  { name: '2022', value: 600 },
  { name: '2023', value: 900 },
  { name: '2024', value: 1200 },
];

export function MarketChart() {
  return (
    <div className="my-12 p-8 bg-white border border-slate-200 rounded-[2.5rem] shadow-sm">
      <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Market Growth Opportunity</h4>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip />
            <Area type="monotone" dataKey="value" stroke="#8b5cf6" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-4 text-xs text-slate-400 text-center italic">Figure 1.1: The rising value of student-led startups (2020-2024)</p>
    </div>
  );
}