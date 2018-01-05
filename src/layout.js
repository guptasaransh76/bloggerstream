const rawData = {
  articles: [
    {
      id: 'one',
      title: 'Cryptocurrency',
      date: new Date().toString(),
      author: {
        firstName: 'Ram',
        lastName: 'Bajaj',
      },
      body: `A cryptocurrency is a medium of exchange like normal currencies such as USD, but designed for the purpose of exchanging digital information through a process made possible by certain principles of cryptography. Cryptography is used to secure the transactions and to control the creation of new coins. The first cryptocurrency to be created was Bitcoin back in 2009. Today there are hundreds of other cryptocurrencies, often referred to as Altcoins.

Put another way, cryptocurrency is electricity converted into lines of code with monetary value. In the simplest of forms, cryptocurrency is digital currency.

Unlike centralized banking, like the Federal Reserve System, where governments control the value of a currency like USD through the process of printing fiat money, government has no control over cryptocurrencies as they are fully decentralized.

Most cryptocurrencies are designed to decrease in production over time like Bitcoin, which creates a market cap on them. That’s different from fiat currencies where financial institutions can always create more, hence inflation. Bitcoin will never have more than 21 million coins in circulation. The technical system on which all cryptocurrencies are based on was created by Satoshi Nakamoto.

While hundreds of different cryptocurrency specifications exist, most are derived from one of two protocols; Proof-of-work or Proof-of-stake. All cryptocurrencies are maintained by a community of cryptocurrency miners who are members of the general public that have set up their computers or ASIC machines to participate in the validation and processing of transactions.`
    },
    {
      id: 'two',
      title: 'Cloud Computing',
      date: new Date().toString(),
      author: {
        firstName: 'Rajeev',
        lastName: 'Anand',
      },
      body: `Cloud computing is a type of computing that relies on sharing computing resources rather than having local servers or personal devices to handle applications.
In cloud computing, the word cloud(also phrased as "the cloud") is used as a metaphor for "the Internet," so the phrase cloud computing means "a type of Internet-based computing," where different services — such as servers, storage and applications — are delivered to an organization's computers and devices through the Internet. The cloud infrastructure is maintained by the cloud provider, not the individual cloud customer.
In its most simple description, cloud computing is taking services ("cloud services") and moving them outside an organizations firewall on shared systems. Applications and services are accessed via the Web, instead of your hard drive. The services are delivered and used over the Internet and are paid for by cloud customer (your business), typically on an as-needed or pay-per-use business model.
Cloud computing is comparable to grid computing, a type of computing where unused processing cycles of all computers in a network are harnesses to solve problems too intensive for any stand-alone machine.`
    },
  ]
};

const DC = (obj) => JSON.parse(JSON.stringify(obj));

let appData = {
  articles: []
};

export const getArticleList = () => {
  appData.articles = rawData.articles.reduce((acc, article) => {
    acc.push({ id: article.id, title: article.title, date: article.date });
    return acc;
  }, []);

  return Promise.resolve(DC(appData.articles));
};

export const getArticle = (articleId) => {
  appData.currentArticle = rawData.articles.find(article => article.id === articleId);
  return Promise.resolve(DC(appData.currentArticle));
};

export const addArticle = (articleInfo) => {
  const newArticle = Object.assign({}, articleInfo, {
    id: articleInfo.title.toLowerCase().replace(/[^a-z]+/, '-'),
    date: new Date().toString(),
  });
  rawData.articles.push(newArticle);
  appData.currentArticle = newArticle;
  return Promise.resolve(DC(appData.currentArticle));
};
