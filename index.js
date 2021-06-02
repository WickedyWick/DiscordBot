const Discord = require('discord.js');
const client = new Discord.Client();
var cron = require('node-cron');
require('dotenv').config({path: __dirname + '/.env'})
try{
let list;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  list = client.guilds.cache.get(String(process.env.SERVER_ID)); 
  
});
var user;

client.on('message',message=>{
    if(message.author.id == String(process.env.WICK_ID)){
        list.members.cache.forEach(member => {console.log(member.user.id);if(member.user.id === String(process.env.WICK_ID))
            {
                member.user.send("Test").catch(err=>{console.log(err)})
            }
        });
    }
})

cron.schedule("0 16 * * *",()=>{
    list.members.cache.forEach(member => {console.log(member.user.id);if(member.user.id === String(process.env.USER_ID))
        {
            member.user.send("Wick is 20 years old!").catch(err=>{console.log(err)})
        }
    });
    
})
}catch(err){

}

//client.users.cache.get('140843716016472065').send('Test');

client.login(String(process.env.TOKEN));
