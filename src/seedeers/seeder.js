const db = require('../utils/database');
const initModels = require('../models/init.models');

const Categories = require('../models/categories.models');
const Videos = require('../models/videos.models');
const Courses = require('../models/courses.models');
const Users = require('../models/users.models');
const UsersCourses = require('../models/usersCourses.models');

initModels();
const courses = [
    {
        title: 'Programando con JavaScritp',
        description: 'curso basico de JS',
        instructor: 'Ian Rosas',
        videoId: 1,
        categoryId: 1,
    },
    {
        title: 'Programando con PHP',
        description: 'curso basico PHP',
        instructor: 'Carlos',
        videoId: 1,
        categoryId: 1,
    },
    {
        title: 'Curso basico de comida',
        description: 'aprenderas a cocinar comida tipica de colombia',
        instructor: 'andrea',
        videoId: 1,
        categoryId: 2,
    }
];

const users = [
    {
        firstName: "Darwin",
        lastName: "Quintero",
        password: "11331",
        email: "darwin@gmail.com",
    },
    {
        firstName: "chartih",
        lastName: "patiño",
        password: "12345",
        email: "charith@gmail.com",
    }
];

const usersCourses = [
    {
        userId: 1,
        courseId: 1
},
    {
        userId: 2,
        courseId: 2
    }
];

const categories = [
    { name: 'programacion' },
    { name: 'comida' },
    { name: 'juegos' },
    { name: 'etc' }
];

const videos = [
    {
        title: 'Aprendiendo js basico',
        url: 'http://youtube.com'
    },
    {
        title: 'Comida tipica de colombia',
        url: 'http://youtube.com'
    },
    {
        title: 'algun otro curso',
        url: 'http://youtube.com'
    }
];


db.sync({ force: true })
    .then(() => {
        setTimeout(() => {
            console.log('Insertando');
            users.forEach((user) => Users.create(user));
        }, 15000)
    })
    .then(() => {
        setTimeout(() => {
            courses.forEach((cuorse) => Courses.create(cuorse));
        }, 10000)
    })
    .then(() => {
        setTimeout(() => {
            usersCourses.forEach((usercourse) => UsersCourses.create(usercourse));
        }, 20000)
    })
    .then(() => {
        setTimeout(() => {
            videos.forEach((video) => Videos.create(video));
        }, 8000)
    })
    .then(() => {
        setTimeout(() => {
            categories.forEach((category) => Categories.create(category));
        }, 5000)
    })




