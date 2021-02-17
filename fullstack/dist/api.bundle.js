!function(e){var a={};function o(s){if(a[s])return a[s].exports;var i=a[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,a,s){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:s})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)o.d(s,i,function(a){return e[a]}.bind(null,i));return s},o.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/public",o(o.s=5)}([function(e,a){e.exports=class{static info(e){console.log(new Date+" - info ::::: "+e)}static debug(e){console.log(new Date+" - debug ::::: "+e)}static error(e){console.log(new Date+" - error ::::: "+e)}}},function(e,a){e.exports=require("express")},function(e,a,o){const s=o(4);e.exports=class extends s{constructor(e={},a){super("BOOKS"),this.addColumn("name","NAME").addColumn("author","AUTHOR").addColumn("description","DESCRIPTION").addColumn("coverPicture","COVER_PICTURE").addColumn("category","CATEGORY").addColumn("stock","STOCK").addColumn("usersWhoLiked","USERS_WHO_LIKED"),this.setValues(e,a)}get liked(){return!!this.usersWhoLiked.find(e=>"Me"==e)}toJSON(){let e=super.toJSON();return e.liked=this.liked,e}}},function(e,a,o){const s=o(12),i=o(2);e.exports=class extends s{constructor(){super(i)}}},function(e,a){e.exports=require("@schirrel/pg-connection/Model")},function(e,a,o){o(6),e.exports=o(7)},function(e,a){e.exports=require("@babel/polyfill")},function(e,a,o){const s=o(8),i=o(16),t=o(1),n=t(),r=o(21),d=o(22),c=o(0);d.config();const l=o(23),u=process.env.PORT||3e3;i(),n.use(r()),n.options("*",r()),n.use(l.urlencoded({extended:!0})),n.use(l.json()),n.use("/api",s),n.listen(u,()=>{c.info("App started at "+u)}),n.use(t.static(__dirname+"/public"))},function(e,a,o){const s=o(1).Router();s.use("/book",o(9)),e.exports=s},function(e,a,o){let s=o(1).Router();const i=o(10),t=o(14);this.service=new i,s.use(t),s.post("/",async(e,a)=>{let o=e.body;try{let e=await this.service.create(o);e.erro?a.status(500).send(e.message):a.send(e)}catch(e){a.status(500).send(e.message)}}),s.get("/search",async(e,a)=>{let o=await this.service.search(e.query);a.send(o)}),s.get("/list",async(e,a)=>{let o=await this.service.search({},{size:10});a.send(o)}),s.get("/:id",async(e,a)=>{let o=e.params.id,s=await this.service.get(o);a.send(s)}),s.delete("/:id",async(e,a)=>{let o=e.params.id;await this.service.delete(o),a.send()}),s.put("/:id",async(e,a)=>{let o=e.params.id,s=e.body;try{let e=await this.service.update(s,o);e.erro?a.status(500).send(e):a.send(e)}catch(e){a.status(500).send(e)}}),s.put("/liked/:id",async(e,a)=>{let o=e.params.id,s=await this.service.liked(o);a.send(s)}),e.exports=s},function(e,a,o){const s=o(11),i=o(3),t=o(2),n=o(13);e.exports=class extends s{constructor(){super(i,t)}async search(e){let a={},o={useLike:"name"};if(n.defined(e.name)&&(a.name=e.name+"%",o.useLike={name:!0}),n.defined(e.filter))switch(e.filter){case"asc":o.custom={query:` ORDER BY ${(new this.table).getColumn("name")} ASC`};break;case"inStock":o.custom={query:` ${e.name?" AND ":" WHERE "} ${(new this.table).getColumn("stock")}  > 0`};break;case"best":o.custom={query:` ORDER BY coalesce(array_length(${(new this.table).getColumn("usersWhoLiked")}, 1), 0) DESC`};break;case"liked":o.custom={query:` ${e.name?" AND ":" WHERE "} 'Me' = ANY (${(new this.table).getColumn("usersWhoLiked")})`}}return super.search(a,o)}async liked(e){let a=await super.get(e);a.usersWhoLiked=a.usersWhoLiked||[],a.usersWhoLiked.find(e=>"Me"==e)?a.usersWhoLiked=a.usersWhoLiked.filter(e=>"Me"!=e):a.usersWhoLiked.push("Me"),await super.update(a)}}},function(e,a,o){const s=o(0);e.exports=class{constructor(e,a){if(!e||!a)throw new Error("Repository and Model are both required");this.repository=new e,this.table=a,this.logger=s}async get(e){return await this.repository.get(e)}async create(e){let a=await this.repository.create(e);if(!a.erro)return a.rows[0];{let e=a;if(e.constraint&&1!=e.routine.toLowerCase().indexOf("unique")){throw{erro:!0,message:"Violação de constraint única: "+e.constraint.substring(e.constraint.indexOf("_"))}}}}async update(e){let a=await this.repository.update(e);if(a.erro)throw new Error(a);return a.rows}async delete(e){return await this.repository.delete(e)}async list(){let e=await this.repository.list();return e=e.map(e=>new this.table(e,!0)),e}async search(e,a={}){return await this.repository.search(e,a)}async paginate(e){}}},function(e,a){e.exports=require("@schirrel/pg-connection/Repository")},function(e,a){e.exports={defined:(e,a)=>e!==a&&null!=e&&e.toString().length>0,isUndefined:(e,a)=>e==a}},function(e,a,o){const s=o(15),i=o(4);e.exports=s.json((function(e,a,o){if(e instanceof Array)for(let a=0;a<e.length;a++)e[a]instanceof i&&(e[a]=e[a].toJSON());else e instanceof i&&(e=e.toJSON());return e}))},function(e,a){e.exports=require("express-mung")},function(e,a,o){var s=o(17).readFileSync("./create.sql").toString();const i=o(18),t=o(20),n=o(0);e.exports=()=>{t.query(s).then(e=>{i()}).catch(e=>{n.error(e)})}},function(e,a){e.exports=require("fs")},function(e,a,o){const s=o(19),i=o(2),t=new(o(3)),n=o(0),r=e=>{e.users_who_liked=e.users_who_liked?"{"+e.users_who_liked.toString()+"}":"";for(let a in e)e[a.toUpperCase()]=e[a],delete e[a];return e};e.exports=async()=>{if(await(async()=>(await t.search({},{custom:{query:"LIMIT 2",values:[]}})).length)()>0)return;let e=[];s.map(r).forEach(a=>{e.push(t.create(new i(a,!0)))}),Promise.all(e).then(e=>{n.info("Database populated")})}},function(e){e.exports=JSON.parse('[{"name":"Pele Negra, Máscaras Brancas","author":"Frantz Fanon","description":"A obra fala sobre a negação do racismo contra o negro na França e teve sua primeira edição, em português, em 1963. Aborda o pensamento da Diáspora Africana, o pensamento da descolonização, do pensamento psicológico, da teoria das ciências, da filosofia e da literatura caribenha. O autor trata também da ideologia que ignora a cor, e como ela pode apoiar o racismo que nega - pensamento que causou grande turbulência nas décadas de 1960 e 1970. O livro busca aguçar o senso crítico sobre o racismo e seus impactos.","cover_picture":"https://images-na.ssl-images-amazon.com/images/I/51MK6vm5mlL._SX357_BO1,204,203,200_.jpg","category":"Universitario","stock":0,"users_who_liked":["Paula","Giulia","Matias","Julia","Wilson"]},{"name":"Beck Mongolian Chop Squad","author":"Harold Sakuichi","description":"BECK is a Japanese manga series written and illustrated by Harold Sakuishi. It was originally serialized in Monthly Shōnen Magazine from 1999 to 2008, with the 103 chapters later published into 34 tankōbon volumes by Kodansha. It tells the story of a group of Japanese teenagers who form a rock band and their struggle to fame, focusing on 14-year-old Yukio \\"Koyuki\\" Tanaka, who until meeting guitar prodigy Ryusuke Minami was an average teen with a boring life. It was adapted into a 26-episode anime television series, titled BECK: Mongolian Chop Squad, by Madhouse and aired on TV Tokyo from October 2004 to March 2005. A live-action film adaptation was released in 2010 and stars Takeru Satoh as Koyuki and Hiro Mizushima as Ryusuke.[4] The series has also spawned three guidebooks, four soundtracks, a video game and a line of guitars. The Beck manga was licensed for an English-language release in North America by Tokyopop. The first volume was published in July 2005, but the series was discontinued after the release of volume 12 in June 2008. In July 2018, ComiXology began releasing the series digitally. The anime was given an English-language release by Funimation from in 2007 to 2008.","cover_picture":"https://upload.wikimedia.org/wikipedia/en/f/f8/BECK_vol1_Cover.jpg","category":"Manga","stock":0,"users_who_liked":["Matias","Wilson","Giulia"]},{"name":"Head First Design Patterns: A Brain-Friendly Guide","author":"Eric Freeman","description":"At any given moment, someone struggles with the same software design problems you have. And, chances are, someone else has already solved your problem. This edition of Head First Design Patterns—now updated for Java 8—shows you the tried-and-true, road-tested patterns used by developers to create functional, elegant, reusable, and flexible software. By the time you finish this book, you’ll be able to take advantage of the best design practices and experiences of those who have fought the beast of software design and triumphed. We think your time is too valuable to spend struggling with New concepts. Using the latest research in cognitive science and learning theory to craft a multi-sensory learning experience, Head First Design Patterns uses a visually rich format designed for the way your brain works, not a text-heavy approach that puts you to sleep.","cover_picture":"https://images-na.ssl-images-amazon.com/images/I/61APhXCksuL._SX430_BO1,204,203,200_.jpg","category":"Technology","stock":14,"users_who_liked":[]},{"name":"Naruto","author":"Masashi Kishimoto","description":"Naruto (Japanese: ナルト) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts – the first set in Naruto\'s pre-teen years, and the second in his teens. The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueisha\'s monthly Hop Step Award the following year, and Naruto (1997). Naruto was serialized in Shueisha\'s magazine, Weekly Shōnen Jump from 1999 to 2014, and released in tankōbon (book) form in 72 volumes. The manga was adapted into an anime television series produced by Pierrot and Aniplex, which broadcast 220 episodes in Japan from 2002 to 2007; the English adaptation of the series aired on Cartoon Network and YTV from 2005 to 2009. Naruto: Shippuden, a sequel to the original series, premiered in Japan in 2007, and ended in 2017, after 500 episodes. The English adaptation was broadcast on Disney XD from 2009 to 2011, airing the first 98 episodes, and then switched over to Adult Swim\'s Toonami programming block in January 2014, starting over from the first episode. The English adaptation is still airing weekly on Adult Swim to this day. Besides the anime series, Pierrot has developed eleven movies and twelve original video animations (OVAs). Other Naruto-related merchandise includes light novels, video games, and trading cards developed by several companies.","cover_picture":"https://upload.wikimedia.org/wikipedia/en/f/f8/BECK_vol1_Cover.jpg","category":"Manga","stock":10,"users_who_liked":["Matias","Warlen"]},{"name":"Chobits","author":"Clamp","description":"Chobits is a Japanese manga series written and illustrated by the Japanese manga collective Clamp. It was published by Kodansha in Weekly Young Magazine from the 43rd issue for 2000 to the 48th issue for 2002 and collected in eight bound volumes. Chobits was adapted as a 26-episode-long anime television series broadcast on TBS from April to September 2002. In addition, it has spawned two video games as well as various merchandise such as figurines, collectable cards, calendars, and artbooks. The series tells the story of Hideki Motosuwa, who finds an abandoned persocom (パソコン, PasoKon), or personal computer (パーソナルコンピュータ pāsonaru konpyūta) with anthro-human form, which he names \\"Chi\\" after the only word it initially can speak. As the series progresses, they explore the mysteries of Chi\'s origin together and questions about the relationship between human beings and computers. The manga is set in the same universe as Angelic Layer, taking place a few years after the events of that story, and like Angelic Layer, it explores the relationship between humans and electronic devices shaped like human beings. Chobits branches off as a crossover into many other stories in different ways, such as Tsubasa: Reservoir Chronicle, xxxHolic and Kobato.","cover_picture":"https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Chobites_volume_1_cover.jpg/220px-Chobites_volume_1_cover.jpg","category":"Manga","stock":10,"users_who_liked":["Wilson"]},{"name":"Nana","author":"Ai Yazawa","description":"Nana is a Japanese manga series written and illustrated by Ai Yazawa. It was serialized in Cookie magazine from July 2000 until June 2009 when it went on indefinite hiatus, with almost all its chapters collected into 21 tankōbon volumes published by Shueisha. The series derives its title from the name of the two main characters, both of whom are called Nana. Nana Komatsu is a small town girl who goes to Tokyo to follow her boyfriend and college friends, with the hope of having her dream life. Nana Osaki was in a popular punk rock band in her hometown. She goes to Tokyo with the goal of making it big as a singer. The two Nanas meet on the train ride to the city. Later, they run into each other again when they happen to check out the same apartment, and the girls decide to become roommates. The series chronicles their friendship and their lives as each chases her dreams.","cover_picture":"https://upload.wikimedia.org/wikipedia/en/thumb/9/91/NANA_vol1.jpg/220px-NANA_vol1.jpg","category":"Manga","stock":0,"users_who_liked":["Wilson","Paula","Giulia"]},{"name":"Clean Code","author":"Robert C. Martin","description":"Even bad code can function. But if code isn’t clean, it can bring a development organization to its knees. Every year, countless hours and significant resources are lost because of poorly written code. But it doesn’t have to be that way. Noted software expert Robert C. Martin presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship . Martin has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of a software craftsman and make you a better programmer—but only if you work at it. What kind of work will you be doing? You’ll be reading code—lots of code. And you will be challenged to think about what’s right about that code, and what’s wrong with it. More importantly, you will be challenged to reassess your professional values and your commitment to your craft.","cover_picture":"https://images-na.ssl-images-amazon.com/images/I/41yafGMO+rL._SX376_BO1,204,203,200_.jpg","category":"Technology","stock":4,"users_who_liked":["Matias","Wilson","Paula","Warlen"]},{"name":"Clean Architecture","author":"Robert C. Martin","description":"Building upon the success of best-sellers The Clean Coder and Clean Code, legendary software craftsman Robert C. \\"Uncle Bob\\" Martin shows how to bring greater professionalism and discipline to application architecture and design. As with his other books, Martin\'s Clean Architecture doesn\'t merely present multiple choices and options, and say \\"use your best judgment\\": it tells you what choices to make, and why those choices are critical to your success. Clean Architecture is essential reading for every software architect, systems analyst, system designer, and software manager -- and for any programmer who aspires to these roles or is impacted by their work.","cover_picture":"https://images-na.ssl-images-amazon.com/images/I/41TPrNDI50L._SX387_BO1,204,203,200_.jpg","category":"Technology","stock":0,"users_who_liked":["Matias","Wilson","Paula","Warlen"]},{"name":"Dragon Ball","author":"Akira Toriyama","description":"Dragon Ball is a Japanese media franchise created by Akira Toriyama in 1984. The initial manga, written and illustrated by Toriyama, was serialized in Weekly Shōnen Jump from 1984 to 1995, with the 519 individual chapters collected into 42 tankōbon volumes by its publisher Shueisha. Dragon Ball was initially inspired by the classical 16th century Chinese novel Journey to the West, as well as Hong Kong martial arts films. The series follows the adventures of the protagonist, Son Goku, from his childhood through adulthood as he trains in martial arts. He spends his childhood far from civilization until he meets a teen girl named Bulma, who encourages him to join her quest in exploring the world in search of the seven orbs known as the Dragon Balls, which summon a wish-granting dragon when gathered. Along his journey, Goku makes several other friends, becomes a family man, discovers his alien heritage, and battles a wide variety of villains, many of whom also seek the Dragon Balls.","cover_picture":"https://upload.wikimedia.org/wikipedia/en/c/c9/DB_Tank%C5%8Dbon.png","category":"Manga","stock":4,"users_who_liked":["Matias","Giulia"]},{"name":"Orgulho e preconceito","author":"Jane Austin","description":"Orgulho e preconceito é o livro mais famoso de Jane Austen e possui uma série de personagens inesquecíveis e um enredo memorável. Austen nos apresenta Elizabeth Bennet como heroína irresistível e seu pretendente aristocrático, o sr. Darcy. Nesse livro, aspectos diferentes são abordados: orgulho encontra preconceito, ascendência social confronta desprezo social, equívocos e julgamentos antecipados conduzem alguns personagens ao sofrimento e ao escândalo. O livro pode ser considerado a obra-prima da escritora, que equilibra comédia com seriedade, observação meticulosa das atitudes humanas e sua ironia refinada. A nova coleção possui capa dura e estilo inspirado nos bullet journals.","cover_picture":"https://images-na.ssl-images-amazon.com/images/I/511c2+CJ30L._SX326_BO1,204,203,200_.jpg","category":"Romance","stock":4,"users_who_liked":["Matias","Paula","Warlen","Julia"]},{"name":"As Mães","author":"Brit Bennette","description":"Tudo começa com um segredo. As ramificações que se seguem vão acompanhar três personagens desde o fim da adolescência até o início da vida adulta, exercendo um impacto capaz de influenciar suas trajetórias por muito tempo depois de seus anos de juventude. Em uma comunidade negra e cristã no sul da Califórnia, Nadia Turner, uma garota bonita, obstinada e ainda marcada pelo recente suicídio da mãe, será a primeira da família a cursar uma universidade, mas, antes de deixar sua cidade natal, ela se envolve com o filho do pastor da igreja, Luke Sheppard. Aos vinte e um anos, Luke é um ex-atleta que trabalha como garçom depois que uma grave lesão o afastou dos campos. Os dois são jovens e não oficializam o relacionamento, mas o segredo que resulta desse romance terá consequências maiores do que eles imaginam.","cover_picture":"https://images-na.ssl-images-amazon.com/images/I/51mZLayQv9L._SX346_BO1,204,203,200_.jpg","category":"Romance","stock":0,"users_who_liked":[]},{"name":"Prática Civil","author":"Nathaly Campitelli Roque","description":"E NA PRÁTICA, COMO FICA COM O NOVO CPC? Essa é a pergunta que muitos fazem, mas poucos respondem. Ousamos! Trazemos a público a coleção pioneira atualizada conforme o Novo CPC nas principais áreas de atuação da advocacia. A Coleção Prática foi concebida com o propósito de oferecer uma revisão dos principais temas exigidos em provas e concursos públicos. Metodicamente organizada e primando pelo rigor técnico, seu conteúdo é exposto de maneira clara e objetiva, possibilitando o estudo sistematizado.  Estruturada em sete volumes (Administrativa, Civil, Constitucional, Empresarial, Penal, Trabalhista e Tributária), a coleção mantém, em todos eles, a identidade visual e a didática necessárias para contribuir com a eficiência e a praticidade dos estudos. Os volumes contêm um capítulo com noções gerais de redação e técnica jurídica, além de teses e modelos de peças e questões discursivas, para que o aluno possa testar seus conhecimentos, conferindo o gabarito disposto ao final. Também são apresentadas dicas importantes para a elaboração das provas nos moldes exigidos pelas bancas examinadoras, inclusive pelo exame da OAB. Acompanhe as nossas publicações, cadastre-se e receba as informações por e-mail ","cover_picture":"https://images-na.ssl-images-amazon.com/images/I/41RW4lLv5VL._SX346_BO1,204,203,200_.jpg","category":"Universitario","stock":0,"users_who_liked":["Julia"]},{"name":"Manual de Direito Processual Civil: Volume único","author":"Daniel Amorim","description":"Foram incorporados ao Manual temas novos como ordem cronológica nos julgamentos, incidente de desconsideração da personalidade jurídica, julgamento antecipado parcial do mérito, cláusula geral de negócio jurídico processual, calendarização do procedimento, procedimentos especiais de dissolução parcial de sociedade e de ações de família, incidente de resolução de demandas repetitivas (IRDR), incidente de assunção de competência e precedentes. Fenômenos processuais tradicionais, como a competência, a intervenção de terceiros, o procedimento comum, os recursos, a ordem dos processos no tribunal, a execução e a tutela provisória foram significativamente alterados pelo Código de Processo Civil e tais alterações são todas abordadas na presente obra. É importante registrar que a obra continua com muitas citações jurisprudenciais, já que nem toda nossa jurisprudência será afastada pelo Código de Processo Civil. Nas hipóteses em que entendi que essa seria mantida, as citações permaneceram; onde entendo que elas serão superadas, citei-as justamente para apontar a superação. É natural que os tribunais ainda demorem algum tempo para criar jurisprudência a respeito das novidades do novo diploma processual, mas desprezar totalmente o histórico jurisprudencial não tem sentido.","cover_picture":"https://images-na.ssl-images-amazon.com/images/I/41SPkf2cerL._SX353_BO1,204,203,200_.jpg","category":"Universitario","stock":10,"users_who_liked":[]},{"name":"551 ATIVIDADES TURMA DA MONICA","author":"Maurício de Souza","description":"Tem caça-palavras, cruzadinha, labirinto, jogo dos sete erros, enigma, ligue os pontos e muito mais. E tudo com os personagens maravilhosos de Mauricio de Sousa. Uma diversão deliciosa para a família toda.","cover_picture":"https://images-na.ssl-images-amazon.com/images/I/51gjxgU7JqL._SY498_BO1,204,203,200_.jpg","category":"Infantil","stock":20,"users_who_liked":["Matias"]},{"name":"Vagabond","author":"Takehiko Inoue","description":"Vagabond is a Japanese epic martial arts manga series written and illustrated by Takehiko Inoue. It portrays a fictionalized account of the life of Japanese swordsman Musashi Miyamoto, based on Eiji Yoshikawa\'s novel Musashi. It has been serialized in Kodansha\'s seinen manga magazine Weekly Morning since September 1998, with its chapters collected into 37 tankōbon volumes as of July 2014. Viz Media licensed the series for English release in North America and has published 37 volumes as of April 2015. The series is currently in an extended hiatus, with the latest chapter released in May 2015. Vagabond won a 2000 Kodansha Manga Award and the 2002 Tezuka Osamu Cultural Prize, and has sold more than 82 million copies worldwide, making it one of the best-selling manga series.","cover_picture":"https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Vagabond21.jpg/220px-Vagabond21.jpg","category":"Manga","stock":3,"users_who_liked":["Julio","Paula"]},{"name":"501 DESENHOS PARA COLORIR TURMA DA MONICA","author":"Maurício de Souza","cover_picture":"https://images-na.ssl-images-amazon.com/images/I/51HTWEUcdxL._SY498_BO1,204,203,200_.jpg","category":"Infantil","stock":"5","users_who_liked":{}}]')},function(e,a){e.exports=require("@schirrel/pg-connection/Database")},function(e,a){e.exports=require("cors")},function(e,a){e.exports=require("dotenv")},function(e,a){e.exports=require("body-parser")}]);