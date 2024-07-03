const connection= require('./connection')

const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');

    return tasks[0];
};

const createTask = async (task) => {
    const { title } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const [createdTask] = await connection.execute(
        'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)', [title, 'pendente', dateUTC]
    );

    return createdTask;
};

const deleteTask = async (id) => {
    const removeTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);

    return removeTask;
};


module.exports = {
    getAll,
    createTask,
    deleteTask
};