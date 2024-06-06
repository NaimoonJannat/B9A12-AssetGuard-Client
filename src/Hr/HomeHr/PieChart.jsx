import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from '../../Shared/Title';

const RequestsPieChart = () => {
    const [data, setData] = useState([]);
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3000/requests');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching the data", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const returnableCount = data.filter(item => item.type === 'returnable').length;
        const nonReturnableCount = data.filter(item => item.type === 'non-returnable').length;

        setChartData([
            { name: 'Returnable', value: returnableCount },
            { name: 'Non-returnable', value: nonReturnableCount }
        ]);
    }, [data]);

    const COLORS = ['#240750', '#57A6A1'];

    return (
        <div>
            <Title title="Request Overview" subtitle="Returnable vs Non-returnable Items"></Title>
            <div className="flex justify-center mt-8">
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RequestsPieChart;
