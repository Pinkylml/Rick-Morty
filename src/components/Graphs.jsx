import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

export const Graphs = ({ characters }) => {
  const stats = useMemo(() => {
    const statusCount = {};
    const speciesCount = {};
    const genderCount = {};
    
    characters.forEach(char => {
      // Count by status
      statusCount[char.status] = (statusCount[char.status] || 0) + 1;
      // Count by species
      speciesCount[char.species] = (speciesCount[char.species] || 0) + 1;
      // Count by gender
      genderCount[char.gender] = (genderCount[char.gender] || 0) + 1;
    });

    return {
      status: Object.entries(statusCount).map(([name, value]) => ({ name, value })),
      species: Object.entries(speciesCount).map(([name, value]) => ({ name, value })),
      gender: Object.entries(genderCount).map(([name,value])=>({name,value})),
    };
  }, [characters]);

  // Colores para los gráficos
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  // Contar el número total de personajes
  const totalCharacters = characters.length;

  return (
    <div className="max-w-4xl mx-auto mb-8 p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Character Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Gráfico de distribución de estado */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4 text-center">Status Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={stats.status}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {stats.status.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de distribución de especies */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4 text-center">Species Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.species}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8">
                {stats.species.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de distribución de género con barras apiladas */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4 text-center">Gender Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.gender}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#0088FE">
                {stats.gender.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
              <LabelList dataKey="value" position="insideTop" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Sección para mostrar el total de personajes */}
      <div className="bg-white p-4 rounded-lg shadow mt-8">
        <h3 className="text-lg font-semibold mb-4 text-center">Total Characters</h3>
        <div className="text-center text-xl font-semibold text-gray-800">
          {totalCharacters}
        </div>
      </div>

    </div>
  );
};
