// De aca utilizamos el router para manejar los endpoints de nuestro servidor.

const router = require("express").Router(); // Usamos el router de Express

const apiFoldersGetRoute = require('./api/foldersGet')
const apiMessagesRoute = require('./api/messages')
/* const apiMessageCreateRoute = require('./api/messagesCreate')
const apiMessagesDelete = require('./api/messagesDelete')
const apiMessagesGetListRoute = require('./api/messagesGetList')
const apiresetDataRoute = require('./api/resetData')
 */
// http://localhost:3000/paz-8fcb/api/v1/folders GET

router.use('/folders', apiFoldersGetRoute);

// http://localhost:3000/paz-8fcb/api/v1//messages GET

router.use('/messages', apiMessagesRoute);
/*
// https://academia.tim.teknosgroup.com/:usuario/api/messages/important/15459251a6d6b397565 DELETE

router.use('/messages', apiMessagesDelete);

// https://academia.tim.teknosgroup.com/:usuario/api/messages/important POST

router.use('/messages', apiMessagesGetListRoute);

// https://academia.tim.teknosgroup.com/:usuario/api/reset POST

router.use('/reset', apiresetDataRoute); */


module.exports = router;