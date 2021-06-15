const token 'token';
 

const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.token); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

client.login(token); //Ligando o Bot caso ele consiga acessar o token


client.on('ready', () => {
  console.log(`bot ativo ${client.user.tag} `);

var tabela = [
  
		{ name: 'DisHosting.com ', type: 'LISTENING' },
		
		{ name: 'prefix: +', type: 'LISTENING'},
		
		{ name: 'help: +help', type: 'LISTENING'}

	];

	function setStatus(ABSENT) {
		var altstatus = tabela[Math.floor(Math.random() * tabela.length)];
		client.user.setActivity(altstatus);
	}
	setStatus('ABSENT');
	setInterval(() => setStatus(), 5000);
});


client.on('message', message => {
	if (message.content === '+ping') {
		message.channel.send('Pong 🏓! ');
	}
});

client.on('message', message => {
  if (message.content === '+fruit') {
    message.react('🥑');
    message.react('🍓');
    message.react('🍏');
    message.react('🍌');
  }
});



client.on('message', async message => {
  if (message.content === '+join') {
  if (message.member.voice.channel !== null){
    const connection = await message.member.voice.channel.join();
    
    message.channel.send(`**🇧🇷estou entrando em um canal de voz...**
   
    **🇺🇸I'm joining a voice channel...**`);
    message.react('✅');
  }

	if (message.member.voice.channel == null) {
		message.channel.send(`**🇧🇷entre em um canal de voz para utilizar este comando** 
		**🇺🇸 join a voice channel to use this command**`);
		message.react('🚫');
   	
	}};
});
		
client.on('message', async message => {
		if (message.content === '+leave') {
		
		if (message.member.voice.channel) {
		  message.channel.send(`**🇧🇷eu saí de um canal de voz utilizado!** 
		  **🇺🇸 I left a utilizad voice channel**`)
		  message.react('🔌');
		  message.react('❗');
		}
		  else {
		    message.channel.send(`**entre em um canal para utilizar este comando!**`);
		    message.react('❌');
		  }
		  

		
		  const desconnectinon = await message.member.voice.channel.leave();
		  voiceChannel.leave();
	}
});

client.on('message', message => {
  if (message.content === '+invite') {
    message.channel.send('**🇺🇸invite link:** ```https://discord.com/oauth2/authorize?client_id=838918022043009095&scope=bot&permissions=8``` 🇧🇷 **link de convite**');
    message.react('📃');
  }
});



client.on('message', message => {
  if (message.content === '+i') {
    message.channel.send('**🇺🇸invite link:** ```https://discord.com/oauth2/authorize?client_id=838918022043009095&scope=bot&permissions=8``` 🇧🇷 **link de convite**');
    message.react('📃');
  }
});

client.on('raw', console.log);

client.on('message', message => {
  if (message.content === '+help') {
     message.dm.send('**on commands:**```+ping``````+join``````+leave``````+i ou +invite```')
     message.react('📌');
  }
});

client.on('message', message => {
  if (message.content === '+ajuda') {
     message.dm.send('**comandos ativos:**```+ping``````+join``````+leave``````+i ou +invite```');
     message.react('📌');
  }
});

client.on('dm', message => {
  if (message.content === ' ')
  {
    if (message.author.bot !== null) {
      dm.send('**não mande mensagem direta para mim seu bot maluco**')
    }
    
    if (message.author.bot == null) {
      
    
    
    dm.send('**não mande mensagem direta para @hyukinha**')
    message.react('🚫');
  }
}});


const hyukinha = 'amado por todos futuro rei dos progamadores';

console.log(hyukinha)

