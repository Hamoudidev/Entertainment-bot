const Discord = require('discord.js');
require('discord-reply');
const client = new Discord.Client();

const config = require(`./config.json`)
const co = require(`./bot/co.json`)
const prefix = config.prefix

/// Console

var _0xaf5a=["\x72\x65\x61\x64\x79","\x66\x69\x67\x6C\x65\x74","\x41\x48\x4D\x45\x44","\x74\x65\x78\x74\x53\x79\x6E\x63","\x6C\x6F\x67","\x20\x20\x20\x20\x20\x54\x45\x43\x48","","\x68\x65\x6C\x70\x20\x7C\x20\x54\x6F\x20\x53\x68\x6F\x77\x20\x48\x65\x6C\x70\x20\x43\x6F\x6D\x6D\x61\x6E\x64\x73","\x73\x65\x74\x41\x63\x74\x69\x76\x69\x74\x79","\x75\x73\x65\x72","\x6F\x6E"];client[_0xaf5a[10]](_0xaf5a[0],()=>{const _0x4138x1=require(_0xaf5a[1]);console[_0xaf5a[4]](_0x4138x1[_0xaf5a[3]](_0xaf5a[2]));console[_0xaf5a[4]](_0x4138x1[_0xaf5a[3]](_0xaf5a[5]));client[_0xaf5a[9]][_0xaf5a[8]](`${_0xaf5a[6]}${prefix}${_0xaf5a[7]}`)})

//// Blur

const DIG = require("discord-image-generation");
client.on("message", async message => {
  if(message.content.startsWith(prefix + "blur")){
        let user = message.mentions.users.first() || message.author;

        let img = await new DIG.Blur().getImage(user.avatarURL({ dynamic: false, format: 'png', size: 1024 }))
        
        let att = new Discord.MessageAttachment(img, "blur.png");

    message.lineReplyNoMention(att)
  }
});

///// Gay

client.on("message", async message => {
  if(message.content.startsWith(prefix + "gay")){
        let user = message.mentions.users.first() || message.author;

        let img = await new DIG.Gay().getImage(user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new Discord.MessageAttachment(img, "gay.png");

        message.lineReplyNoMention(attach);
  }
});

//// Delete

client.on("message", async message => {
  if(message.content.startsWith(prefix + "delete")){
        let user = message.mentions.users.first() || message.author;

        let img = await new DIG.Delete().getImage(user.avatarURL({ dynamic: false, format: 'png' }))


        let attach = new Discord.MessageAttachment(img, "delete.png");

        message.lineReplyNoMention(attach);
  }
});

/// RIP

client.on("message", async message => {
  if(message.content.startsWith(prefix + "rip")){
        let user = message.mentions.users.first() || message.author;

        let img = await new DIG.Rip().getImage(user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new Discord.MessageAttachment(img, "rip.png");

        message.lineReplyNoMention(attach);
  }
});

/// Kiss

client.on("message", async message => {
  if(message.content.startsWith(prefix + "kiss")){
        let user = message.mentions.users.first()
        if(!user) return message.channel.send(`** Please Mention a User ! **`)

        let img = await new DIG.Kiss().getImage(message.author.avatarURL({ dynamic: false, format: 'png' }), user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new Discord.MessageAttachment(img, "kiss.png");

        message.lineReplyNoMention(attach);
  }
});

/// Discord

client.on("message", async message => {
  if(message.content.startsWith(prefix + "discord")){
        let user = message.mentions.users.first() || message.author;

        let img = await new DIG.DiscordBlue().getImage(user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new Discord.MessageAttachment(img, 'discord.png');

        message.lineReplyNoMention(attach);
  }
});

/// Spank

client.on("message", async message => {
  if(message.content.startsWith(prefix + "spank")){
        let user = message.mentions.users.first()
        if(!user) return message.lineReplyNoMention(`** Please Mention a User ! **`)

        let img = await new DIG.Spank().getImage(`${message.author.avatarURL({dynamic: false, format: 'png'})}`, `${user.avatarURL({dynamic: false, format: 'png'})}`);

        let attach = new Discord.MessageAttachment(img, 'spank.png');

        message.lineReplyNoMention(attach);
  }
});

/// Trash

client.on("message", async message => {
  if(message.content.startsWith(prefix + "trash")){
        let user = message.mentions.users.first() || message.author;

        let img = await new DIG.Trash().getImage(user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new Discord.MessageAttachment(img, 'trash.png');

        message.lineReplyNoMention(attach);
  }
});

/// Wanted

client.on("message", async message => {
  if(message.content.startsWith(prefix + "wanted")){
        let user = message.mentions.users.first() || message.author;

        let img = await new DIG.Wanted().getImage(user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new Discord.MessageAttachment(img, 'wanted.png');

        message.lineReplyNoMention(attach);
  }
});

/// Egg

client.on("message", async message => {
  if(message.content.startsWith(prefix + "egg")){
        let user = message.mentions.users.first() || message.author;

        let img = await new DIG.Mms().getImage(user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new Discord.MessageAttachment(img, 'egg.png');

        message.lineReplyNoMention(attach);
  }
});

/// Paint

client.on("message", async message => {
  if(message.content.startsWith(prefix + "paint")){
        let user = message.mentions.users.first() || message.author;

        let img = await new DIG.Bobross().getImage(user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new Discord.MessageAttachment(img, 'paint.png');

        message.lineReplyNoMention(attach);
  }
});

/// Slap

client.on("message", async message => {
  if(message.content.startsWith(prefix + "slap")){
        let user = message.mentions.users.first();
        if(!user) return message.lineReplyNoMention(`** Please Mention a User ! **`)

        let img = await new DIG.Batslap().getImage(`${message.author.avatarURL({dynamic: false, format: 'png'})}`, `${user.avatarURL({dynamic: false, format: 'png'})}`);

        let attach = new Discord.MessageAttachment(img, 'slap.png');

        message.lineReplyNoMention(attach);
  }
});

/// Triggered

client.on("message", async message => {
  if(message.content.startsWith(prefix + "triggered")){
        let user = message.mentions.users.first() || message.author;

        let img = await new DIG.Triggered().getImage(user.avatarURL({ dynamic: false, format: 'png' }))

        let attach = new Discord.MessageAttachment(img, 'triggered.gif');

        message.lineReplyNoMention(attach);
  }
});

/// Help

client.on('message', message => {
  if(message.content.startsWith(prefix + 'help')){
    let help = new Discord.MessageEmbed()
    .setColor(`BLUE`)
    .setAuthor(message.author.username,message.author.avatarURL({dynamic: true}))
    .setDescription(`
    > :orange_circle: | **${prefix}blur** | لوضع نغمشة على صورتك
    > :orange_circle: | **${prefix}gay** | لوضع علم ش*اذ على صورتك
    > :orange_circle: | **${prefix}delete** | لوضع صورتك على صورة حذف  من كومبيوتر
    > :orange_circle: | **${prefix}rip** | لوضع صورتك على قبر وانك توفيت
    > :orange_circle: | **${prefix}kiss** | لتبوس شخص ما
    > :orange_circle: | **${prefix}discord** | لوضع صورتك وكأنك شعار ديسكورد
    > :orange_circle: | **${prefix}spank** | لضرب شخص ما وتعليمه الادب
    > :orange_circle: | **${prefix}trash** | لوضع صورتك وكانها قمامة
    > :orange_circle: | **${prefix}wanted** | لوضع صورتك على اعلان وكانك مطلوب
    > :orange_circle: | **${prefix}egg** | لوضع صورتك على بيضة
    > :orange_circle: | **${prefix}paint** | لوضع صورتك على لوحة وكأن الرسام يرسمك
    > :orange_circle: | **${prefix}slap** | لأعطاء شخص ما كف على وجه
    > :orange_circle: | **${prefix}triggered** | لوضع ايفكت على صورتك
    `)
    .setThumbnail(client.user.avatarURL())
    .setFooter(`Bot Developer ${co.Username}`)
    //// لو عايز الاوامر في الخاص
    //// حول channel => author
    //// لو عايز اوامر في الشات اللى اتبعت فيه الاوامر
    //// سيب كلمة channel
    message.author.send(help).then(message.delete())
  }
})

client.login(process.env.bot);
