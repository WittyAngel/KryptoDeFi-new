export const getTokenBalance = (walletAddress, tokenAddress) => {
    console.log("------ wallet Address --------", walletAddress)
    console.log("------- token Address -------", tokenAddress)

    if(walletAddress === null) {
        console.log(" === Didn't connect the wallet, please connect the wallet. === ")
        return
    }
    const Web3 = require('web3')
    // const rpcURL = localStorage.getItem('RPC_URL')
    const rpcURL = 'https://bsc-dataseed.binance.org/'
    const web3 = new Web3(rpcURL)

    // The minimum ABI to get ERC20 Token balance
    let minABI = [
    // balanceOf
    {
        "constant":true,
        "inputs":[{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
    },
    // decimals
    {
        "constant":true,
        "inputs":[],
        "name":"decimals",
        "outputs":[{"name":"","type":"uint8"}],
        "type":"function"
    }
    ];

    let contract = new web3.eth.Contract(minABI,tokenAddress);
    async function getBalance() {
        await contract.methods.balanceOf(walletAddress).call()
        .then(balance => {
            console.log("----------- Balance ------------", balance);
        });
        // return balance;
    }

    getBalance()
}

export default getTokenBalance
