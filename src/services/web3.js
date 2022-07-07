import Web3 from 'web3'
import chainList from '../utils/chainlist.json'

export const enableEthereum = async () => {
  if (window.ethereum) {
    await window.ethereum.enable()
    return true
  } else {
    return false
  }
}

export const getNetwork = (chainId) => {
  const chains = chainList.data

  return chains.find((item) => item.chainId === chainId)
}

export const changeNetwork = async (chainId) => {
  const {ethereum} = window

  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{chainId: Web3.utils?.toHex(chainId)}],
    })
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        const network = getNetwork(chainId)
        await ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: Web3.utils?.toHex(chainId),
              chainName: network?.name,
              nativeCurrency: network?.nativeCurrency,
              rpcUrls: network?.rpc,
              blockExplorerUrls: network?.blockExplorerUrls,
            },
          ],
        })
      } catch (addError) {
        console.error(addError)
        // handle "add" error
      }
    }

    throw new Error(switchError.message)
  }
}
