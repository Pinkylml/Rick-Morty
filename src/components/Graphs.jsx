import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts';

export const Graphs = ({ characters, totalInfo }) => {
  // Declaración de COLORS antes de su uso
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const stats = useMemo(() => {
    const statusCount = {};
    const speciesCount = {};
    const genderCount = {};
    
    characters.forEach(char => {
      // Contar por estado
      statusCount[char.status] = (statusCount[char.status] || 0) + 1;
      // Contar por especie
      speciesCount[char.species] = (speciesCount[char.species] || 0) + 1;
      // Contar por género
      genderCount[char.gender] = (genderCount[char.gender] || 0) + 1;
    });

    // Convertir los conteos de género a porcentajes para el gráfico radial
    const total = Object.values(genderCount).reduce((a, b) => a + b, 0);
    const genderData = Object.entries(genderCount)
      .map(([name, value], index) => ({
        name,
        value: (value / total) * 100,
        fill: COLORS[index % COLORS.length] // Usar la constante COLORS
      }))
      .sort((a, b) => b.value - a.value); // Ordenar por valor descendente

    return {
      status: Object.entries(statusCount).map(([name, value]) => ({ name, value })),
      species: Object.entries(speciesCount).map(([name, value]) => ({ name, value })),
      gender: genderData
    };
  }, [characters, COLORS]); // Asegurarse de incluir `COLORS` en las dependencias

  return (
    <div className="max-w-6xl mx-auto mb-8 p-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Character Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Gráfico de estado */}
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

        {/* Gráfico de especies */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4 text-center">Species Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats.species} layout="vertical">
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
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

        {/* Gráfico radial para género */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4 text-center">Gender Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <RadialBarChart 
              cx="50%" 
              cy="50%" 
              innerRadius="20%" 
              outerRadius="100%" 
              data={stats.gender} 
              startAngle={180} 
              endAngle={0}
            >
              <RadialBar
                minAngle={15}
                label={{ fill: '#666', position: 'insideStart' }}
                background
                clockWise={true}
                dataKey="value"
              />
              <Legend 
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
              <Tooltip 
                formatter={(value) => `${value.toFixed(1)}%`}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Información total */}
      <div className="bg-white p-4 rounded-lg shadow mt-8">
        <h3 className="text-lg font-semibold mb-4 text-center">Current Page Information</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600">Characters Shown</p>
            <p className="text-xl font-bold text-blue-600">{characters.length}</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Characters</p>
            <p className="text-xl font-bold text-green-600">{totalInfo?.count || 'N/A'}</p>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-600">Total Pages</p>
            <p className="text-xl font-bold text-yellow-600">{totalInfo?.pages || 'N/A'}</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600">Species Types</p>
            <p className="text-xl font-bold text-purple-600">{stats.species.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
