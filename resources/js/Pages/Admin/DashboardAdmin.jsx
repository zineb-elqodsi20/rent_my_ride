import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const DashboardAdmin = () => {
    const [stats, setStats] = useState({
        reservationsToday: 0,
        reservationsChange: 0,
        totalClients: 0,
        clientsChange: 0,
        popularCars: [],
        totalRevenue: 0,
        currentMonthRevenue: 0,
        revenueChange: 0,
        reservationsByMonth: Array.from({ length: 12 }, () => 0),
    });

    const [loading, setLoading] = useState(true);

    const fetchStats = async () => {
        try {
            const response = await axios.get('/admin/stats');
            setStats(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Erreur de chargement des stats:', error);
        }
    };

    useEffect(() => {
        fetchStats();

        const interval = setInterval(() => {
            fetchStats();
        }, 30000); 

        return () => clearInterval(interval);
    }, []);

    const getMonthName = (monthNumber) => {
        const date = new Date();
        date.setMonth(monthNumber - 1);
        return date.toLocaleString('fr-FR', { month: 'short' });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Chargement du tableau de bord...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-3xl font-bold text-primary-500 mb-8">Tableau de Bord Admin</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Réservations aujourd'hui */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-lg shadow p-6"
                >
                    <h3 className="text-gray-500 text-sm font-medium">Réservations Aujourd'hui</h3>
                    <p className="text-3xl font-bold text-primary-500 my-2">{stats.reservationsToday}</p>
                    <div className={`flex items-center ${stats.reservationsChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        <span className="text-sm font-medium">
                            {stats.reservationsChange > 0 ? '+' : ''}{stats.reservationsChange}%
                        </span>
                        <span className="text-xs ml-1">vs hier</span>
                    </div>
                </motion.div>

                {/* Clients inscrits */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="bg-white rounded-lg shadow p-6"
                >
                    <h3 className="text-gray-500 text-sm font-medium">Clients Inscrits</h3>
                    <p className="text-3xl font-bold text-primary-500 my-2">{stats.totalClients}</p>
                    <div className={`flex items-center ${stats.clientsChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        <span className="text-sm font-medium">
                            {stats.clientsChange > 0 ? '+' : ''}{stats.clientsChange}%
                        </span>
                        <span className="text-xs ml-1">vs mois dernier</span>
                    </div>
                </motion.div>

                {/* Revenu mensuel */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="bg-white rounded-lg shadow p-6"
                >
                    <h3 className="text-gray-500 text-sm font-medium">Revenu Mensuel</h3>
                    <p className="text-3xl font-bold text-primary-500 my-2">
                        {new Intl.NumberFormat('fr-FR', { 
                            style: 'currency', 
                            currency: 'EUR',
                            minimumFractionDigits: 2
                        }).format(stats.currentMonthRevenue)}
                    </p>
                    <div className={`flex items-center ${stats.revenueChange > 0 ? 'text-green-500' : 'text-red-500'}`}>
                        <span className="text-sm font-medium">
                            {stats.revenueChange > 0 ? '+' : ''}{stats.revenueChange}%
                        </span>
                        <span className="text-xs ml-1">vs mois dernier</span>
                    </div>
                </motion.div>

                {/* Revenu total */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="bg-white rounded-lg shadow p-6"
                >
                    <h3 className="text-gray-500 text-sm font-medium">Revenu Total</h3>
                    <p className="text-3xl font-bold text-primary-500 my-2">
                        {new Intl.NumberFormat('fr-FR', { 
                            style: 'currency', 
                            currency: 'EUR',
                            minimumFractionDigits: 2
                        }).format(stats.totalRevenue)}
                    </p>
                    <div className="flex items-center text-gray-500">
                        <span className="text-xs ml-1">Toutes les réservations</span>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Voitures populaires */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-lg shadow p-6"
                >
                    <h3 className="text-gray-500 text-sm font-medium mb-4">Voitures les plus réservées</h3>
                    {stats.popularCars.length > 0 ? (
                        <div className="space-y-4">
                            {stats.popularCars.map((car, index) => (
                                <div key={car.id || index} className="flex items-center">
                                    <div className="w-2/3">
                                        <p className="text-sm font-medium">{car.name}</p>
                                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                                            <div 
                                                className="h-2 rounded-full" 
                                                style={{ 
                                                    width: `${(car.reservations / Math.max(...stats.popularCars.map(c => c.reservations))) * 100}%`,
                                                    backgroundColor: `hsl(${index * 60 + 180}, 70%, 60%)`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="w-1/3 text-right">
                                        <p className="text-sm font-bold text-primary-500">
                                            {car.reservations} réservations
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-gray-500 text-sm">Aucune donnée disponible</p>
                    )}
                </motion.div>

                {/* Graphique des réservations par mois */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white rounded-lg shadow p-6 lg:col-span-2"
                >
                    <h3 className="text-gray-500 text-sm font-medium mb-4">Réservations par Mois</h3>
                    <div className="flex items-end space-x-2 h-64">
                        {Object.entries(stats.reservationsByMonth).map(([month, count]) => (
                            <div key={month} className="flex flex-col items-center flex-1">
                                <div 
                                    className="w-full bg-primary-300 rounded-t-sm"
                                    style={{ 
                                        height: `${(count / Math.max(1, ...Object.values(stats.reservationsByMonth))) * 80}%`,
                                        backgroundColor: `hsl(${month * 30}, 70%, 60%)`
                                    }}
                                ></div>
                                <span className="text-xs mt-2 text-gray-500">{getMonthName(parseInt(month))}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DashboardAdmin;
