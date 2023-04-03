const db= require('../src/database/models');

const User = db.users;
async function resetData() {
    await User.destroy({
        where: {},
        truncate: false,
        cascade:true
    });
}
resetData();
