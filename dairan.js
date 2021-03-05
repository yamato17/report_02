const express = require('express');
const server = express();
const ejs = require('ejs');
const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'node',
    password: 'websystem',
    database: 'web'
});

server.get('/', function( req, res ){
    res.render('mokuzi.ejs',{ title:'Express' });
});

server.get('/games',function( req, res ){
    let query = 'select GameName.id,GameName.game_name,buy.number from GameName inner join buy on GameName.number_id=buy.id ;';
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'GN.ejs', { content: rows });
    });
});

server.get('/characters',function( req, res ){
    let query = 'select Fighter.id,Fighter.fighter_number,Fighter.fighter_name from Fighter;';
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render( 'FN.ejs', { content: rows });
    });
});

server.get('/other',function(req,res){
    let query = 'select jo.fighter, ga.series from jo inner join ga on jo.seriesr=ga.id, wo.exhibit from jo inner join wo on jo.work=wo.id ;';
    console.log( query );
    connection.query( query, (error, rows, fields) => {
        if( error ) {
            console.log('Query Error');
        }
        res.render('JO.ejs', { content: rows });
    });
});
    
server.listen(80,function() {
    console.log('listening on port 80');
});
