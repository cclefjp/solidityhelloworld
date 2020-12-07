const abi = [
    {
      "inputs": [],
      "stateMutability": "payable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hello",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "destroy",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

//デプロイした際のアドレスを入れる
const address = '0x5e5738339Ad2751B9839f4DFE8ae9bf9B6169a0C';
let helloContract;
web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');
const web3js = new Web3(web3Provider);
let account;

function hello() {
    $(".hello_log").html("hello function called. account.toString()=" + account.toString());
    return helloContract.methods.hello().call({
        from: account.toString()
    }
    );
}

function displayHello(result) {
    $(".displayhello_startlog").html("displayHello called.");
    $(".displayhello_result").html(result);
    $(".displayhello_finishlog").html("displayHello finished.");
}
 
function startApp() {
    $(".startApp_startlog").html("startApp called.");

    helloContract = new web3js.eth.Contract(abi, address);
    hello()
    .then(displayHello);

    $(".startApp_endlog").html("startApp finish.");
}

async function getAccount() {
    $(".getAccount_startlog").html("getAccount called.");
    account = await ethereum.request({ method: 'eth_accounts' });
    $(".getAccount_endlog").html("Finishing getAccount. typeof account=" + typeof account + ", account=" + account);
}

window.addEventListener('load', async function() {

    if (typeof ethereum !== 'undefined') {
        $(".metamask_result").html("Metamask Found");
        const ethereumButton = document.querySelector('.enableEthereumButton');

        ethereumButton.addEventListener('click', async () => {
            await ethereum.request({ method: 'eth_requestAccounts' });
        });
        await getAccount();
    } else {
    }
    startApp()
  })