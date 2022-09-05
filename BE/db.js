import mongoose from "mongoose";

const DB_URL = 'mongodb+srv://solvve_course_js_2:solvve_course_js_2@solvvecoursejs2.ifnkood.mongodb.net/?retryWrites=true&w=majority';

const start = async () => {
    await mongoose.connect(DB_URL, {useUnifiedTopology: true});
}
export default start();