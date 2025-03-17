
const {app} = require('@/Server/ServerStart');

const authRoutes = require('@/routes/authRoutes');
const useRoutes = () => {

    
    // Routes
    app.use('/api/auth', authRoutes);

}

module.exports = {useRoutes};